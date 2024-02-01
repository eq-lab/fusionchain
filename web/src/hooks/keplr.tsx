import { txByHash } from "@/client/chain";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { Link } from "react-router-dom";

export function useBroadcaster() {
}

export async function monitorTx(txResPromise: Promise<DeliverTxResponse>, toast: any) {
  const { update } = toast({
    title: "Broadcasting transaction",
    description: "Your transaction is being broadcasted",
    duration: 5000,
  });

  const txRes = await txResPromise;

  const hash = txRes.transactionHash;
  const timeout = new Date().getTime() + 1000 * 30;

  while (new Date().getTime() < timeout) {
    const res = await txByHash(hash);

    if (res.error?.code) {
      await sleep(1000);
      continue;
    }

    if (res.result?.tx_result.code !== 0) {
      update({
        title: "Error!",
        description: "There was an error executing your transaction",
        duration: 5000,
        status: "error",
      });
      return res;
    }

    if (res.result?.tx_result.code === 0) {
      update({
        title: "Success!",
        description: "Your transaction was executed successfully",
        duration: 5000,
        action: (
          <ToastAction altText="View transaction">
            <Button asChild variant="secondary">
              <Link to={`/explorer/tx_by_hash/${hash}`}>
                Details
              </Link>
            </Button>
          </ToastAction>
        ),
      });
      return res;
    }

    if (res.result?.tx_result.code !== 0) {
      update({
        title: "Error!",
        description: "Your transaction can't be executed",
        duration: 5000,
        action: (
          <ToastAction altText="View transaction">
            <Button asChild variant="secondary">
              <Link to={`/explorer/tx_by_hash/${hash}`}>
                Details
              </Link>
            </Button>
          </ToastAction>
        ),
      });
      return res;
    }
  }

  update({
    title: "Error!",
    description: "There was an error broadcasting your transaction",
    duration: 5000,
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
