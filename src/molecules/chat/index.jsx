import React, { useCallback, useEffect, useState } from "react";
import { usePubNub } from "pubnub-react";
import { useSession } from "next-auth/react";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

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
	//add the listener and remove it afterwards
	//if not set, u will get double the messages
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
			<div>React Chat Example</div>
			<div>
				{messages.map(message => {
					return (
						<div key={message.id}>
							<div>
								{message.name} on {format(new Date(message.created), "yyyy-MM-dd")}{" "}
								at {format(new Date(message.created), "hh:mm:ss")}
							</div>{" "}
							<p>{message.text}</p>
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
	);
};

export default Chat;
