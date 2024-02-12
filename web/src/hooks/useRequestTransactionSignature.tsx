import { useBroadcaster } from "./keplr";
import { MsgNewSignTransactionRequest, MsgNewSignTransactionRequestResponse } from "@/proto/wardenprotocol/treasury/tx_pb";
import { TxMsgData } from "cosmjs-types/cosmos/base/abci/v1beta1/abci";
import { signatureRequestByID } from "@/client/treasury";
import { SignRequest, SignRequestStatus } from "@/proto/wardenprotocol/treasury/signature_pb";
import { useState } from "react";
import { AnyMessage, Message } from "@bufbuild/protobuf";
import { packAny } from "@/utils/any";
import { useAddressContext } from "@/def-hooks/addressContext";

export enum SignTransactionRequesterState {
  IDLE = "idle",
  BROADCAST_SIGNATURE_REQUEST = "broadcast_signature_request",
  WAITING_KEYCHAIN = "waiting_keychain",
  SIGNATURE_FULFILLED = "signature_fulfilled",
  ERROR = "error",
}

export default function useRequestTransactionSignature() {
  const { address } = useAddressContext();
  const { broadcast } = useBroadcaster();
  const [state, setState] = useState<SignTransactionRequesterState>(SignTransactionRequesterState.IDLE);
  const [error, setError] = useState<string | undefined>(undefined);
  const [signatureRequest, setSignatureRequest] = useState<SignRequest | undefined>(undefined);

  return {
    state,
    signatureRequest,
    error,
    requestTransactionSignature: async (keyId: number | bigint, unsignedTx: Uint8Array, metadata?: Message<AnyMessage>) => {
      try {
        setState(SignTransactionRequesterState.BROADCAST_SIGNATURE_REQUEST);

        const res = await broadcast([
          new MsgNewSignTransactionRequest({
            creator: address,
            keyId: BigInt(keyId),
            walletType: 2,
            unsignedTransaction: unsignedTx,
            btl: BigInt(1000),
            metadata: metadata ? packAny(metadata) : undefined,
          }),
        ]);

        setState(SignTransactionRequesterState.WAITING_KEYCHAIN);

        if (!res || !res.result) {
          throw new Error('failed to broadcast tx');
        }

        if (res.result?.tx_result.code) {
          throw new Error(`tx failed with code ${res.result?.tx_result.code}`);
        }

        // parse tx msg response
        const bytes = Uint8Array.from(atob(res.result.tx_result.data), c => c.charCodeAt(0));
        const msgData = TxMsgData.decode(bytes);
        const newSignTransactionRequestResponse = MsgNewSignTransactionRequestResponse.fromBinary(msgData.msgResponses[0].value);
        const signatureRequestId = newSignTransactionRequestResponse.signatureRequestId;

        // wait for sign request to be processed
        while (true) {
          const res = await signatureRequestByID(signatureRequestId);
          setSignatureRequest(res.signRequest);
          if (res?.signRequest?.status === SignRequestStatus.PENDING) {
            await sleep(1000);
            continue;
          }

          if (res.signRequest?.status === SignRequestStatus.FULFILLED && res.signRequest?.result?.case === "signedData") {
            setState(SignTransactionRequesterState.SIGNATURE_FULFILLED);
            return res.signRequest?.result.value;
          }

          throw new Error(`sign request rejected with reason: ${res.signRequest?.result.value}`);
        }
      } catch (e) {
        setError(`${e}`);
        setState(SignTransactionRequesterState.ERROR);
      }
    },
    reset: () => {
      if (state === SignTransactionRequesterState.SIGNATURE_FULFILLED || state === SignTransactionRequesterState.ERROR) {
        setState(SignTransactionRequesterState.IDLE);
      }
    },
  }
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
