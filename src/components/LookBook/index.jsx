import React from 'react'
import { Box, Grid, Container, Typography, Link } from '@mui/material'
import rasm from '../../assets/img/banner-08_720x539.webp'
import rasm1 from '../../assets/img/shop.webp'

const data = [
    {
        number: '-1024',
        clock: 'days',
    },
    {
        number: '-11',
        clock: 'hrs',
    },
    {
        number: '-56',
        clock: 'mins',
    },
    {
        number: '-26',
        clock: 'secs',
    },
]

export default () => {
    return (
        <Box sx={{ width: '100%', background: '#F2F2F2', marginTop: '80px', padding: '60px 0px 60px 0px',display:'flex',alignItems:'center',justifyContent:'center' }}>
            <Box sx={{width:'70%'}}>
                <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{width: "100%",justifyContent:'space-between' }}>
                    <Grid item xs={12} sm={12} md={6}
                        sx={{
                            backgroundImage: `url(${rasm})`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: '95%',
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                            height: '420px'
                        }}>
                        <Box sx={{}}></Box>
                        <Box sx={{ position: 'absolute', zIndex: '10' }}>
                            <Typography variant='h5' sx={{ color: 'white', fontWeight: '600', fontSize: '35px' }}>The Beauty</Typography>
                            <Typography variant='h3' sx={{ color: 'white', fontWeight: '600' }}>LOOKBOOK</Typography>
                            <Link color={'inherit'} sx={{ textDecoration: 'none' }}>VIEW COLLECTION</Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}
                        sx={{
                            backgroundImage: `url(${rasm1})`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: "center",
                            textAlign: 'center',
                            width: '95%',
                            backgroundSize: "cover",
                            backgroundPosition: 'center',
                            height: '420px'
                        }}>
                        <Box sx={{ position: 'absolute', zIndex: '10' }}>
                            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                            <Link sx={{ color: '#555555', fontSize: '20px', ':hover': { color: 'red' }, fontFamily: 'sans-serif' }}>Boxy2 T-Shirt with Roll Sleeve</Link>
                            <Typography variant='h6' sx={{ padding: '10px 0px 40px 0px' }}>$20.00</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '250px' }}>
                                {data.map((item) => (
                                    <Box sx={{ width: '50px', height: '50px', border: '1px solid grey', textAlign: 'center' }}>
                                        <Typography variant='body2'>{item.number}</Typography>
                                        <Typography variant='body2'>{item.clock}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
