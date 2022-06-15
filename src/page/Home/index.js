import React from "react";
import Image_list from "../../components/image_list";
import Navbar from "../../components/Navbar";
import Carousel from "../../components/Carusel";
import ApBar from "../../components/Navbar/navbar";

import Footer from "../../components/Footer";
import LookBook from "../../components/LookBook";
import Blog from "../../components/blog";
import Footer from "../../components/Footer";
import LookBook from "../../components/LookBook";
import Blog from "../../components/blog";
import Future from "../../components/future_poducts"

export default () => {
	return (
		<>
			<Navbar />
			<Carousel/>
			<ApBar/>
			<Image_list />
			<Future />
			<LookBook />
			<Blog />
			<Footer />
		</>
	);
};
