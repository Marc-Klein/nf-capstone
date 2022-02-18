import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import Box from "@mui/material/Box";
import Map from "./map";
import CustomLogin from "../molecules/login";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	align-items: center;
	justify-content: center;
	height: 30%;

	border-radius: 5px;
	background: hotpink;
`;

const StyledBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 200%;
`;

const Page = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<StyledDiv>
				<StyledBox>
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
