import React from "react";
import dynamic from "next/dynamic";
import BottomNav from "../../molecules/bottom-nav";
import ResponsiveAppBar from "../../molecules/app-bar";

const NoSsrMap = dynamic(() => import("../../atoms/initialize-map"), { ssr: false });

const MyMap = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<ResponsiveAppBar />
			<NoSsrMap />
			<BottomNav />
		</div>
	);
};

export default MyMap;
