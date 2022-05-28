import React from "react";
import { Box, Grid, Container, Typography, Link } from "@mui/material";
import rasm from "../../assets/img/banner-08_720x539.webp";
import rasm1 from "../../assets/img/shop.webp";
import "./style.css";

const data = [
	{
		number: "-1024",
		clock: "days",
	},
	{
		number: "-11",
		clock: "hrs",
	},
	{
		number: "-56",
		clock: "mins",
	},
	{
		number: "-26",
		clock: "secs",
	},
];

export default () => {
	return (
		<Box className="bigBox">
			<Container className="mediumBox">
				<Grid container className="bigGrid">
					<Grid className="mediumGrid" item xs={12} sm={12} md={6}>
						<figure>
							<img src={rasm} className="image" />
						</figure>
						<Box sx={{ position: "absolute", zIndex: "10" }}>
							<Typography className="text1">The Beauty</Typography>
							<Typography
								className="text2"
								sx={{ display: { xs: "none", sm: "flex" }, fontSize: "25px" }}
							>
								LOOKBOOK
							</Typography>
							<Typography
								className="text2"
								sx={{ display: { xs: "flex", sm: "none" } }}
							>
								LOOKBOOK
							</Typography>
							<br /> <br />
							<a>VIEW COLLECTION</a>
						</Box>
					</Grid>

					<Grid className="mediumGrid" item xs={12} sm={12} md={6}>
						<figure>
							<img className="image" src={rasm1} />
						</figure>

						<Box sx={{ position: "absolute", zIndex: "10" }}>
							<a>Boxy2 T-Shirt with Roll Sleeve</a>
							<Typography variant="h6" sx={{ padding: "10px 0px 40px 0px" }}>
								$20.00
							</Typography>
							<Box
								className="forBox"
								sx={{
									display: "flex",
									justifyContent: "space-between",
									width: "250px",
								}}
							>
								{data.map((item) => (
									<Box
										sx={{
											width: "50px",
											height: "50px",
											border: "1px solid grey",
											textAlign: "center",
										}}
									>
										<Typography variant="body2">{item.number}</Typography>
										<Typography variant="body2">{item.clock}</Typography>
									</Box>
								))}
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
