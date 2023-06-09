import React  from "react";
import { makeStyles } from "@mui/styles";
import {  useNavigate } from "react-router-dom";
import Header from "./Header";
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import {
  Button,
  TextField,
  Box,
  Container,
  Typography,
} from "@mui/material";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  button: {
    margin : theme.spacing(2),
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeinOut,
  }),
  '&:hover': {
    transform: 'scale(1.1)'
  }
  },
  icon: {
    margin : theme.spacing(10),
  },
  allIcons: {
    margin: theme.spacing(2),
    color : 'red'
  }
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const marks = [
  {
    value: 900,
    label: '$900',
  },
  {
    value: 1100,
    label: '$1100',
  },
  {
    value: 1500,
    label: '$1500',
  },
  {
    value: 3000,
    label: '$3000',
  },
];

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
function valuetext(value) {
  return `${value}`;
}

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    navigate('/cars')
  };



  return (<>
    <Header />
    <Box className={classes.center}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant='h4'  color="primary">Add Secondary Details</Typography>
          <TextField
            type="date"
            fullWidth
            margin="normal"

            InputLabelProps={{
              style: {
                color: "red",
              },
            }}
            inputProps={{
              style: {
                border: "1px solid grey",
                color: "red",
              },
            }}
          />
      <FormLabel id="demo-row-radio-buttons-group-label" sx={{color : 'red' , padding:'10px'}}>Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
          <Box sx={{ width: 300 }}>
          <FormLabel sx={{color : 'red' ,  padding:'10px'}}>Price Range</FormLabel>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={valuetext}
              step={10}
        valueLabelDisplay="auto"
              marks={marks}
      />
    </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
            Check
          </Button> <hr />
          <Button onClick={()=> navigate('/')}  className={classes.icon}>
          <Fab variant="extended" color="primary">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate to Home
      </Fab>
          </Button>
        </form>
      </Container>
    </Box>
    </>
  );
};

export default LoginPage;
