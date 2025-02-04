// Copyright 2024
//
// This file includes work covered by the following copyright and permission notices:
//
// Copyright 2023 Qredo Ltd.
// Licensed under the Apache License, Version 2.0;
//
// This file is part of the Warden Protocol library.
//
// The Warden Protocol library is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// You should have received a copy of the GNU Lesser General Public License
// along with the Warden Protocol library. If not, see https://github.com/warden-protocol/wardenprotocol/blob/main/LICENSE
package main

import (
	"context"
	"encoding/binary"
	"fmt"
	"math/big"
	"os"
	"time"

	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/ethereum/go-ethereum/rlp"
	"github.com/warden-protocol/wardenprotocol/go-client"
	treasurytypes "github.com/warden-protocol/wardenprotocol/x/treasury/types"
	"golang.org/x/exp/slog"
)

// relayer-eth is a service that relays signed Ethereum transactions to Warden.
//
// It queries signed transactions from Warden, and tries to broadcast them to
// the specified Ethereum node.
//
// Set the following environment variables to run the service:
// - ETH_URL: Ethereum node URL (eg. https://sepolia.infura.io/v3/...)
// - WARDEN_URL: Warden node URL (eg. localhost:9090)

func main() {
	// config
	ethURL, ok := os.LookupEnv("ETH_URL")
	if !ok {
		panic("ETH_URL is not set")
	}

	wardenURL, ok := os.LookupEnv("WARDEN_URL")
	if !ok {
		panic("WARDEN_URL is not set")
	}

	walletTypeStr, ok := os.LookupEnv("WALLET_TYPE")
	if !ok {
		panic("WALLET_TYPE is not set, try 'ETH' or 'ETH_SEPOLIA'")
	}
	walletTypeInt := treasurytypes.WalletType_value["WALLET_TYPE_"+walletTypeStr]
	if walletTypeInt == 0 {
		panic("invalid WALLET_TYPE, try 'ETH' or 'ETH_SEPOLIA'")
	}
	walletType := treasurytypes.WalletType(walletTypeInt)

	chainIDStr, ok := os.LookupEnv("CHAIN_ID")
	if !ok {
		panic("CHAIN_ID is not set")
	}
	chainID, ok := big.NewInt(0).SetString(chainIDStr, 10)
	if !ok {
		panic("CHAIN_ID is not a valid integer")
	}

	// init services
	ethClient, err := NewEthClient(ethURL)
	if err != nil {
		panic(err)
	}

	wardenClient, err := client.NewQueryClient(wardenURL, true)
	if err != nil {
		panic(err)
	}

	// run loop
	var nextKey []byte
	for {
		nextKey = run(chainID, walletType, wardenClient, ethClient, nextKey)
		time.Sleep(1 * time.Second)
	}
}

func run(chainID *big.Int, walletType treasurytypes.WalletType, wardenClient *client.QueryClient, ethClient *EthClient, nextKey []byte) []byte {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	res, err := wardenClient.SignedTransactions(ctx, &query.PageRequest{
		Key:   nextKey,
		Limit: 10,
	}, walletType)
	if err != nil {
		slog.ErrorCtx(ctx, "failed to get signed transactions", "err", err)
		return nextKey
	}
	slog.InfoCtx(ctx, "processing batch", "count", len(res.SignTransactionRequests), "key", fmt.Sprintf("%x", nextKey))

	if res.Pagination.NextKey != nil {
		nextKey = res.Pagination.NextKey
	} else if len(res.SignTransactionRequests) > 0 {
		// workaround: when len(res.SignTransactionRequests) < limit, the next key is not set
		// so I set it manually but it leaks the implementation detail of the cursor-based pagination
		lastID := res.SignTransactionRequests[len(res.SignTransactionRequests)-1].SignTransactionRequest.Id
		out := make([]byte, 8)
		binary.BigEndian.PutUint64(out, lastID+1)
		nextKey = out
	}

	for _, tx := range res.SignTransactionRequests {
		unsignedTx := tx.SignTransactionRequest.UnsignedTransaction
		signature := tx.SignRequest.GetSignedData()
		signedTx, err := SignTransaction(chainID, unsignedTx, signature)
		if err != nil {
			slog.ErrorCtx(ctx, "invalid transaction signature", "err", err)
			continue
		}

		hash, err := ethClient.BroadcastTransaction(ctx, signedTx)
		if err != nil {
			slog.ErrorCtx(ctx, "failed to broadcast transaction", "err", err)
			continue
		}

		slog.InfoCtx(ctx, "transaction broadcasted", "hash", hash)
	}

	return nextKey
}

func SignTransaction(chainID *big.Int, payload []byte, signature []byte) (*types.Transaction, error) {
	var tx types.Transaction
	err := rlp.DecodeBytes(payload, &tx)
	if err != nil {
		return nil, err
	}
	signer := types.LatestSignerForChainID(chainID)
	signedTx, err := tx.WithSignature(signer, signature)
	if err != nil {
		return nil, err
	}

	j, err := signedTx.MarshalJSON()
	if err != nil {
		return nil, err
	}
	fmt.Println(string(j))

	return signedTx, nil
}

type EthClient struct {
	*ethclient.Client
}

func NewEthClient(url string) (*EthClient, error) {
	client, err := ethclient.Dial(url)
	if err != nil {
		return nil, err
	}
	return &EthClient{Client: client}, nil
}

func (ec *EthClient) BroadcastTransaction(ctx context.Context, signedTx *types.Transaction) (string, error) {
	err := ec.SendTransaction(ctx, signedTx)
	if err != nil {
		return "", fmt.Errorf("failed to send transaction: %w", err)
	}
	return signedTx.Hash().Hex(), nil
}
