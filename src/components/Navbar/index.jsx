import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './style.css'
import { color } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const pages = ['Home', 'Shop', 'Sale','Features','Blog','About','Contact'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{backgroundColor:'white', color:'black'}}>
       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg:'flex'}, backgroundColor:'#F5F5F5' }}>
       <Container maxWidth>
<Grid container spacing={2}>
 <Grid item xs={12}>
     <>
       <div style={{float:'left',marginTop:'0.5%'}}>
         <Tooltip title='Facebook'>
         <FacebookIcon className='A'/>
         </Tooltip>
         <Tooltip title='Twitter'>
         <TwitterIcon className='A'/>
         </Tooltip>
         <Tooltip title='Apple'>
         <AppleIcon className='A'/>
         </Tooltip>
         <Tooltip title='Google'>
         <GoogleIcon className='A'/>
         </Tooltip>
         <Tooltip title='Instagram'>
         <InstagramIcon className='A'/>
         </Tooltip>
         </div>
        <p style={{textAlign:'center'}}>Free shipping for standard order over $100</p>
        <div style={{float:'right',display:'flex',marginTop:'-2.5%'}}>
       <p>fashe@example.com</p>
  <select style={{border:'none',color:'GrayText',backgroundColor:'#F5F5F5'}} className='B'>
          <option value="2" className='B'>USD</option>
          <option value="3">EURO</option>
         <option value="4">SUM</option>
        <option value="5">GBP</option>
        <option value="6">LIRA</option>
         <option value="8">TANGE</option>
      </select>
   </div>
    </>
        
  </Grid>
 </Grid>
 </Container>
 </Box>
 <Container maxWidth>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h1 style={{fontFamily:'unset',fontWeight:'unset'}}>Fashe.</h1>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <h1 style={{fontSize:'100%'}}>Fashe.</h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,textAlign:'center',justifyContent:'center'} }}>
            {pages.map((page) => (
              <Button className='A'
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Account">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <AccountCircleIcon className='A' style={{fontSize:'100%',":hover":{backgroundColor:'red'}}}/>
        
              </IconButton>
            </Tooltip>
            <Tooltip title="Shopping">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <ShoppingBagIcon className='A' style={{marginLeft:'5%'}}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' ,width:'100%' ,xs:'100%'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'end',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'end',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              style={{width:'100%'}}
            >
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;