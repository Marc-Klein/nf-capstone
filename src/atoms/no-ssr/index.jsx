import dynamic from "next/dynamic";

const NoSsrMap = dynamic(() => import("../../atoms/initialize-map"), { ssr: false });

export default NoSsrMap;
