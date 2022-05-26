import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
	Button,
	Grid,
	CardActionArea,
	CardActions,
	Box,
	Container,
} from "@mui/material";
import Img from "../../assets/img/blog-01_720x539.webp";
import Img2 from "../../assets/img/blog-02_720x539.webp";
import Img3 from "../../assets/img/blog-03_720x539.jpg";

const data = [
	{
		img: Img,
		text: "Black Friday Guide: Best Sales & Discount Codes",
		text2: "by fashe-theme Admin on Dec 28,2017",
		text3:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
	},
	{
		img: Img2,
		text: "The White Sneakers Nearly Every Fashion Girls Own",
		text2: "by fashe-theme Admin on Dec 28,2017",
		text3:
			"Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...",
	},
	{
		img: Img3,
		text: "New York SS 2018 Street Style: By Annina Mislin",
		text2: "by fashe-theme Admin on Dec 28,2017",
		text3:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...",
	},
];

export default function MultiActionAreaCard() {
	return (
		<>
			<Box sx={{ textAlign: "center", my: "50px" }}>
				<Typography variant="h4" sx={{ fontWeight: "600" }}>
					Our Blog
				</Typography>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", mb: "80px" }}>
				<Box sx={{ width: "85%" }}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						{data.map((item) => {
							return (
								<Grid
									xs={12}
									sm={6}
									md={4}
									sx={{ display: "flex", justifyContent: "center" }}
								>
									<Card sx={{ m: "15px", width: "100%" }}>
										<CardActionArea>
											<CardMedia
												sx={{ p: "" }}
												component="img"
												image={item.img}
												alt="green iguana"
											/>
											<CardContent>
												<Typography variant="h6" sx={{ fontSize: "17px" }}>
													{item.text}
												</Typography>
												<br />
												<Typography variant="body2" color="text.secondary">
													{item.text2}
												</Typography>
												<br />
												<Typography variant="body2" color="text.secondary">
													{item.text3}
												</Typography>
											</CardContent>
										</CardActionArea>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Box>
		</>
	);
}
