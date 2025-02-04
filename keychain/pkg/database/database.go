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
package database

import "fmt"

type Error string

func (e Error) Error() string {
	return string(e)
}

const (
	ErrNotFound = Error("not found")
)

type Database interface {
	// Persist update or insert the key
	Persist(key string, value []byte) error
	Get(key string) ([]byte, error)
	Has(key string) (bool, error)
	Read(prefix string) (map[string][]byte, error)
	Delete(key string) error
	Close() error
}

type PrefixDB struct {
	prefix string
	db     Database
}

func NewPrefixDB(prefix string, db Database) *PrefixDB {
	return &PrefixDB{
		prefix: prefix,
		db:     db,
	}
}

func (p *PrefixDB) buildKey(key string) string {
	return fmt.Sprintf("%s.%s", p.prefix, key)
}

func (p *PrefixDB) Persist(key string, value []byte) error {
	return p.db.Persist(p.buildKey(key), value)
}

func (p *PrefixDB) Get(key string) ([]byte, error) {
	return p.db.Get(p.buildKey(key))
}

func (p *PrefixDB) Read(prefix string) (map[string][]byte, error) {
	return p.db.Read(p.buildKey(prefix))
}

func (p *PrefixDB) Has(key string) (bool, error) {
	return p.db.Has(p.buildKey(key))
}

func (p *PrefixDB) Delete(key string) error {
	return p.db.Delete(p.buildKey(key))
}

func (p *PrefixDB) Close() error {
	return p.db.Close()
}
