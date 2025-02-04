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
package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/warden-protocol/wardenprotocol/x/intent/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ActionsByAddress(goCtx context.Context, req *types.QueryActionsByAddressRequest) (*types.QueryActionsByAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)
	actionsStore := prefix.NewStore(store, types.KeyPrefix(types.ActionKey))

	// This query is vastly inefficient as it loads all actions, loads all
	// intents linked to them, and checks if the requested address is a
	// participant in each intent.

	actions, pageRes, err := query.GenericFilteredPaginate(k.cdc, actionsStore, req.Pagination, func(key []byte, value *types.Action) (*types.Action, error) {
		if req.Status != types.ActionStatus_ACTION_STATUS_UNSPECIFIED && value.Status != req.Status {
			return nil, nil
		}

		pol, err := IntentForAction(ctx, &k, value)
		if err != nil {
			return nil, err
		}

		if _, err := pol.AddressToParticipant(req.Address); err != nil {
			// address is not a participant in this intent
			return nil, nil
		}

		return value, nil
	}, func() *types.Action { return &types.Action{} })

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryActionsByAddressResponse{
		Actions:    actions,
		Pagination: pageRes,
	}, nil
}
