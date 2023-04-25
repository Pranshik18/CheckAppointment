import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  TextField,
  FormControl,
  Box,
  Container,
  Typography,
} from "@mui/material";

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
  }
}));

const LoginPage = () => {
  const [date, setDate] = React.useState('');
  const [patientName, setPatientName] = React.useState('');
  const [appointmentDate, setAppointmentDate] = React.useState('');
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box className={classes.center}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'  color="primary">Check Appointment</Typography>
          <TextField
            label="Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Patient Name"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Problem"
            fullWidth
            margin="normal"
          />
          <FormControl className={classes.formControl} fullWidth margin="normal">
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
            Check
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
