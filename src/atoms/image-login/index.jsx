import React from "react";
import Image from "next/image";
import Logo from "../../../icons/Walking.png";
import { pxToRem } from "../../ions/utils/unit";

const LoadingImage = () => {
	return <Image src={Logo} alt="Login" width={pxToRem(5500)} height={pxToRem(5500)} />;
};

export default LoadingImage;
