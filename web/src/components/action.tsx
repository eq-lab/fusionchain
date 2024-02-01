import { ActionStatus } from "@/proto/wardenprotocol/intent/action_pb";

export function prettyActionStatus(s: ActionStatus) {
  switch (s) {
    case ActionStatus.PENDING:
      return "Pending approvals";
    case ActionStatus.COMPLETED:
      return "Completed";
    case ActionStatus.REVOKED:
      return "Revoked";
    default:
      return "Unknown";
  }
}
