import React from "react";
import dynamic from "next/dynamic";
import BottomNav from "../../molecules/bottom-nav";

const NoSsrMap = dynamic(() => import("../../atoms/initialize-map"), { ssr: false });

const MyMap = () => {
	return (
		<div style={{ overflow: "hidden" }}>
			<NoSsrMap poll={20_000} />
			<BottomNav />
		</div>
	);
};

export default MyMap;
