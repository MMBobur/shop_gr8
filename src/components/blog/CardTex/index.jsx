import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";

export default function MultiActionAreaCard() {
	return (
		<>
			<Box sx={{ textAlign: "center", my: "50px" }}>
				<Typography variant="h5" sx={{ fontSize: "30px", fontWeight: "600" }}>
					@ FOLLOW US ON INSTAGRAM
				</Typography>
			</Box>
			<br />
			<br />

			<Box sx={{ display: "flex", justifyContent: "center", mb: "80px" }}>
				<Box sx={{ width: "88%" }}>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
					>
						<Grid
							xs={12}
							sm={4}
							md={4}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<Box sx={{ width: "100%", textAlign: "center" }}>
								<br />
								<Typography
									variant="h6"
									sx={{ fontSize: "20px", color: "#555555" }}
								>
									Free Delivery Worldwide
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Mirum est notare quam littera gothica
								</Typography>
								<br />
							</Box>
						</Grid>
						<Grid
							xs={12}
							sm={4}
							md={4}
							sx={{
								display: "flex",
								justifyContent: "center",
								borderLeft: "1px solid #D9D9D9",
								borderRight: "1px solid #D9D9D9",
							}}
						>
							<Box sx={{ width: "100%", textAlign: "center" }}>
								<br />
								<Typography
									variant="h6"
									sx={{ fontSize: "20px", color: "#555555" }}
								>
									30 Days Return
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Simply return it within 30 days for an exchange
								</Typography>
								<br />
							</Box>
						</Grid>
						<Grid
							xs={12}
							sm={4}
							md={4}
							sx={{ display: "flex", justifyContent: "center" }}
						>
							<Box sx={{ width: "100%", textAlign: "center" }}>
								<br />
								<Typography
									variant="h6"
									sx={{ fontSize: "20px", color: "#555555" }}
								>
									Store Opening
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Shop open from Monday to Sunday
								</Typography>
								<br />
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
