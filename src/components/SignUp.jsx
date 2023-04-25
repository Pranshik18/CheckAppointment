import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {
  Box,
  Container,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createStyles,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
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

const AddAppointment = () => {
  const classes = useStyles();
  const [date, setDate] = useState('');
  const [patientName, setPatientName] = useState('');
  const [problem, setProblem] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const navigate = useNavigate('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handlePatientNameChange = (event) => {
    setPatientName(event.target.value);
  };

  const handleProblemChange = (event) => {
    setProblem(event.target.value);
  };

  const handleAppointmentDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/appointment')
    // handle form submission here
  };

  return (
    <Box className={classes.center}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <Typography variant='h3'  color="primary">Add Appointment</Typography>
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={handleDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Patient Name"
            value={patientName}
            onChange={handlePatientNameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Problem"
            value={problem}
            onChange={handleProblemChange}
            fullWidth
            margin="normal"
          />
          <FormControl className={classes.formControl} fullWidth margin="normal">
            <InputLabel id="appointment-date-label">Select Appointment Date</InputLabel>
            <Select
              labelId="appointment-date-label"
              value={appointmentDate}
              onChange={handleAppointmentDateChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'2023-05-01'}>May 1, 2023</MenuItem>
              <MenuItem value={'2023-05-02'}>May 2, 2023</MenuItem>
              <MenuItem value={'2023-05-03'}>May 3, 2023</MenuItem>
              <MenuItem value={'2023-05-01'}>May 4, 2023</MenuItem>
              <MenuItem value={'2023-05-02'}>May 5, 2023</MenuItem>
              <MenuItem value={'2023-05-03'}>May 6, 2023</MenuItem>
              <MenuItem value={'2023-05-01'}>May 7, 2023</MenuItem>
              <MenuItem value={'2023-05-02'}>May 8, 2023</MenuItem>
              <MenuItem value={'2023-05-03'}>May 9, 2023</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
            Add Appointment
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default AddAppointment;
