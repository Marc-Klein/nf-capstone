import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ChatIcon from "@mui/icons-material/Chat";
import ShieldIcon from "@mui/icons-material/Shield";
import HomeIcon from "@mui/icons-material/Home";
import Dialog from "@mui/material/Dialog";
import Chat from "../../organisms/chat";

// const buttonMessages = {
// 	danger: "Pls send help to location!",
// 	suspicious: "Something od is going on!",
// 	safe: "Im safe!",
// 	home: "Im at home!",
// };

const BottomNav = () => {
	const [value, setValue] = React.useState("");
	const [open, setOpen] = React.useState(false);

	const handleChange = () => (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<Chat />
			</Dialog>
			<BottomNavigation value={value} onChange={handleChange}>
				<BottomNavigationAction
					label="Danger"
					value="danger"
					icon={<ChatIcon />}
					onClick={() => {
						setOpen(true);
					}}
				/>
				<BottomNavigationAction
					label="Aware"
					value="aware"
					icon={<ReportGmailerrorredIcon />}
				/>
				<BottomNavigationAction label="Safe" value="safe" icon={<ShieldIcon />} />
				<BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
			</BottomNavigation>
		</>
	);
};

export default BottomNav;
