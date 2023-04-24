import React, { useState } from "react";
import {
  Button,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useTheme } from '@mui/material/styles';

const LoginPage = () => {
  const [date, setDate] = React.useState('');
  const [patientName, setPatientName] = React.useState('');
  const [appointmentDate, setAppointmentDate] = React.useState('');
  const currentTheme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <ThemeProvider theme={currentTheme}>
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Check Appointment</Typography>
        <br />
        <TextField
          required
          id="date"
          label="Date"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        /> <br />
        <TextField
          required
          id="patientName"
          label="Patient Name"
          type="text"
          value={patientName}
          onChange={(event) => setPatientName(event.target.value)}
          sx={{ mb: 2 }}
        /> <br />
        <TextField
          required
          id="appointmentDate"
          label="Appointment Date"
          type="date"
          value={appointmentDate}
          onChange={(event) => setAppointmentDate(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        /> <br />
        <Button variant="contained" type="submit">
          Check Appointment
        </Button>
      </form>
    </div>
    </ThemeProvider>
  );
};

export default LoginPage;
