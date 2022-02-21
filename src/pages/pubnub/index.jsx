import React, { useCallback, useEffect, useState } from "react";
import PubNub from "pubnub";
import { PubNubProvider, usePubNub } from "pubnub-react";
import { useSession } from "next-auth/react";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

const publishKey = process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY;
const subscribeKey = process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY;
const pubnub = new PubNub({
	publishKey,
	subscribeKey,
	uuid: "eaukrhgjkaerhg",
});

const Chat = () => {
	const { data: session } = useSession();
	const pubnub = usePubNub();
	const [channels] = useState(["awesome-channel"]);
	const [messages, setMessages] = useState([]);
	const [message, setMessage] = useState("");

	const handleMessage = event => {
		const message = event.message;

		setMessages(messages => [...messages, message]);
	};

	const sendMessage = useCallback(
		message => {
			if (message) {
				pubnub.publish({ channel: channels[0], message }).then(() => setMessage(""));
			}
		},
		[pubnub, channels]
	);
	//Abfrage ob eine Session besteht
	useEffect(() => {
		if (session) {
			//sendet in in einem Intervall die Location
			const interval = setInterval(() => {
				navigator.geolocation.getCurrentPosition(position => {
					const { longitude, latitude } = position.coords;

					sendMessage({
						name: session?.user.name ?? "Guest",
						coords: { longitude, latitude },
						id: uuid(),
						created: Date.now(),
					});
				});
			}, 10_000);
			return () => {
				clearInterval(interval);
			};
		}
	}, [session, sendMessage]);

	//useEffect zum setzen und entfernen der Messages
	useEffect(() => {
		const listener = { message: handleMessage };
		pubnub.addListener(listener);
		pubnub.subscribe({ channels });
		return () => {
			pubnub.removeListener(listener);
			pubnub.unsubscribe({ channels });
		};
	}, [pubnub, channels]);

	return (
		<div>
			<div>
				<div>React Chat Example</div>
				<div>
					{messages.map(message => {
						return (
							<div key={message.id}>
								<div>
									{message.name} on {/*format gibt Datums Funktionen */}
									{format(new Date(message.created), "dd-MM-yyyy")} at{" "}
									{format(new Date(message.created), "hh:mm:ss")}
								</div>{" "}
								<p>{message.text}</p>
								<p>
									my current location: {message.coords.longitude},{" "}
									{message.coords.latitude}
								</p>
							</div>
						);
					})}
				</div>
				<div>
					<input
						type="text"
						placeholder="Type your message"
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<button
						type="button"
						onClick={e => {
							e.preventDefault();
							navigator.geolocation.getCurrentPosition(position => {
								const { longitude, latitude } = position.coords;

								sendMessage({
									name: session?.user.name ?? "Guest",
									text: message,
									coords: { longitude, latitude },
									id: uuid(),
									created: Date.now(),
								});
							});
						}}
					>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

const Page = () => {
	return (
		<PubNubProvider client={pubnub}>
			<Chat />
		</PubNubProvider>
	);
};

export default Page;
