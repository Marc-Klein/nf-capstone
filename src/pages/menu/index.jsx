import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Link from "next/link";
import Container from "@mui/material/Container";
import icon from "@mui/icons-material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Settings, Logout, Route } from "@mui/icons-material";
import { QrCode2Icon as QrCodeIcon } from "@mui/icons-material/QrCode2";
import { CoPresentIcon as BuddyWatchIcon } from "@mui/icons-material/CoPresent";
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
								<PeopleAltIcon />
							</Item>
						</MenuLink>
					</Grid>
					<Grid item xs={2} md={4}>
						<Item>
							<Link href="/">Im a Menupoint</Link>
						</Item>
					</Grid>
					<Grid item xs={2} md={4}>
						<Item>
							<Link href="/">Im a Menupoint</Link>
						</Item>
					</Grid>
					<Grid item xs={2} md={4}>
						<Item>
							<Link href="/">Im a Menupoint</Link>
						</Item>
					</Grid>
					<Grid item xs={2} md={4}>
						<Item>
							<Link href="/">Im a Menupoint</Link>
						</Item>
					</Grid>
					<Grid item xs={2} md={4}>
						<Item>
							<Link href="/">Im a Menupoint</Link>
						</Item>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Menu;
