import Head from "next/head";
import React from "react";
import Menu from "./menu/index.jsx";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
			</Head>
			<Menu />
		</Layout>
	);
};

export default Page;
