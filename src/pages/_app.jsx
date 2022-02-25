import React from "react";
import { SessionProvider } from "next-auth/react";

import CssBaseline from "@mui/material/CssBaseline";
import Theme from "../ions/mui-theme";

import { PubNubProvider } from "pubnub-react";
import PubNub from "pubnub";
import { v4 as uuid } from "uuid";

const publishKey = process.env.NEXT_PUBLIC_PUBNUB_PUBLISH_KEY;
const subscribeKey = process.env.NEXT_PUBLIC_PUBNUB_SUBSCRIBE_KEY;
const pubnub = new PubNub({
	publishKey,
	subscribeKey,
	uuid: uuid(),
});

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<PubNubProvider client={pubnub}>
				<Theme>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link crossOrigin rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Text&family=Caveat&family=Comfortaa:wght@400;700&family=Josefin+Sans:wght@400;700&family=Nunito:wght@400;700&family=Open+Sans:wght@400;500;600;700&family=Sansita+Swashed&display=swap"
						rel="stylesheet"
					/>
					<meta name="application-name" content="EatMe" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black" />
					<meta name="apple-mobile-web-app-title" content="EatMe" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="robots" content="noindex,nofollow" />
					<meta name="theme-color" content="#226F54" />
					<link rel="manifest" href="../../public/manifest/manifest.json" />
					<CssBaseline />

					<Component {...pageProps} />
				</Theme>
			</PubNubProvider>
		</SessionProvider>
	);
};

export default App;
