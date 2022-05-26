import * as React from "react";
import { Box, Container, Button } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import rasm1 from "../../assets/img/1.webp";
import rasm2 from "../../assets/img/2.webp";
import rasm3 from "../../assets/img/3.webp";
import rasm4 from "../../assets/img/5.webp";
import rasm5 from "../../assets/img/4.webp";
import rasm6 from "../../assets/img/6.jpg";
import "./style.css";

// const isMobile = useMediaQuery(theme.breakpoints.up("sm")){
export default function MasonryImageList() {
	return (
		<Container maxWidth="lg">
			<Box sx={{ width: "100%", my: "3%" }}>
				<ImageList
					variant="masonry"
					gap={25}
					cols={3}
					sx={{
						display: { xs: "flex", sm: "flex", md: "block" },
						flexDirection: "column",
					}}
					// cols={{ xs: 2, sm: 3, md: 3, lg: 6 }}
				>
					{/* <ImageList variant="quilted" cols={isMobile ? 2 : 3} gap={8}> */}
					{itemData.map((item) => (
						<ImageListItem
							key={item.img}
							sx={{ display: "block", cursor: "pointer" }}
						>
							<figure>
								<img
									src={`${item.img}?w=248&fit=crop&auto=format`}
									srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
									loading="lazy"
									className="img"
								/>
							</figure>
							<Box
								sx={{
									width: "100%",

									position: "absolute",
									// bottom: "5%",
									top: "85%",

									display: "flex",
									justifyContent: "center",
								}}
							>
								<Button
									href="#"
									variant="text"
									// disabled={Box}
									className="btnImg"
									sx={{
										bgcolor: "white",

										borderRadius: 0,
										zIndex: 1,

										py: "2%",
										width: "160px",
										color: "black",
										":hover": {
											bgcolor: "#DF624A",
											color: "white",
										},
									}}
								>
									{item.title}
								</Button>
							</Box>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
		</Container>
	);
}

const itemData = [
	{
		img: rasm1,
		title: "DRESSES",
	},
	{
		img: rasm2,
		title: "SUNGLASSES",
	},
	{
		img: rasm3,
		title: "WATCHES",
	},
	{
		img: rasm4,
		title: "FOOTERWEAR",
	},
	{
		img: rasm5,
		title: " BAGS",
	},
	{
		img: rasm6,
		title: "ACCESSORIES",
	},
];
