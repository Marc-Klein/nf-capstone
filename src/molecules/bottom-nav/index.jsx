import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ChatIcon from "@mui/icons-material/Chat";
import ShieldIcon from "@mui/icons-material/Shield";
import HomeIcon from "@mui/icons-material/Home";
import Dialog from "@mui/material/Dialog";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Chat from "../../organisms/chat";

// const buttonMessages = {
// 	danger: "Pls send help to location!",
// 	suspicious: "Something od is going on!",
// 	safe: "Im safe!",
// 	home: "Im at home!",
// };

const BottomNav = () => {
	const [value, setValue] = useState("");
	const [open, setOpen] = useState(false);
	const [snackbarRequest, setSnackbarRequest] = useState(false);
	const [snackbarSafe, setSnackbarSafe] = useState(false);
	const [snackbarHome, setSnackbarHome] = useState(false);

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
			<Snackbar
				autoHideDuration={6000}
				open={snackbarRequest}
				onClose={() => {
					setSnackbarRequest(false);
				}}
			>
				<Alert
					severity="warning"
					sx={{ width: "100%" }}
					onClose={() => {
						setSnackbarRequest(false);
					}}
				>
					Request has been sent
				</Alert>
			</Snackbar>

			<Snackbar
				autoHideDuration={6000}
				open={snackbarSafe}
				onClose={() => {
					setSnackbarSafe(false);
				}}
			>
				<Alert
					severity="info"
					sx={{ width: "100%" }}
					onClose={() => {
						setSnackbarSafe(false);
					}}
				>
					I am safe
				</Alert>
			</Snackbar>
			<Snackbar
				autoHideDuration={6000}
				open={snackbarHome}
				onClose={() => {
					setSnackbarHome(false);
				}}
			>
				<Alert
					severity="success"
					sx={{ width: "100%" }}
					onClose={() => {
						setSnackbarHome(false);
					}}
				>
					I am home
				</Alert>
			</Snackbar>
			<BottomNavigation value={value} onChange={handleChange}>
				<BottomNavigationAction
					label="Chat"
					value="chat"
					icon={<ChatIcon />}
					onClick={() => {
						setOpen(true);
					}}
				/>
				<BottomNavigationAction
					label="Aware"
					value="aware"
					icon={<ReportGmailerrorredIcon />}
					onClick={() => {
						setSnackbarRequest(true);
					}}
				/>
				<BottomNavigationAction
					label="Safe"
					value="safe"
					icon={<ShieldIcon />}
					onClick={() => {
						setSnackbarSafe(true);
					}}
				/>
				<BottomNavigationAction
					label="Home"
					value="home"
					icon={<HomeIcon />}
					onClick={() => {
						setSnackbarHome(true);
					}}
				/>
			</BottomNavigation>
		</>
	);
};

export default BottomNav;
