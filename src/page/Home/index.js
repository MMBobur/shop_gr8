import React from "react";
import Image_list from "../../components/image_list";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import LookBook from "../../components/LookBook";
import Blog from "../../components/blog";
import Future from "../../components/future_poducts"

export default () => {
	return (
		<>
			<Navbar />
			<Image_list />
			<Future />
			<LookBook />
			<Blog />
			<Footer />
		</>
	);
};
