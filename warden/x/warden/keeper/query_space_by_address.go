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

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/warden-protocol/wardenprotocol/warden/x/warden/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SpaceByAddress(goCtx context.Context, req *types.QuerySpaceByAddressRequest) (*types.QuerySpaceByAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	space, err := k.GetSpace(ctx, req.Address)
	if err != nil {
		return nil, err
	}

	return &types.QuerySpaceByAddressResponse{
		Space: &space,
	}, nil
}
