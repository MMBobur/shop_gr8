import React from 'react'
import { Box, Grid, Container, Typography, Input, Button, ButtonGroup } from '@mui/material'

// import './index.css'

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';


// import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
// import AddchartIcon from '@mui/icons-material/Addchart';
// import BurstModeIcon from '@mui/icons-material/BurstMode';
// import CallToActionIcon from '@mui/icons-material/CallToAction';


export default () => {
  return (
    <Box lighter sx={{
      bgcolor: '#F0F0F0',
      width: '100%',
      color: '#888888',
      height: '100%'
      // fontWeight: 'lighter'
    }}>
      <Container >
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          aliginItems: 'center',
          pt: 10,
        }}>
          <Grid container spacing={1}>
            <Grid md={4} xs={6}>
              <Box sx={{ width: "90%" }}>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }} > GET IN TOUCH</Typography>
                <br />
                <Typography>Any questions? Let us  8th floor, 379
                  Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                </Typography>

                <FacebookOutlinedIcon />
                <TwitterIcon />
                <PinterestIcon />
                <GoogleIcon />
                <InstagramIcon />
              </Box>
            </Grid>
            <Grid md={2} xs={12} >
              <Box sx={{ gapTop: 4 }}>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }} > CATEGORIES</Typography>
                <br />
                <Typography>Men</Typography>
                <Typography>Women</Typography>
                <Typography>Dresses</Typography>
                <Typography>Sunglasses</Typography>
              </Box>
            </Grid>
            <Grid md={2} xs={12}>
              <Box>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }}>LINCKS</Typography>
                <br />
                <Typography>Search</Typography>
                <Typography>About Us</Typography>
                <Typography>Contact Us</Typography>
                <Typography>Returns</Typography>
              </Box>
            </Grid>
            <Grid md={2} xs={12}>
              <Box>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }} > HELP</Typography>
                <br />
                <Typography>Track Order</Typography>
                <Typography>Returns</Typography>
                <Typography>Shipping</Typography>
                <Typography>FAQs</Typography>
              </Box>
            </Grid >
            <Grid md={2} xs={12}>
              <Box sx={{ gapTop: 4 }}>
                <Typography sx={{ fontWeight: 'bold', color: '#000' }} > NEWSLETTER</Typography>
                <br />
                <Input sx={{ width: 'auto' }} type='text' placeholder='Email Address'></Input>
                <br />
                <br />
                <Button sx={{
                  bgcolor: '#000',
                  color: '#fff',
                  borderRadius: 50,
                  width: '80%',
                  gapTop: 4,
                  // hoder: {
                  //   bgcolor: '#EB4C42'
                  // }

                }}>SUBSCRIBE</Button>
              </Box>
            </Grid >
          </Grid >
        </Box >
      </Container>
      <Grid md={12} xs={12}>
        {/* <Box sx={{ alignItems: 'center' }}>
          <FeaturedPlayListIcon />
          <AddchartIcon />
          <BurstModeIcon />
          <CallToActionIcon />
        </Box> */}
        <Typography sx={{ textAlign: 'center', pt: 17 }}>Copyright © 2018 MassTechnologist.com. All rights reserved.</Typography>
      </Grid>
    </Box >
  )
}

