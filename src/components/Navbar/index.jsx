import {
	Box,
	Button,
	Container,
	Grid,
	Input,
	InputBase,
	Menu,
	MenuItem,
	TextField,
	Typography,
} from "@mui/material";
import { FaFacebookF, FaGooglePlusG, FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuIcon from "@mui/icons-material/Menu";
const SwipeableTemporaryDrawer = () => {
	const [state, setState] = React.useState({
		top: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "left" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<NavbarBox />
		</Box>
	);

	return (
		<div>
			{["top"].map((anchor) => (
				<Box key={anchor} sx={{ py: "10%" }}>
					<Button
						onClick={toggleDrawer(anchor, true)}
						sx={{ color: "black", border: 1, }}
					>
						<MenuIcon />
					</Button>
					<SwipeableDrawer
						anchor={anchor}
						open={state[anchor]}
						onClose={toggleDrawer(anchor, false)}
						onOpen={toggleDrawer(anchor, true)}
					>
						{list(anchor)}
					</SwipeableDrawer>
				</Box>
			))}
		</div>
	);
};
const NavbarBox = () => {
	const sty = {
		px: "1%",
		py: "1%",
		borderBottom: "3px solid #fff",

		":hover": { borderBottom: "3px solid #C59E47", bgcolor: "white" },
		borderRadius: 0,
		color: "black",
	};
	return (
		<Grid
			container
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Grid
				xl={8}
				lg={8}
				md={8}
				xs={0}
				sx={{
					display: "flex",
					gap: 2,
					flexDirection: "column",
					py: "1%",

					px: "3%",
					justifyContent: "space-between",
				}}
			>
				<Button variant="text" sx={sty}>
					HOME
				</Button>
				<Button variant="text" sx={sty}>
					Shop
				</Button>
				<Button variant="text" sx={sty}>
					Sale
				</Button>
				<Button variant="text" sx={sty}>
					Features
				</Button>
				<Button variant="text" sx={sty}>
					About
				</Button>
				<Button variant="text" sx={sty}>
					Contact
				</Button>
			</Grid>
		</Grid>
	);
};
export default () => {
	const sty = {
		px: "1%",
		py: "1%",
		borderBottom: "3px solid #fff",

		":hover": { borderBottom: "3px solid #C59E47", bgcolor: "white" },
		borderRadius: 0,
		color: "black",
	};
	return (
		<>
			<Grid
				container
				xl={12}
				lg={12}
				md={12}
				sx={{ width: "100%", bgcolor: "black" }}
			>
				<Container maxWidth="xl" sx={{ bgcolor: '#F0F0F0', color: '#8888', }}>
					<Grid
						container
						sx={{
							maxWidth: "100%",
							// minWidth: "450px",
							// px: "9.5%",
							// color: "white",
							display: "flex",
							justifyContent: "center",
						}}
					>
						<Grid
							item
							xl={10}
							lg={10}
							md={10}
							xs={12}
							sx={{
								px: "1.3%",
								py: "0.4%",
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<Grid item xl={4} lg={4} md={4} xs={4}>
								<Box sx={{ display: "flex", gap: "0.8vw", pb: "0.2%", }}>
									<AiOutlineTwitter style={{ fontSize: "22px" }} />
									<FaGooglePlusG style={{ fontSize: "22px" }} />
									<FaPinterest style={{ height: "22px" }} />
								</Box>
							</Grid>

							<Grid
								item
								xl={4}
								lg={4}
								md={4}
								xs={4}
								sx={{ display: "flex", justifyContent: "center" }}
							>
								<Typography fontSize="80%" sx={{ fontFamily: "sans-serif" }}>
									Free shipping for standard order over $100
								</Typography>
							</Grid>
							<Grid
								item
								xl={4}
								lg={4}
								md={4}
								xs={4}
								sx={{
									display: "flex",
									justifyContent: "start",
								}}
							>
								<Box
									sx={{
										display: "flex",
										width: "90%",

										justifyContent: "end",
									}}
								>
									<Typography
										fontSize="80%"
										sx={{
											fontFamily: "sans-serif",
											":hover": { color: "#FDBE33" },
										}}
									>
										LOGIN
									</Typography>
									<Typography fontSize="80%" sx={{ mx: "3px" }}>
										|
									</Typography>

									<Typography
										fontSize="80%"
										sx={{
											fontFamily: "sans-serif",
											":hover": { color: "#FDBE33" },
										}}
									>
										USD
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<Box sx={{ width: "100%", bgcolor: "white", px: "9.5%" }}>
					<Container maxWidth="xl" sx={{ position: "relative" }}>
						<Box sx={{ width: "100%" }}>
							<Box sx={{ position: "absolute", top: 10, }}>
								<Typography sx={{ fontWeight: 'bold', fontSize: 30 }}>Fashe</Typography>
							</Box>
							<Box
								sx={{
									display: { xs: "none", sm: "none", lg: "flex", md: "flex" },
								}}
							>
								<Grid
									container
									sx={{
										display: "flex",
										justifyContent: "center",
									}}
								>
									<Grid
										xl={8}
										lg={8}
										md={8}
										xs={0}
										sx={{
											display: "flex",
											gap: 5,
											py: "1%",

											px: "3%",
											justifyContent: "space-between",
										}}
									>
										<Button variant="text" sx={sty}>
											HOME
										</Button>
										<Button variant="text" sx={sty}>
											Shop
										</Button>
										<Button variant="text" sx={sty}>
											Sale
										</Button>
										<Button variant="text" sx={sty}>
											Features
										</Button>
										<Button variant="text" sx={sty}>
											About
										</Button>
										<Button variant="text" sx={sty} >
											Contact
										</Button>
									</Grid>
								</Grid>
							</Box>
							<Box
								sx={{
									width: "100%",
									display: { xs: "flex", sm: "flex", lg: "none", md: "none" },
									justifyContent: "end",
								}}
							>
								<Box>
									<SwipeableTemporaryDrawer />
								</Box>
							</Box>
						</Box>
					</Container>
				</Box>
			</Grid>
		</>
	);
};







// eng kaatta box ga 1 ci navbar displar:{md:'none', lg:'flex  '}