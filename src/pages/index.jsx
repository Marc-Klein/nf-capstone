import Head from "next/head";
import React from "react";
import Layout from "../organisms/layout";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Map from "./map";

import { signIn, useSession } from "next-auth/react";

const Page = () => {
	const { data: session } = useSession();
	if (!session) {
		return (
			<>
				You have to be signed in to see this page!
				<br />
				Please sign in!
				<Button
					startIcon={<GitHubIcon />}
					onClick={() => {
						signIn("github");
					}}
				>
					Sign in with GitHub!
				</Button>
			</>
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
