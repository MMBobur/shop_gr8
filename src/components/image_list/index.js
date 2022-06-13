import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




export default function ResponsiveGrid() {
	return (
		<Box sx={{ mx:'2%'}}>
			<Grid container spacing={{ xs: 2, md:3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{}} >
				<Grid item xs={12} sm={4} md={4} sx={{}}>
					<Typography sx={{boxSizing:'border-box', p:'0%','img:hover':{transform: 'scale(1.1,1.1)'}}}>
						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-02.jpg?v=1514473752"
							loading="lazy"
							style={{boxSizing:'border-box',width:'100%','&:hover':{ filter: 'blur(4px)'} }}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>dresses</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} md={4} >
					<Typography sx={{ p:'0%',':hover':{transform: 'scale(1.1,1.1)'}}}>
						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-03.jpg?v=1514473908"
							loading="lazy"
							style={{width:'100%'}}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>watches</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} md={4} >
					<Typography sx={{ p:'0%','img:hover':{transform: 'scale(1.1,1.1)'}}}>

						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-04.jpg?v=1514473987"
							loading="lazy"
							style={{width:'100%'}}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>bags</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} md={4} >
					<Typography sx={{ p:'0%','img:hover':{transform: 'scale(1.1,1.1)'}}}>
						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-05.jpg?v=1514473868"
							loading="lazy"
							style={{width:'100%', ':hover':{ transform: 'scale(1, 2)'}}}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>Sunglasses</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} md={4} sx={{mt:'-12%'}} >
					<Typography sx={{ p:'0%','img:hover':{transform: 'scale(1.1,1.1)'}}}>

						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-07.jpg?v=1514473940"
							loading="lazy"
							style={{width:'100%'}}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>Footerwear</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} md={4} >
					<Typography sx={{ p:'0%','img:hover':{transform: 'scale(1.1,1.1)'}}}>
						<img
							src="https://cdn.shopify.com/s/files/1/2672/5778/files/banner-09.jpg?v=1514474059"
							loading="lazy"
							style={{width:'100%'}}
						/>
					</Typography>
					<Typography sx={{display:'position'}}>
						<Button href='https://fashe-theme.myshopify.com/collections/all' sx={{px:'20%',color:'black', position:'relative', left:'20%', bottom: '70px', bgcolor:'white',borderRadius:'0%', ':hover':{bgcolor:'#E55740'}}}>Accossories</Button>
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
}
