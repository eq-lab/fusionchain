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
package types

import (
	"fmt"

	"github.com/warden-protocol/wardenprotocol/warden/intent"
)

func (w *Space) SetAddress(addr string) { w.Address = addr }

func (w *Space) IsOwner(address string) bool {
	for _, owner := range w.Owners {
		if owner == address {
			return true
		}
	}
	return false
}

func (w *Space) AddOwner(address string) error {
	if w.IsOwner(address) {
		return fmt.Errorf("owner already exists")
	}
	w.Owners = append(w.Owners, address)
	return nil
}

func (w *Space) RemoveOwner(address string) {
	for i, owner := range w.Owners {
		if owner == address {
			w.Owners = append(w.Owners[:i], w.Owners[i+1:]...)
			return
		}
	}
}

func (w *Space) IntentAddOwner() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentRemoveOwner() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentAppendChild() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentNewKeyRequest() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentNewSignatureRequest() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentNewSignTransactionRequest() intent.Intent {
	return w.AnyOwnerIntent()
}

func (w *Space) IntentUpdateSpace() intent.Intent {
	return w.AnyOwnerIntent()
}

// AnyOwnerIntent returns a intent that is satisfied when at least one of the owners of the space approves.
func (w *Space) AnyOwnerIntent() intent.Intent {
	return intent.NewAnyInGroupIntent(w.Owners)
}
