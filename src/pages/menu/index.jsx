import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Link from "next/link";
import Container from "@mui/material/Container";

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
				backgroundColor: "primary.dark",
				height: "100vh",
				flexDirection: "column",
			}}
		>
			<h2>Im ur future menu h1</h2>
			<Container>
				<Grid container spacing={1} columns={{ xs: 1 }}>
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
