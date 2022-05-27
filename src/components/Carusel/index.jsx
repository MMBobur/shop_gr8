import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 800,
			easing: "ease-in-out-sine",
			delay: 200,
			mirror: true,
		});
		AOS.refresh();
	}, []);
	const data = [
		{
			img1: require("../../assets/img/12.jpg"),
		},
		{
			img1: require("../../assets/img/13.jpg"),
		},
		{
			img1: require("../../assets/img/14.jpg"),
		},
	];
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="App">
			<Box>
				<Carousel
					responsive={responsive}
					additionalTransfrom={0}
					arrows
					autoPlay
					autoPlaySpeed={3000}
					centerMode={false}
					className=""
					containerClass="container-with-dots"
					dotListClass=""
					draggable
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={true}
					renderDotsOutside={false}
					showDots={false}
					sliderClass=""
					slidesToSlide={1}
					swipeable
				>
					{data.map((item) => (
						<Box
							sx={{
								height: { md: 600, sm: 300, xs: 250 },
								background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img1})`,
								backgroundSize: "cover",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
							key={item}
						>
							<Typography
								sx={{
									color: "white",
								}}
							>
								<Typography data-aos="fade-down">
									Women Collection 2018
								</Typography>
								<Typography
									data-aos="fade-up"
									sx={{ fontWeight: 600, fontSize: { md: 65, sm: 45, xs: 35 } }}
								>
									NEW ARRIVALS
								</Typography>
								<Button
									data-aos="zoom-in"
									sx={{
										color: "black",
										backgroundColor: "white",
										borderRadius: 10,
										pt: 1,
										pb: 1,
										pl: 2,
										pr: 2,
										":hover": {
											color: "white",
											backgroundColor: "#E7553C",
										},
									}}
								>
									ShOP NOW
								</Button>
							</Typography>
							{/* <img
                src={item.img1}
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear - gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
                }}
              /> */}
						</Box>
					))}
				</Carousel>
			</Box>
		</div>
	);
};
