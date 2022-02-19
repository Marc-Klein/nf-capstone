import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { signIn } from "next-auth/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import styled from "@emotion/styled";

const StyledButton = styled(Button)`
	border: none;
`;

const StyledButtonContainer = styled(ButtonGroup)`
	border: none;
`;

const CustomLogin = () => {
	return (
		<StyledButtonContainer orientation="vertical" aria-label="vertical button group">
			<StyledButton
				sx={{
					background: "black",
					color: "white",
					letterSpacing: "0.2em",
				}}
				startIcon={<GitHubIcon />}
				onClick={() => {
					signIn("github");
				}}
			>
				Sign in with GitHub!
			</StyledButton>
			<StyledButton
				sx={{
					background: "#3b5998",
					color: "white",
					letterSpacing: "0.1em",
				}}
				startIcon={<FacebookIcon />}
				onClick={() => {
					signIn("facebook");
				}}
			>
				Sign in with Facebook!
			</StyledButton>
			<StyledButton
				sx={{
					background: "#db4a39",
					color: "white",
					letterSpacing: "0.165em",
				}}
				startIcon={<GoogleIcon />}
				onClick={() => {
					signIn("google");
				}}
			>
				Sign in with Google!
			</StyledButton>
		</StyledButtonContainer>
	);
};

export default CustomLogin;
