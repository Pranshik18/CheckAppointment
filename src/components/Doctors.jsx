import React from "react";
import { makeStyles } from "@mui/styles";
import Header from "./Header";
import {
  Button,
  TextField,
  FormControl,
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

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
    color : 'red',
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeinOut,
  }),
  '&:hover': {
    transform: 'scale(1.1)'
  }
  },
}));

const Doctors = () => {
    const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  const navigate = useNavigate();

    return (<>
      <Header />
    <Box className={classes.center}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'  color="primary">Login</Typography>
          <TextField
            label="Your Name"
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
              label="Password"
              type='password'
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
          <FormControl className={classes.formControl} fullWidth margin="normal">
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button} onClick={(e)=> navigate('/checkout')}>
            Sell
            </Button>
        </form>
        </Container>
      </Box>
      </>
  );
};

export default Doctors;
