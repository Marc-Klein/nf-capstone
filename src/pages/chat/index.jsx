import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { getSession, useSession } from "next-auth/react";
import { usePubNub } from "pubnub-react";
import React, { useEffect, useState } from "react";
import produce from "immer";

const Chat = () => {
	const [messages] = useState([]);
	const { data: session } = useSession();
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [channel, setChannel] = useState("");
	const [channels, setChannels] = useState([]);
	const [subscribed, setSubscribed] = useState(false);

	const pubnub = usePubNub();

	useEffect(() => {
		const listeners = {
			message: () => {},
			presence: event_ => {
				switch (event_.action) {
					case "join":
						if (event_.uuid === session.user.id) {
							const state = {
								name: session.user.name,
								image: session.user.image,
							};
							console.log({ state });
							pubnub.setState({ channels, state });
							setUsers(
								produce(draft => {
									draft.push({ id: event_.uuid, state });
								})
							);
						} else {
							setUsers(
								produce(draft => {
									draft.push({ id: event_.uuid, state: { name: "Anonymous" } });
								})
							);
						}

						break;
					case "leave":
						setUsers(
							produce(draft => {
								draft.splice(
									draft.findIndex(user => user.id === event_.uuid),
									1
								);
							})
						);
						break;
					case "state-change":
						setUsers(
							produce(draft => {
								const index = draft.findIndex(user => user.id === event_.uuid);
								draft[index].state = { ...draft[index].state, ...event_.state };
							})
						);
						break;
					default:
						break;
				}
			},
		};
		if (session && channels.length) {
			pubnub.addListener(listeners);
		}

		return () => {
			pubnub.removeListener(listeners);
		};
	}, [session, pubnub, channels]);

	useEffect(() => {
		if (session) {
			pubnub.setUUID(session.user.id);
		}
	}, [session, pubnub]);

	useEffect(() => {
		if (channels.length) {
			pubnub.hereNow({ channels, includeUUIDs: true, includeState: true }).then(event_ => {
				const [channel] = channels;
				const room = event_.channels[channel];
				const previousUsers = room.occupants.map(occupant => ({
					id: occupant.uuid,
					state: occupant.state ?? { name: "Anonymous" },
				}));
				console.log(previousUsers);
				setUsers(previousUsers);
			});
		}
	}, [channels, pubnub]);

	return (
		<>
			<Typography>Welcome {session.user.name}</Typography>
			{users.map(user => {
				return (
					<Card key={user.id}>
						<CardHeader
							avatar={<Avatar src={user.state.image} />}
							title={user.state.name}
						/>
					</Card>
				);
			})}
			<Stack spacing={2} sx={{ py: 2 }}>
				{messages.map(message => {
					return (
						<Card key={message.id}>
							<CardHeader
								avatar={<Avatar src={message.payload.user.image} />}
								title={message.payload.user.name}
							/>
							<CardContent>{message.payload.value.toString()}</CardContent>
						</Card>
					);
				})}
			</Stack>
			{subscribed && (
				<Stack spacing={2} sx={{ py: 2 }}>
					<Button
						type="submit"
						variant="contained"
						onClick={() => {
							setSubscribed(false);
							pubnub.unsubscribe({ channels });
							setUsers([]);
						}}
					>
						Leave channel
					</Button>
				</Stack>
			)}

			{subscribed ? (
				<form
					onSubmit={async event_ => {
						event_.preventDefault();
						pubnub.setState({
							channels,
							state: {
								name,
							},
						});
						setName("");
					}}
				>
					<Stack spacing={2}>
						<TextField
							name="name"
							label="Enter your name"
							value={name}
							onChange={e => {
								setName(e.target.value);
							}}
						/>
						<Button type="submit" variant="contained">
							Set Name
						</Button>
					</Stack>
				</form>
			) : (
				<form
					onSubmit={event_ => {
						event_.preventDefault();
						setChannels([channel]);
						pubnub.subscribe({
							channels: [channel],
							withPresence: true,
						});
						setSubscribed(true);
					}}
				>
					<Stack spacing={2}>
						<TextField
							name="channel"
							label="Join channel"
							value={channel}
							onChange={e => {
								setChannel(e.target.value);
							}}
						/>
						<Button type="submit" variant="contained">
							Join channel
						</Button>
					</Stack>
				</form>
			)}
		</>
	);
};

export default Chat;
export const getServerSideProps = async context => {
	return {
		props: { session: await getSession(context) },
	};
};
