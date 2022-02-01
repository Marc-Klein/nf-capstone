import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Menu = () => {
	return (
		<Box sx={{ flexGrow: 1 }} alignItems="center">
			<Grid container spacing={1} columns={{ xs: 2 }}>
				<Grid item xs={6}>
					<Paper>Im a Menu point</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper>Im a Menu point</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper>Im a Menu point</Paper>
				</Grid>
				<Grid item xs={6}>
					<Paper>Im a Menu point</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper>Im a Menu point</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper>Im a Menu point</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Menu;
