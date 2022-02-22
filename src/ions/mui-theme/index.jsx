import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#4A4AFF",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#4A4AFF",
			paper: "#FFF",
		},
	},
	components: {
		MuiAppBar: {},
		MuiBottomNavigation: {
			styleOverrides: {
				root: {
					background: "#4A4AFF",
					"& .MuiSvgIcon-root": {
						color: "#fff",
					},
				},
			},
		},
		MuiCard: {},
		MuiPaper: {},
	},
});

const Theme = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
