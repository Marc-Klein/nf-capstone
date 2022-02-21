import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ReportIcon from "@mui/icons-material/Report";
import ShieldIcon from "@mui/icons-material/Shield";
import HomeIcon from "@mui/icons-material/Home";

const ButtonMessages = {
	danger: "Pls send help to location!",
	suspicious: "Something od is going on!",
	safe: "Im safe!",
	home: "Im at home!",
};

const BottomNav = () => {
	const [value, setValue] = React.useState("");
	const handleChange = () => (event, newValue) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation value={value} onChange={handleChange}>
			<BottomNavigationAction label="Danger" value="danger" icon={<ReportIcon />} />
			<BottomNavigationAction
				label="Aware"
				value="aware"
				icon={<ReportGmailerrorredIcon />}
			/>
			<BottomNavigationAction label="Safe" value="safe" icon={<ShieldIcon />} />
			<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
		</BottomNavigation>
	);
};

export default BottomNav;
