import * as React from "react";		
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import './index.css'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,

  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ width: '100%' }}>
      <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12}>
        <Typography style={{textAlign:'center',fontSize:'50px'}}>
          Our blog
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sm={4} lg={4}>
        <Typography>
        <img className='rasim1' src="https://cdn.shopify.com/s/files/1/2672/5778/articles/blog-01_720x539.jpg?v=1514488158" alt="" style={{width:'100%',height:'100%'}}/>
        </Typography>
        <Typography style={{marginTop:'5%'}}>
          <h4>Black Friday Guide:Best Sales & Discount<br/> Codes</h4>
          <p style={{color:'gray',fontSize:'15px'}}>by fashe-theme Admin on Dec 28,2017</p>
          <p style={{color:'gray',fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sm={4} lg={4}>
      <Typography>
        <img className='rasim2' src="https://cdn.shopify.com/s/files/1/2672/5778/articles/blog-02_720x539.jpg?v=1514488127" alt=""  style={{width:'100%',height:'100%'}}/>
        </Typography>
        <Typography style={{marginTop:'5%'}}>
          <h4>Black Friday Guide:Best Sales & Discount<br/> Codes</h4>
          <p style={{color:'gray',fontSize:'15px'}}>by fashe-theme Admin on Dec 28,2017</p>
          <p style={{color:'gray',fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </Typography>
      </Grid>
      <Grid item item xs={12} md={4} sm={4} lg={4}>
      <Typography>
        <img className='rasim3' src="https://cdn.shopify.com/s/files/1/2672/5778/articles/blog-03_720x539.jpg?v=1514488076" alt=""  style={{width:'100%',height:'100%'}}/>
      </Typography>
      <Typography style={{marginTop:'5%'}}>
          <h4>Black Friday Guide:Best Sales & Discount<br/> Codes</h4>
          <p style={{color:'gray',fontSize:'15px'}}>by fashe-theme Admin on Dec 28,2017</p>
          <p style={{color:'gray',fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
        </Typography>
      </Grid>
    </Grid>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid item xs={12}>
        <Typography style={{textAlign:'center',fontSize:'30px',marginTop:'5%'}}>
        @ FOLLOW US ON INSTAGRAM
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sm={4} lg={4}>
        <Typography>
        </Typography>
        <Typography style={{marginTop:'20%'}}>
          <h4 style={{color:'gray'}}>Free Delivery Worldwide</h4>
          <p style={{color:'gray',fontSize:'15px',marginTop:'-4%'}}>Mirum est notare quam littera gothica</p>
          
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} sm={4} lg={4}>
      <Typography>
        </Typography>
        <Typography style={{marginTop:'20%'}}>
          <h4 style={{color:'gray'}}>30 Days Return</h4>
          <p style={{color:'gray',fontSize:'15px',marginTop:'-4%'}}>simply return it within 30 days for an exchange.</p>
         
        </Typography>
      </Grid>
      <Grid item item xs={12} md={4} sm={4} lg={4}>
      <Typography>
      </Typography>
      <Typography style={{marginTop:'20%'}}>
          <h4 style={{color:'gray'}}>Store Opening</h4>
          <p style={{color:'gray',fontSize:'15px',marginTop:'-4%'}}>Shop open from Monday to Sunday</p>
         
        </Typography>
      </Grid>
    </Grid>
    </Container>
  </Box>
  );
}

	
	
