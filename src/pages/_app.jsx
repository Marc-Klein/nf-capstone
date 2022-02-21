import React from "react";
import { SessionProvider } from "next-auth/react";

import CssBaseline from "@mui/material/CssBaseline";
import Theme from "../ions/mui-theme";

import { PubNubProvider } from "pubnub-react";
import PubNub from "pubnub";

const publishKey = process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY;
const subscribeKey = process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY;
const pubnub = new PubNub({
	publishKey,
	subscribeKey,
	uuid: "eauk435!rhgjk124(&aerkllkjiovf9804wu902359uhf0hg",
});

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<PubNubProvider client={pubnub}>
				<Theme>
					<CssBaseline />

					<Component {...pageProps} />
				</Theme>
			</PubNubProvider>
		</SessionProvider>
	);
};

export default App;
