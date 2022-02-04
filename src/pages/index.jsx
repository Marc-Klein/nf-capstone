import Head from "next/head";
import React from "react";
import Menu from "./menu/index.jsx";
import Layout from "../organisms/layout";

const Page = () => {
	return (
		<Layout>
			<Head>
				<title key="title">Walk with me</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				{/*maybe not nescecari*/}
				{/*<link*/}
				{/*	rel="stylesheet"*/}
				{/*	href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"*/}
				{/*	integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="*/}
				{/*	crossOrigin=""*/}
				{/*/>*/}
			</Head>
			<Menu />
		</Layout>
	);
};

export default Page;
