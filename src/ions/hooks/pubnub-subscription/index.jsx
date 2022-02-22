import { usePubNub } from "pubnub-react";
import { useCallback, useEffect } from "react";

const useSubscription = (channels, handleMessage) => {
	const [mainChannel] = channels;
	const pubnub = usePubNub();
	useEffect(() => {
		const listeners = { message: handleMessage };
		pubnub.addListener(listeners);
		pubnub.subscribe({ channels, withPresence: true });

		return () => {
			pubnub.unsubscribe({ channels });
			pubnub.removeListener(listeners);
		};
	}, [pubnub, channels, handleMessage]);

	const sendMessage = useCallback(
		(message, channel = mainChannel) => {
			if (message) {
				return pubnub.publish({ channel, message });
			}
			return Promise.reject(new Error("Please provide a valid message."));
		},
		[pubnub, mainChannel]
	);

	return { pubnub, sendMessage };
};

export default useSubscription;
