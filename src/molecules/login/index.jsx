import React from "react";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import styled from "@emotion/styled";
// import Stack from "@mui/material/Stack";

const StyledButton = styled(Button)`
	border: none;
`;

const CustomLogin = () => {
	return (
		<div>
			<StyledButton
				sx={{
					background: "#000",
					color: "white",
					letterSpacing: "0.42em",
					"&.MuiButtonBase-root:hover": {
						bgcolor: "#121212",
					},
				}}
				startIcon={<GitHubIcon />}
				onClick={() => {
					signIn("github");
				}}
			>
				GitHub
			</StyledButton>
			<StyledButton
				sx={{
					background: "#3b5998",
					color: "white",
					letterSpacing: "0.1em",
					"&.MuiButtonBase-root:hover": {
						bgcolor: "#27488e",
					},
				}}
				startIcon={<FacebookIcon />}
				onClick={() => {
					signIn("facebook");
				}}
			>
				Facebook
			</StyledButton>
			<StyledButton
				sx={{
					background: "#db4a39",
					color: "white",
					letterSpacing: "0.33em",
					"&.MuiButtonBase-root:hover": {
						bgcolor: "#903326",
					},
				}}
				startIcon={<GoogleIcon />}
				onClick={() => {
					signIn("google");
				}}
			>
				Google
			</StyledButton>
		</div>
	);
};

export default CustomLogin;
