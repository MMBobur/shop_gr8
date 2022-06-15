import React from 'react'
import './Footer.css'
import { styled } from '@mui/material/styles';
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDribbble } from 'react-icons/fa'
import { FaBehance } from 'react-icons/fa'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    boxShadow: 'none',
    color: '#555555',
}));

const Footer = () => {
    return (
        <div className='Div10'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={10} lg={3.5}>
                    <Item>
                        <li className='Litext'>Top Products</li>
                        <li className='Litext1'>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</li>
                        <div className="Grid1">
                            <FaFacebookF className='Icons' />
                            <AiOutlineTwitter className='Icons' />
                            <FaDribbble className='Icons' />
                            <FaBehance className='Icons' />
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={1.8}>
                    <Item>
                        <li className='Litext'>Top Products</li>
                        <li className='Litext3'>Men</li>
                        <li className='Litext3'>Women</li>
                        <li className='Litext3'>Dresses</li>
                        <li className='Litext3'>Sunglasses</li>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={1.8}>
                    <Item>
                        <li className='Litext'>Top Products</li>
                        <li className='Litext3'>Search</li>
                        <li className='Litext3'>About Us</li>
                        <li className='Litext3'>Contact Us</li>
                        <li className='Litext3'>Returns</li>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={1.8}>
                    <Item>
                        <li className='Litext'>Top Products</li>
                        <li className='Litext3'>Track Order</li>
                        <li className='Litext3'>Returns</li>
                        <li className='Litext3'>Shipping</li>
                        <li className='Litext3'>FAQs</li>
                    </Item>
                </Grid>
                <Grid item xs={8} sm={8} md={5} lg={3}>
                    <Item>
                        <li className='Litext'>Top Products</li>
                        <TextField id="standard-basic" label="" placeholder='Email Address' variant="standard" sx={{ width: '65%', borderColor: '#D35744' }} />
                        <button className='Button'>SUBSCRIBE</button>
                    </Item>
                </Grid>
            </Grid>
            <div sx={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginTop: '30px' }}>
                <div className="Grid2">
                    <FaFacebookF />
                    <AiOutlineTwitter />
                    <FaDribbble />
                    <FaBehance />
                </div>
                <li className='Litext2'>Copyright © 2018 <a href='#' style={{ color: 'white', textDecoration: 'none', color: '#777777' }}>MassTechnologist.com.</a> All rights reserved.</li>
            </div>
        </div>
    )
}

export default Footer