import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Link from "next/link";

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
			}}
		>
			<Grid container spacing={1} columns={{ xs: 3 }}>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>
						<Link href="/">Im a Menupoint</Link>
					</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;
