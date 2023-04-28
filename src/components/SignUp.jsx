import React from "react";
import {
  Box,
  Container,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from "@emotion/react";


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    'https://www.pngplay.com/wp-content/uploads/1/Need-For-Speed-Car-Transparent-Background.png',
  },
  {
    label: 'Bird',
    imgPath:
      'https://editzstock.com/wp-content/uploads/2022/06/Red-lamborghini-transparent-background.png',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png',
  },
];



const AddAppointment = () => {
  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const navigate = useNavigate("");

 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (<>
    <Header />
      <Container maxWidth="sm">
          <Typography variant="h3">Make your life easy</Typography>

          <Box sx={{ maxwidth: 400 , flexGrow:1}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
        </Box>
      <Button variant="contained" color="primary"
      onClick={()=> navigate('/buy')} sx={{marginLeft:'120px' , marginTop:'40px'}}>
          Buy Car
      </Button>
      <Button variant="contained" color="primary"
      onClick={()=> navigate('/sell')} sx={{marginLeft:'120px' , marginTop:'40px'}}>
          Sell Car
        </Button>
    </Container>
    </>
  );
};

export default AddAppointment;
