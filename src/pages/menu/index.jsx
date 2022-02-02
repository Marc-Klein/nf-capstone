import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Settings, Logout, Route } from "@mui/icons-material";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MenuLink from "../../atoms/menu-link";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.primary,
}));

const Menu = () => {
	return (
		<Box
			sx={{
				display: "flex",
				m: 0,
				justifyContent: "center",
				alignItems: "center",
				flexGrow: 1,
				backgroundColor: "primary.light",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<h2>Test</h2>
			<Container>
				<Grid container spacing={3} columns={{ xs: 4 }}>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<Route />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<CoPresentIcon />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<QrCode2Icon />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<PeopleAltIcon />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<Logout />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<MenuLink href="/">
							<Item>
								<Settings />
							</Item>
						</MenuLink>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Menu;
