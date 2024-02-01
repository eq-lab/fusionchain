import Address from "./address";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import useSpaceAddress from "@/hooks/useSpaceAddress";
import AddressAvatar from "./address-avatar";
import { QuerySpacesResponse } from "wardenprotocol-warden-client-ts/lib/warden.warden/rest";

type SpaceModel = NonNullable<QuerySpacesResponse["spaces"]>[number];

export default function Space({ space }: { space: SpaceModel }) {

	const [spaceAddress, setSpaceAddress] = useSpaceAddress();

	return (
		<Card
			onClick={() => {
				setSpaceAddress(space.address || null);
			}}
			className={`cursor-pointer hover:border-white w-full ${spaceAddress === space.address ? "border-white" : ""
				}`}
		>
			<CardHeader>
				<CardTitle className="flex flex-row items-center pb-4 space-x-4">
					<AddressAvatar seed={space.address || ""} />
					<span className="">
						{space.address?.slice(0, 8) +
							"..." +
							space.address?.slice(-8)}
					</span>
				</CardTitle>
				<CardDescription>
					<div>
						Created by <Address address={space.creator || ""} />
					</div>
					<div className="flex flex-row">
						<span className="">Owners</span>
						{space.owners?.map((owner) => (
							<Address address={owner} />
						))}
					</div>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				{/* <CardRow label="Admin intent">
					<IntentPreviewCard id={space.adminIntentId.toString()} />
				</CardRow>
				<CardRow label="Sign intent">
					<IntentPreviewCard id={space.signIntentId.toString()} />
				</CardRow> */}
				<div>
					Admin Intent:{" "}
					{space.admin_intent_id?.toString() == "0"
						? "Default intent"
						: space.admin_intent_id?.toString()}
				</div>
				<div>
					Sign Intent:{" "}
					{space.sign_intent_id?.toString() == "0"
						? "Default intent"
						: space.sign_intent_id?.toString()}
				</div>
				<ul className="flex flex-col space-y-1"></ul>
			</CardContent>
			{/* <CardFooter> */}
			{/* <ChooseSpaceButton spaceAddress={space.address} /> */}
			{/* <Link to={`/spaces/${space.address}`}>
					<Button variant="secondary">Open details</Button>
				</Link> */}
			{/* </CardFooter> */}
		</Card>
	);
}
