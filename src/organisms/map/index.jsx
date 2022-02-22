import React from "react";
import NoSsrMap from "../../atoms/no-ssr";
import BottomNav from "../../molecules/bottom-nav";
import ResponsiveAppBar from "../../molecules/app-bar";
import Theme from "../../ions/mui-theme";

const MyMap = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<Theme>
				<ResponsiveAppBar />
			</Theme>
			<NoSsrMap />
			<BottomNav />
		</div>
	);
};

export default MyMap;
