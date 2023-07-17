// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: qassets/tx.proto

package types

import (
	context "context"
	fmt "fmt"
	grpc1 "github.com/gogo/protobuf/grpc"
	proto "github.com/gogo/protobuf/proto"
	grpc "google.golang.org/grpc"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() { proto.RegisterFile("qassets/tx.proto", fileDescriptor_6745b05fd9d5dbf5) }

var fileDescriptor_6745b05fd9d5dbf5 = []byte{
	// 137 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x28, 0x4c, 0x2c, 0x2e,
	0x4e, 0x2d, 0x29, 0xd6, 0x2f, 0xa9, 0xd0, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0x92, 0x2d, 0x2c,
	0x4a, 0xc9, 0x4f, 0xce, 0x48, 0xcc, 0xcc, 0xd3, 0x4b, 0x2b, 0x2d, 0xce, 0xcc, 0xcf, 0x83, 0xb0,
	0xa1, 0xea, 0x8c, 0x58, 0xb9, 0x98, 0x7d, 0x8b, 0xd3, 0x9d, 0x02, 0x4e, 0x3c, 0x92, 0x63, 0xbc,
	0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63,
	0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x2c, 0x3d, 0xb3, 0x24, 0x27, 0x31, 0x49, 0xaf, 0xb0, 0x28,
	0x35, 0x25, 0x5f, 0x2f, 0x39, 0x3f, 0x57, 0x1f, 0x6e, 0xa0, 0x3e, 0x92, 0x81, 0xfa, 0x15, 0xfa,
	0x70, 0xab, 0x2b, 0x0b, 0x52, 0x8b, 0x93, 0xd8, 0xc0, 0xd6, 0x1b, 0x03, 0x02, 0x00, 0x00, 0xff,
	0xff, 0x41, 0xbe, 0xe5, 0x64, 0x92, 0x00, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// MsgClient is the client API for Msg service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type MsgClient interface {
}

type msgClient struct {
	cc grpc1.ClientConn
}

func NewMsgClient(cc grpc1.ClientConn) MsgClient {
	return &msgClient{cc}
}

// MsgServer is the server API for Msg service.
type MsgServer interface {
}

// UnimplementedMsgServer can be embedded to have forward compatible implementations.
type UnimplementedMsgServer struct {
}

func RegisterMsgServer(s grpc1.Server, srv MsgServer) {
	s.RegisterService(&_Msg_serviceDesc, srv)
}

var _Msg_serviceDesc = grpc.ServiceDesc{
	ServiceName: "qrdochain.fusionchain.qassets.Msg",
	HandlerType: (*MsgServer)(nil),
	Methods:     []grpc.MethodDesc{},
	Streams:     []grpc.StreamDesc{},
	Metadata:    "qassets/tx.proto",
}
