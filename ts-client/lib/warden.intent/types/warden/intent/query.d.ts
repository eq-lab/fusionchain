import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../google/protobuf/any";
import { Action, ActionStatus } from "./action";
import { Intent } from "./intent";
import { Params } from "./params";
export declare const protobufPackage = "warden.intent";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryActionsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryActionsResponse {
    pagination: PageResponse | undefined;
    actions: Action[];
}
export interface IntentResponse {
    intent: Intent | undefined;
    metadata: Any | undefined;
}
export interface QueryIntentsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryIntentsResponse {
    pagination: PageResponse | undefined;
    intents: IntentResponse[];
}
export interface QueryIntentByIdRequest {
    id: number;
}
export interface QueryIntentByIdResponse {
    intent: IntentResponse | undefined;
}
export interface QueryActionsByAddressRequest {
    pagination: PageRequest | undefined;
    address: string;
    status: ActionStatus;
}
export interface QueryActionsByAddressResponse {
    pagination: PageResponse | undefined;
    actions: Action[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
export declare const QueryActionsRequest: {
    encode(message: QueryActionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionsRequest;
    fromJSON(object: any): QueryActionsRequest;
    toJSON(message: QueryActionsRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryActionsRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryActionsRequest;
};
export declare const QueryActionsResponse: {
    encode(message: QueryActionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionsResponse;
    fromJSON(object: any): QueryActionsResponse;
    toJSON(message: QueryActionsResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[] & ({
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        } & {
            id?: number;
            approvers?: string[] & string[] & { [K_1 in Exclude<keyof I["actions"][number]["approvers"], keyof string[]>]: never; };
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["actions"][number]["msg"], keyof Any>]: never; };
            creator?: string;
            btl?: number;
        } & { [K_3 in Exclude<keyof I["actions"][number], keyof Action>]: never; })[] & { [K_4 in Exclude<keyof I["actions"], keyof {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof QueryActionsResponse>]: never; }>(base?: I): QueryActionsResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[] & ({
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        } & {
            id?: number;
            approvers?: string[] & string[] & { [K_7 in Exclude<keyof I_1["actions"][number]["approvers"], keyof string[]>]: never; };
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_8 in Exclude<keyof I_1["actions"][number]["msg"], keyof Any>]: never; };
            creator?: string;
            btl?: number;
        } & { [K_9 in Exclude<keyof I_1["actions"][number], keyof Action>]: never; })[] & { [K_10 in Exclude<keyof I_1["actions"], keyof {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof QueryActionsResponse>]: never; }>(object: I_1): QueryActionsResponse;
};
export declare const IntentResponse: {
    encode(message: IntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntentResponse;
    fromJSON(object: any): IntentResponse;
    toJSON(message: IntentResponse): unknown;
    create<I extends {
        intent?: {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        intent?: {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K in Exclude<keyof I["intent"]["intent"], keyof Any>]: never; };
        } & { [K_1 in Exclude<keyof I["intent"], keyof Intent>]: never; };
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_2 in Exclude<keyof I["metadata"], keyof Any>]: never; };
    } & { [K_3 in Exclude<keyof I, keyof IntentResponse>]: never; }>(base?: I): IntentResponse;
    fromPartial<I_1 extends {
        intent?: {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        intent?: {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            id?: number;
            name?: string;
            intent?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_4 in Exclude<keyof I_1["intent"]["intent"], keyof Any>]: never; };
        } & { [K_5 in Exclude<keyof I_1["intent"], keyof Intent>]: never; };
        metadata?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & { [K_6 in Exclude<keyof I_1["metadata"], keyof Any>]: never; };
    } & { [K_7 in Exclude<keyof I_1, keyof IntentResponse>]: never; }>(object: I_1): IntentResponse;
};
export declare const QueryIntentsRequest: {
    encode(message: QueryIntentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentsRequest;
    fromJSON(object: any): QueryIntentsRequest;
    toJSON(message: QueryIntentsRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(base?: I): QueryIntentsRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "pagination">]: never; }>(object: I_1): QueryIntentsRequest;
};
export declare const QueryIntentsResponse: {
    encode(message: QueryIntentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentsResponse;
    fromJSON(object: any): QueryIntentsResponse;
    toJSON(message: QueryIntentsResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        intents?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        intents?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K_1 in Exclude<keyof I["intents"][number]["intent"]["intent"], keyof Any>]: never; };
            } & { [K_2 in Exclude<keyof I["intents"][number]["intent"], keyof Intent>]: never; };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_3 in Exclude<keyof I["intents"][number]["metadata"], keyof Any>]: never; };
        } & { [K_4 in Exclude<keyof I["intents"][number], keyof IntentResponse>]: never; })[] & { [K_5 in Exclude<keyof I["intents"], keyof {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
    } & { [K_6 in Exclude<keyof I, keyof QueryIntentsResponse>]: never; }>(base?: I): QueryIntentsResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        intents?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_7 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        intents?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[] & ({
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K_8 in Exclude<keyof I_1["intents"][number]["intent"]["intent"], keyof Any>]: never; };
            } & { [K_9 in Exclude<keyof I_1["intents"][number]["intent"], keyof Intent>]: never; };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_10 in Exclude<keyof I_1["intents"][number]["metadata"], keyof Any>]: never; };
        } & { [K_11 in Exclude<keyof I_1["intents"][number], keyof IntentResponse>]: never; })[] & { [K_12 in Exclude<keyof I_1["intents"], keyof {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        }[]>]: never; };
    } & { [K_13 in Exclude<keyof I_1, keyof QueryIntentsResponse>]: never; }>(object: I_1): QueryIntentsResponse;
};
export declare const QueryIntentByIdRequest: {
    encode(message: QueryIntentByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentByIdRequest;
    fromJSON(object: any): QueryIntentByIdRequest;
    toJSON(message: QueryIntentByIdRequest): unknown;
    create<I extends {
        id?: number;
    } & {
        id?: number;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I): QueryIntentByIdRequest;
    fromPartial<I_1 extends {
        id?: number;
    } & {
        id?: number;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryIntentByIdRequest;
};
export declare const QueryIntentByIdResponse: {
    encode(message: QueryIntentByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryIntentByIdResponse;
    fromJSON(object: any): QueryIntentByIdResponse;
    toJSON(message: QueryIntentByIdResponse): unknown;
    create<I extends {
        intent?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        intent?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K in Exclude<keyof I["intent"]["intent"]["intent"], keyof Any>]: never; };
            } & { [K_1 in Exclude<keyof I["intent"]["intent"], keyof Intent>]: never; };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["intent"]["metadata"], keyof Any>]: never; };
        } & { [K_3 in Exclude<keyof I["intent"], keyof IntentResponse>]: never; };
    } & { [K_4 in Exclude<keyof I, "intent">]: never; }>(base?: I): QueryIntentByIdResponse;
    fromPartial<I_1 extends {
        intent?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        };
    } & {
        intent?: {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
        } & {
            intent?: {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                };
            } & {
                id?: number;
                name?: string;
                intent?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & {
                    typeUrl?: string;
                    value?: Uint8Array;
                } & { [K_5 in Exclude<keyof I_1["intent"]["intent"]["intent"], keyof Any>]: never; };
            } & { [K_6 in Exclude<keyof I_1["intent"]["intent"], keyof Intent>]: never; };
            metadata?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_7 in Exclude<keyof I_1["intent"]["metadata"], keyof Any>]: never; };
        } & { [K_8 in Exclude<keyof I_1["intent"], keyof IntentResponse>]: never; };
    } & { [K_9 in Exclude<keyof I_1, "intent">]: never; }>(object: I_1): QueryIntentByIdResponse;
};
export declare const QueryActionsByAddressRequest: {
    encode(message: QueryActionsByAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionsByAddressRequest;
    fromJSON(object: any): QueryActionsByAddressRequest;
    toJSON(message: QueryActionsByAddressRequest): unknown;
    create<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
        address?: string;
        status?: ActionStatus;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; };
        address?: string;
        status?: ActionStatus;
    } & { [K_1 in Exclude<keyof I, keyof QueryActionsByAddressRequest>]: never; }>(base?: I): QueryActionsByAddressRequest;
    fromPartial<I_1 extends {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        };
        address?: string;
        status?: ActionStatus;
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: number;
            limit?: number;
            countTotal?: boolean;
            reverse?: boolean;
        } & { [K_2 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; };
        address?: string;
        status?: ActionStatus;
    } & { [K_3 in Exclude<keyof I_1, keyof QueryActionsByAddressRequest>]: never; }>(object: I_1): QueryActionsByAddressRequest;
};
export declare const QueryActionsByAddressResponse: {
    encode(message: QueryActionsByAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActionsByAddressResponse;
    fromJSON(object: any): QueryActionsByAddressResponse;
    toJSON(message: QueryActionsByAddressResponse): unknown;
    create<I extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K in Exclude<keyof I["pagination"], keyof PageResponse>]: never; };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[] & ({
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        } & {
            id?: number;
            approvers?: string[] & string[] & { [K_1 in Exclude<keyof I["actions"][number]["approvers"], keyof string[]>]: never; };
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_2 in Exclude<keyof I["actions"][number]["msg"], keyof Any>]: never; };
            creator?: string;
            btl?: number;
        } & { [K_3 in Exclude<keyof I["actions"][number], keyof Action>]: never; })[] & { [K_4 in Exclude<keyof I["actions"], keyof {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[]>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof QueryActionsByAddressResponse>]: never; }>(base?: I): QueryActionsByAddressResponse;
    fromPartial<I_1 extends {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[];
    } & {
        pagination?: {
            nextKey?: Uint8Array;
            total?: number;
        } & {
            nextKey?: Uint8Array;
            total?: number;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; };
        actions?: {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[] & ({
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        } & {
            id?: number;
            approvers?: string[] & string[] & { [K_7 in Exclude<keyof I_1["actions"][number]["approvers"], keyof string[]>]: never; };
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                typeUrl?: string;
                value?: Uint8Array;
            } & { [K_8 in Exclude<keyof I_1["actions"][number]["msg"], keyof Any>]: never; };
            creator?: string;
            btl?: number;
        } & { [K_9 in Exclude<keyof I_1["actions"][number], keyof Action>]: never; })[] & { [K_10 in Exclude<keyof I_1["actions"], keyof {
            id?: number;
            approvers?: string[];
            status?: ActionStatus;
            intentId?: number;
            msg?: {
                typeUrl?: string;
                value?: Uint8Array;
            };
            creator?: string;
            btl?: number;
        }[]>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof QueryActionsByAddressResponse>]: never; }>(object: I_1): QueryActionsByAddressResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a list of Actions items. */
    Actions(request: QueryActionsRequest): Promise<QueryActionsResponse>;
    /** Queries a list of Intents items. */
    Intents(request: QueryIntentsRequest): Promise<QueryIntentsResponse>;
    /** Queries a list of IntentById items. */
    IntentById(request: QueryIntentByIdRequest): Promise<QueryIntentByIdResponse>;
    /** Queries a list of Actions items by one participant address. */
    ActionsByAddress(request: QueryActionsByAddressRequest): Promise<QueryActionsByAddressResponse>;
}
export declare const QueryServiceName = "warden.intent.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Actions(request: QueryActionsRequest): Promise<QueryActionsResponse>;
    Intents(request: QueryIntentsRequest): Promise<QueryIntentsResponse>;
    IntentById(request: QueryIntentByIdRequest): Promise<QueryIntentByIdResponse>;
    ActionsByAddress(request: QueryActionsByAddressRequest): Promise<QueryActionsByAddressResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
