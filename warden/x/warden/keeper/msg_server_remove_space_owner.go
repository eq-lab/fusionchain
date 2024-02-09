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
	"fmt"

	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/warden-protocol/wardenprotocol/warden/intent"
	intenttypes "github.com/warden-protocol/wardenprotocol/warden/x/intent/types"
	"github.com/warden-protocol/wardenprotocol/warden/x/warden/types"
)

func (k msgServer) RemoveSpaceOwner(goCtx context.Context, msg *types.MsgRemoveSpaceOwner) (*types.MsgRemoveSpaceOwnerResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	ws, err := k.GetSpace(ctx, msg.SpaceAddr)
	if err != nil {
		return nil, err
	}

	act, err := k.intentKeeper.AddAction(ctx, msg.Creator, msg, ws.AdminIntentId, msg.Btl)
	if err != nil {
		return nil, err
	}

	res, err := k.RemoveOwnerActionHandler(ctx, *act, &cdctypes.Any{})
	return res.(*types.MsgRemoveSpaceOwnerResponse), err
}

func (k msgServer) RemoveOwnerIntentGenerator(ctx sdk.Context, act intenttypes.Action) (intent.Intent, error) {
	msg, err := intenttypes.GetActionMessage[*types.MsgRemoveSpaceOwner](k.cdc, act)
	if err != nil {
		return nil, err
	}

	ws, err := k.GetSpace(ctx, msg.SpaceAddr)
	if err != nil {
		return nil, err
	}

	pol := ws.IntentRemoveOwner()
	return pol, nil
}

func (k msgServer) RemoveOwnerActionHandler(ctx sdk.Context, act intenttypes.Action, payload *cdctypes.Any) (any, error) {
	ready, err := k.intentKeeper.CheckActionReady(ctx, act, nil)
	if err != nil {
		return nil, err
	}

	if !ready {
		return nil, nil
	}

	msg, err := intenttypes.GetActionMessage[*types.MsgRemoveSpaceOwner](k.cdc, act)
	if err != nil {
		return nil, err
	}

	ws, err := k.GetSpace(ctx, msg.SpaceAddr)
	if err != nil {
		return nil, err
	}

	if !ws.IsOwner(msg.Owner) {
		return nil, fmt.Errorf("owner does not exist")
	}

	ws.RemoveOwner(msg.Owner)

	if err := k.SetSpace(ctx, ws); err != nil {
		return nil, err
	}

	return &types.MsgRemoveSpaceOwnerResponse{}, nil
}
