import { Button, Menu, MenuItem, Box } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default (props) => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const style = {
		width: "150px",
		display: "flex",
		justifyContent: "center",
		borderBottom: "3px solid #fff",
		":active": { borderBottom: "3px solid #C59E47" },
	};
	return (
		<>
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				sx={{
					px: "1%",
					py: "1%",
					borderBottom: "3px solid #fff",

					":hover": { borderBottom: "3px solid #C59E47" },
					borderRadius: 0,
					color: "black",
					boxShadow: "none",
				}}
			>
				{props.name}
				<ArrowDropDownIcon />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
				sx={{ boxShadow: "none" }}
			>
				<MenuItem onClick={handleClose} sx={style}>
					{props.item1}
				</MenuItem>
				<MenuItem onClick={handleClose} sx={style}>
					{props.item2}
				</MenuItem>
				<MenuItem onClick={handleClose} sx={style}>
					{props.item3}
				</MenuItem>
			</Menu>
		</>
	);
};
