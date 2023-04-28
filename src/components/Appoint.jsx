import React from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';
import Fab from '@mui/material/Fab';
import {
  Button,
  TextField,
  FormControl,
  FormLabel,
  Box,
  Container,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(4),
    minWidth: 120,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  button: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeinOut,
  }),
  '&:hover': {
    transform: 'scale(1.1)'
  }
  },
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


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Appoint = () => {
    const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
      navigate('/doctor')
  };



    return (<>
      <Header />
    <Box className={classes.center}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'  color="primary">Sell Your Car</Typography>
          
          <TextField
            label="Customer Name"
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
          <TextField
              label="Registered Id"
              type='number'
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
      <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
            ></Box>
             <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
          >
             <FormLabel sx={{color : 'red' ,  padding:'10px'}}>Car Condition</FormLabel>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )} </Box>
          <FormControl className={classes.formControl} fullWidth margin="normal">
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
            Sell
            </Button>
        </form>
      </Container>
      </Box>
      </>
  );
};

export default Appoint;
