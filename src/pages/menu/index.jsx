import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(2),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const Menu = () => {
	return (
		<Box sx={{ flexGrow: 1 }} alignItems="center">
			<Grid container spacing={1} columns={{ xs: 2 }}>
				<Grid item xs={6}>
					<Item>Im a Menu point</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>Im a Menu point</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>Im a Menu point</Item>
				</Grid>
				<Grid item xs={6}>
					<Item>Im a Menu point</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Im a Menu point</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>Im a Menu point</Item>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;
