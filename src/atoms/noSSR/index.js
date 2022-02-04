import React from "react";
import dynamic from "next/dynamic";
import Map from "../initialize-map/index";

//SSR = Server Side Rendering
const NoSsrMap = () => {
	dynamic(() => Map(), { ssr: false });
};

export default NoSsrMap;
