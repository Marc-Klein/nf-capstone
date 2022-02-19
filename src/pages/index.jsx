import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Box from "@mui/material/Box";
import Map from "./map";
import CustomLogin from "../molecules/login";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

const StyledDiv = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 35%;
	transform: translate(-50%, -50%);
	border-radius: 2em;
	background: #fff;
	box-shadow: 0px 0px 15px -1px #000;
	border: 4px;
`;

const StyledBox = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const Page = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<StyledDiv>
				<StyledBox>
					<Typography variant="h4" component="h1" align="center">
						Please login
						<br />
						<br />
					</Typography>
					<CustomLogin />
				</StyledBox>
			</StyledDiv>
		);
	}

	return (
		<Layout>
			<Head>
				<title key="title">Walk with me</title>
			</Head>
			<Map />
		</Layout>
	);
};

export default Page;
