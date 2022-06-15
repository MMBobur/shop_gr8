import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './style.css'
import Img from '../../assets/img/banner-08_720x539.webp';
import { Link } from '@mui/material';
// import { fontWeight } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

export default () => {
	return (
		<div style={{backgroundColor:'#F2F2F2FF',border:'1px solid #F2F2F2FF',width:'100%'}}>
    
      <Container fixed>
			 <Box sx={{ flexGrow: 1 ,mt:'7%',mb:'7%' }}>
      <Grid container>
        <Grid xs={12} md={12} sm={12} lg={5.7} sx={{margin:'1%',display:'block'}}>
          <Item sx={{backgroundImage: `url(${Img})`,backgroundSize:'120%',border:'1px solid none'}} className='img1'>
			  {/* <img src={Img} alt="" className='img1' /> */}
			  <Typography component='div' 
			  style={{marginTop:'34%',marginBottom:"23%",color:'white'}}>
				  <Typography style={{fontSize:'100%',fontWeight:'bolder'}}>The Beauty</Typography>
				  <Typography variant='h4' style={{fontWeight:'bolder'}}>LOOKBOOK</Typography>
				  <Link href='https://fashe-theme.myshopify.com/' style={{fontWeight:'bold',color:'white'}}>VIEW COLLECTION</Link>
			  </Typography>
		  </Item>
        </Grid>
        <Grid xs={12} md={12} sm={12} lg={5.7} sx={{margin:'1%'}}>
          <Item>
			  <img src="https://static.vecteezy.com/system/resources/previews/001/201/152/original/glasses-png.png" alt="" className='image2' />
			  <Typography component='div' style={{}}>
				  <Typography variant='link' href='' sx={{":hover":{color:'red'},fontWeight:'inherit',color:'black'}}>
					  Boxy2 T-Shirt with Roll Sleeve</Typography>
				  <Typography style={{fontWeight:'inherit'}}>$20.00</Typography>
				  <Typography component='div' style={{display:'flex',justifyContent:'center',marginTop:'6%'}}>
				  {foo.map((foo) => (
					  <Typography style={{border:'1px solid gray',width:'60px',margin:'5px'}}>
						  <Typography style={{fontWeight:'bold'}}>{foo.num}</Typography>
						  <Typography>{foo.name1}</Typography>
					  </Typography>
				  ))}
				
				  </Typography>
			  </Typography>
		  </Item>
        </Grid>
      </Grid>
    </Box>
	</Container>
  
		</div>
	);
};


const foo = [
	{num:'-1257', name1:'days'},
	{num:'-16' ,name1:'hrf'},
	{num:'-21' ,name1:'mins'},
	{num:'-23' ,name1:'secs'},
]