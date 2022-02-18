import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
// import Box from "@mui/material/Box";
import Map from "./map";
import CustomLogin from "../molecules/login";
import { useSession } from "next-auth/react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
	//position: absolute;
	//top: 50%;
	//left: 50%;
	display: flex;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 70%;
	justify-content: center;
	align-items: center;
`;

const Page = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<Layout>
				<StyledDiv>
					<CustomLogin />
				</StyledDiv>
			</Layout>
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
