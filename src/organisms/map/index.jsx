import React from "react";
import NoSsrMap from "../../atoms/no-ssr";
import BottomNav from "../../molecules/bottom-nav";
import ResponsiveAppBar from "../../molecules/app-bar";

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
