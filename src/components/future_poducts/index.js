import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import './style.css'



const carusel1 = [
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-15_7ca55ba5-301e-4461-92ea-68c8b02e35e7_1200x1600.jpg?v=1515096104',
     nomi:'Boxy7 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-13_d77ff6ee-7735-4f22-a436-1ac6b9ccabd6_1200x1600.jpg?v=1515096032',
     nomi:'Boxy5 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-04_bcfb0f5a-4eff-46f0-992d-b73eb1b4b88e_1200x1600.jpg?v=1515095994',
     nomi:'Boxy1 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-11_fa17bbd7-4f67-488d-930a-f5e6ece4e595_1200x1600.jpg?v=1514273806',
     nomi:'Boxy3 T-Shirt with Roll Sleeve',narxi:'$20.00'}
]

const  carusel2 = [
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-16_84f06345-b149-4331-9957-2d65c6b87584_1200x1600.jpg?v=1514273770',
    nomi:'Boxy9 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-12_e8f7bcc1-8e0a-4966-80fd-3d38fcc28a1e_1200x1600.jpg?v=1514273438',
    nomi:'Boxy2 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-10_928bd293-fd66-4b11-af8f-8e118c77549a_1200x1600.jpg?v=1514273397',
    nomi:'Boxy6 T-Shirt with Roll Sleeve',narxi:'$20.00'},
    {img:'https://cdn.shopify.com/s/files/1/2672/5778/products/item-03_1200x1600.jpg?v=1514269273',
    nomi:'Boxy8 T-Shirt with Roll Sleeve',narxi:'$20.00'}
]


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function index() {
  return (
        <Container>
            <Box sx={{ width: '100%' }}>
            <Typography variant='h4' component='div' sx={{color:'black',textAlign:'center',mt:'7%',mb:'5%',fontWeight:'bold'}}>
                     FEATURED PRODUCTS</Typography> 
            <Carousel sx={{mb:'5%'}}>
                     <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={1} spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      {carusel1.map((index) => (
                         <Grid  xs={12} md={6} sm={6} lg={3}>
                         <Item className='' sx={{backgroundImage:`url(${index.img})`,backgroundSize:'100%',width:'100%',height:'400px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
                             <Typography className='pic'>
                     <Typography className='text'>
                       <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button>
                     </Typography>
                   </Typography>
                          </Item>
                             <Typography component='div' sx={{textAlign:'start',mt:'5%'}}>
                                 <Typography sx={{":hover":{color:'red'}}}>{index.nomi}</Typography>
                                 <Typography>{index.narxi}</Typography>
                             </Typography>
                         </Grid>
                      ))}
                    
                  </Grid>
                </Box> 

                      <Box sx={{ width: '100%' }}>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                      {carusel2.map((index) => (
                         <Grid  xs={12} md={6} sm={6} lg={3}>
                         <Item className='' sx={{backgroundImage:`url(${index.img})`,backgroundSize:'100%',width:'100%',height:'400px'}}>
                             {/* <img src={index.img} alt='#'  style={{width:'100%',height:'100%'}} /> */}
                             <Typography className='pic'>
                     <Typography className='text'>
                       <Button variant="contained" sx={{borderRadius:'30px',bgcolor:'black',border:'1px solid black',marginTop:'130%'}}>Add Too Card</Button>
                     </Typography>
                   </Typography>
                          </Item>
                             <Typography component='div' sx={{textAlign:'start',mt:'5%'}}>
                                 <Typography sx={{":hover":{color:'red'}}}>{index.nomi}</Typography>
                                 <Typography>{index.narxi}</Typography>
                             </Typography>
                         </Grid>
                      ))}
                    
                  </Grid>
                </Box>        
               
               
            </Carousel >
            </Box>
    </Container>
  )
}




