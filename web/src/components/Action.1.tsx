import { Card, CardContent, CardFooter } from "./ui/card";
import { Action as ActionPB } from "@/proto/wardenprotocol/intent/action_pb";
import { Button } from "./ui/button";
import { useBroadcaster } from "@/hooks/keplr";
import { MsgApproveAction } from "@/proto/wardenprotocol/intent/tx_pb";
import CardRow from "./card-row";
import { TxMsgDetails } from "./tx-msg-details";
import { prettyActionStatus } from "./action";
import { useAddressContext } from "@/def-hooks/addressContext";


export default function Action({ action }: { action: ActionPB; }) {
    const { address } = useAddressContext();
    const { broadcast } = useBroadcaster();
    const actionType = action.msg?.typeUrl.startsWith("type.googleapis.com") ? action.msg?.typeUrl.slice(20) : action.msg?.typeUrl;

    return (
        <Card className="border-0 p-0 m-0 pt-4">
            {/* <CardHeader> */}
            {/* <CardTitle>Action #{action.id.toString()}</CardTitle> */}
            {/* <CardDescription>Created by <Address address={action.} />.</CardDescription> */}
            {/* </CardHeader> */}
            <CardContent className="p-0">
                <div className="grid w-full items-center gap-4">
                    <CardRow label="Intent">{action.intentId.toString() == "0" ? `Default intent for ${actionType}` : `Intent #${action.intentId.toString()}`}</CardRow>
                    <CardRow label="Status">{prettyActionStatus(action.status)}</CardRow>
                    <CardRow label="Action type">{actionType}</CardRow>
                    {action.msg ? (<TxMsgDetails msg={action.msg} />) : null}
                </div>
            </CardContent>
            <CardFooter className="p-0 pt-6">
                <Button onClick={async () => {
                    await broadcast([
                        new MsgApproveAction({
                            creator: address,
                            actionType,
                            actionId: action.id,
                        })
                    ]);
                }}>
                    Approve action
                </Button>
            </CardFooter>
        </Card>
    );
}

