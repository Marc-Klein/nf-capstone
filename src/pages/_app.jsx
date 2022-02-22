import React from "react";
import { SessionProvider } from "next-auth/react";
import CssBaseline from "@mui/material/CssBaseline";
import Theme from "../ions/mui-theme";

const App = ({ Component, pageProps }) => {
	return (
		<SessionProvider session={pageProps.session}>
			<Theme>
				<CssBaseline />
				<Component {...pageProps} />
			</Theme>
		</SessionProvider>
	);
};

export default App;
