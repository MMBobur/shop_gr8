import * as React from 'react';
import './Main.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from  '@mui/material/Typography';
import Rasmc1 from '../../assets/img/12.jpg';
import Rasmc2 from '../../assets/img/13.jpg';
import Rasmc3 from '../../assets/img/14.jpg';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';




const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const images = [
    {
      label: 'Constructor1',
      imgPath:Rasmc1,
    },
    {
      label: 'Constructor2',
      imgPath:Rasmc2,
    },
    {
      label: 'Constructor3',
      imgPath:Rasmc3,
    },
  ];

export default function Carousel() {
    
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
    const handleStepChange = (step) => {
        setActiveStep(step);
      };
    
    return (

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label} style={{
            height: '100pxz',
            width: '100%',
            // overflow: 'hidden',


          }}>
            {Math.abs(activeStep - index) <= 5 ? (
              <Box
                component="img"
                sx={{
                    position: 'relative',
                    width: '100%',
                  display: 'block',
                  // maxWidth: '100%',
                  overflow: 'hidden',
                  height: '520px',
                  backgroundRepeat:'no-repeat',
                //  backgroundImage
                backgroundColor:'black',
                opacity:0.9              
              }}
                src={step.imgPath}
                alt={step.label}
                />
              
            ) : null}
            
          <Typography variant='p' placement='top' sx={{alignItems:'center',justifyContent:'',position:'absolute',color:'white',marginTop:'-25%',height:'90.5%',textAlign:'center',width:'100%',paddingTop:''}}>
              <Typography variant='h4'sx={{}}>Woman collection 2022</Typography> <br/><br/><br/>
              <Typography variant='h2'sx={{fontWeight:'bold'}}>Nex Arivalls</Typography> <br/><br/><br/><br/>
              <Typography className='button1' variant='button'sx={{border:'2px solid white',backgroundColor:'white',color:'black',padding:'1%',borderRadius:'30px',':hover':{backgroundColor:'#E3573C',color:'white',border:'#E3573C'}}}>Get A Quote</Typography>
          </Typography> 

          
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
            sx={{
              marginTop:'-25%',
              color:'white',
              backgroundColor:'gray' ,
              borderRadius:'60px',
            }}
              size="large"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button sx={{marginTop:'-25%',color:'white',backgroundColor:'gray' ,borderRadius:'60px'}} size="large" onClick={handleBack} disabled={activeStep === 5}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              
            </Button>
          }
        />
      </Box>
        </Grid>
      </Grid>
    </Box>
  );
}