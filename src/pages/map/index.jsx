import React from "react";
import dynamic from "next/dynamic";

const NoSsrMap = dynamic(() => import("../../atoms/initialize-map"), { ssr: false });

const MyMap = () => {
	return <NoSsrMap />;
};

export default MyMap;
