import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ReportIcon from "@mui/icons-material/Report";
import ShieldIcon from "@mui/icons-material/Shield";
import HomeIcon from "@mui/icons-material/Home";

const BottomNav = () => {
	const [value, setValue] = React.useState("");
	const handleChange = () => (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation sx={{ width: "100%" }} value={value} onChange={handleChange}>
			<BottomNavigationAction label="Danger" value="danger" icon={<ReportIcon />} />
			<BottomNavigationAction
				label="Aware"
				value="aware"
				icon={<ReportGmailerrorredIcon />}
			/>
			<BottomNavigationAction label="Safe" value="safe" icon={<ShieldIcon />} />
			<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
			<BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
		</BottomNavigation>
	);
};

export default BottomNav;
