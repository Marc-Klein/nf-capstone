import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Box from "@mui/material/Box";
import Map from "../organisms/map";
import CustomLogin from "../molecules/login";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Global, css } from "@emotion/react";
import { pxToRem } from "../ions/utils/unit";
import LoadingImage from "../atoms/image-login";

const StyledBox = styled(Box)`
	max-width: ${pxToRem(400)};
	margin: 2rem;
`;

const globalStyles = (
	<Global
		styles={css`
			html {
				height: 100%;
			}
			body {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				min-height: 100%;
			}
			#__next {
				display: contents;
			}
		`}
	/>
);

const Page = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<StyledBox>
				{globalStyles}
				{/*<Typography variant="h4" component="h1" align="center" marginBottom={5}>*/}
				{/*</Typography>*/}
				<LoadingImage width="5500" height="5500" />
				<CustomLogin />
			</StyledBox>
		);
	}

	return (
		<Layout>
			<Head>
				<title key="title">Walking Buddy</title>
			</Head>
			<Map />
		</Layout>
	);
};

export default Page;
