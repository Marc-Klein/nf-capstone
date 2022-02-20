import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StyledAppBar from "./styled";
import { signOut, useSession } from "next-auth/react";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import CoPresentIcon from "@mui/icons-material/CoPresent";

const pages = ["Invite!", "Show Buddies!"];
const settings = ["Logout"];

const ResponsiveAppBar = () => {
	const { data: session } = useSession();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<StyledAppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						noWrap
						variant="h6"
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						Test
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							color="inherit"
							onClick={handleOpenNavMenu}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							keepMounted
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							sx={{
								display: { xs: "block", md: "none" },
							}}
							onClose={handleCloseNavMenu}
						>
							{pages.map(page => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						noWrap
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
					>
						Test
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map(page => (
							<Button
								key={page}
								sx={{ my: 2, color: "white", display: "block" }}
								onClick={handleCloseNavMenu}
							>
								{page}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
								<Avatar src={session.user.image} alt={session.user.name} />
							</IconButton>
						</Tooltip>
						<Menu
							keepMounted
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">
										<Button
											disableRipple
											onClick={() => {
												void signOut();
											}}
										>
											{setting}
										</Button>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</StyledAppBar>
	);
};
export default ResponsiveAppBar;
