// @generated by protoc-gen-es v1.6.0 with parameter "target=ts"
// @generated from file wardenprotocol/intent/tx.proto (package wardenprotocol.intent, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * @generated from message wardenprotocol.intent.MsgApproveAction
 */
export class MsgApproveAction extends Message<MsgApproveAction> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string action_type = 2;
   */
  actionType = "";

  /**
   * @generated from field: uint64 action_id = 3;
   */
  actionId = protoInt64.zero;

  /**
   * Optional payload input for the intent. This is "any" as it depends on the
   * type of the intent linked to the action being approved.
   *
   * @generated from field: google.protobuf.Any intent_payload = 4;
   */
  intentPayload?: Any;

  constructor(data?: PartialMessage<MsgApproveAction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgApproveAction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "action_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "action_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "intent_payload", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgApproveAction {
    return new MsgApproveAction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgApproveAction {
    return new MsgApproveAction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgApproveAction {
    return new MsgApproveAction().fromJsonString(jsonString, options);
  }

  static equals(a: MsgApproveAction | PlainMessage<MsgApproveAction> | undefined, b: MsgApproveAction | PlainMessage<MsgApproveAction> | undefined): boolean {
    return proto3.util.equals(MsgApproveAction, a, b);
  }
}

/**
 * @generated from message wardenprotocol.intent.MsgApproveActionResponse
 */
export class MsgApproveActionResponse extends Message<MsgApproveActionResponse> {
  /**
   * @generated from field: string status = 1;
   */
  status = "";

  constructor(data?: PartialMessage<MsgApproveActionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgApproveActionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgApproveActionResponse {
    return new MsgApproveActionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgApproveActionResponse {
    return new MsgApproveActionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgApproveActionResponse {
    return new MsgApproveActionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgApproveActionResponse | PlainMessage<MsgApproveActionResponse> | undefined, b: MsgApproveActionResponse | PlainMessage<MsgApproveActionResponse> | undefined): boolean {
    return proto3.util.equals(MsgApproveActionResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.intent.MsgNewIntent
 */
export class MsgNewIntent extends Message<MsgNewIntent> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: google.protobuf.Any intent = 3;
   */
  intent?: Any;

  constructor(data?: PartialMessage<MsgNewIntent>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgNewIntent";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "intent", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewIntent {
    return new MsgNewIntent().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewIntent {
    return new MsgNewIntent().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewIntent {
    return new MsgNewIntent().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewIntent | PlainMessage<MsgNewIntent> | undefined, b: MsgNewIntent | PlainMessage<MsgNewIntent> | undefined): boolean {
    return proto3.util.equals(MsgNewIntent, a, b);
  }
}

/**
 * @generated from message wardenprotocol.intent.MsgNewIntentResponse
 */
export class MsgNewIntentResponse extends Message<MsgNewIntentResponse> {
  /**
   * @generated from field: uint64 id = 1;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<MsgNewIntentResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgNewIntentResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgNewIntentResponse {
    return new MsgNewIntentResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgNewIntentResponse {
    return new MsgNewIntentResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgNewIntentResponse {
    return new MsgNewIntentResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgNewIntentResponse | PlainMessage<MsgNewIntentResponse> | undefined, b: MsgNewIntentResponse | PlainMessage<MsgNewIntentResponse> | undefined): boolean {
    return proto3.util.equals(MsgNewIntentResponse, a, b);
  }
}

/**
 * @generated from message wardenprotocol.intent.MsgRevokeAction
 */
export class MsgRevokeAction extends Message<MsgRevokeAction> {
  /**
   * @generated from field: string creator = 1;
   */
  creator = "";

  /**
   * @generated from field: string action_type = 2;
   */
  actionType = "";

  /**
   * @generated from field: uint64 action_id = 3;
   */
  actionId = protoInt64.zero;

  constructor(data?: PartialMessage<MsgRevokeAction>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgRevokeAction";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "action_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "action_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeAction {
    return new MsgRevokeAction().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeAction {
    return new MsgRevokeAction().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeAction {
    return new MsgRevokeAction().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRevokeAction | PlainMessage<MsgRevokeAction> | undefined, b: MsgRevokeAction | PlainMessage<MsgRevokeAction> | undefined): boolean {
    return proto3.util.equals(MsgRevokeAction, a, b);
  }
}

/**
 * @generated from message wardenprotocol.intent.MsgRevokeActionResponse
 */
export class MsgRevokeActionResponse extends Message<MsgRevokeActionResponse> {
  constructor(data?: PartialMessage<MsgRevokeActionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "wardenprotocol.intent.MsgRevokeActionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRevokeActionResponse {
    return new MsgRevokeActionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRevokeActionResponse {
    return new MsgRevokeActionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRevokeActionResponse {
    return new MsgRevokeActionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgRevokeActionResponse | PlainMessage<MsgRevokeActionResponse> | undefined, b: MsgRevokeActionResponse | PlainMessage<MsgRevokeActionResponse> | undefined): boolean {
    return proto3.util.equals(MsgRevokeActionResponse, a, b);
  }
}

