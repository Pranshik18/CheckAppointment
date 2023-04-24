import React, { useState } from "react";
import { TextField, Button, Grid, Typography, MenuItem, Select, InputLabel, FormControl , ThemeProvider } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


const SignupPage = () => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [problem, setProblem] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const navigate = useNavigate('');
  const muiTheme = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/appointment')
    // Handle form submit logic here
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Add Appointment
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="date"
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                label="Patient Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="problem"
                label="Problem"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="appointment-date-label">Appointment Date</InputLabel>
                <Select
                  labelId="appointment-date-label"
                  id="appointment-date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                >
                  <MenuItem value="monday">Monday</MenuItem>
                  <MenuItem value="tuesday">Tuesday</MenuItem>
                  <MenuItem value="wednesday">Wednesday</MenuItem>
                  <MenuItem value="thursday">Thursday</MenuItem>
                  <MenuItem value="friday">Friday</MenuItem>
                  <MenuItem value="saturday">Saturday</MenuItem>
                  <MenuItem value="sunday">Sunday</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" type="submit" sx={{m:4}}>
            Add
          </Button>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default SignupPage;
