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
package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/warden-protocol/wardenprotocol/x/identity/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdNewKeychain() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "new-keychain [description] [admin-intent-id] [key-request-fee] [sign-request-fee]",
		Short: "Broadcast message NewKeychain",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			adminIntentID, err := strconv.ParseUint(args[1], 10, 64)
			if err != nil {
				return err
			}

			keyReqFee, err := strconv.ParseUint(args[2], 10, 64)
			if err != nil {
				return err
			}
			sigReqFee, err := strconv.ParseUint(args[3], 10, 64)
			if err != nil {
				return err
			}

			msg := types.NewMsgNewKeychain(
				clientCtx.GetFromAddress().String(),
				args[0],
				adminIntentID,
				keyReqFee,
				sigReqFee,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
