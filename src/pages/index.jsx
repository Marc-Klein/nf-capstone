import Head from "next/head";
import React from "react";
import Menu from "./menu/index.jsx";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<Menu />
		</Layout>
	);
};

export default Page;
