import React, { useState } from 'react'
import {
    Box,
    Container,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
  } from "@mui/material";
import { useNavigate } from 'react-router-dom';
  import { makeStyles } from "@mui/styles";
import Header from './Header';
import Footer from './Footer';

  const useStyles = makeStyles((theme) => ({
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
      color: "red",
    },
    button: {
      transition: theme.transitions.create(["transform"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeinOut,
      }),
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    logo_button: {
      width: "5%",
      transition: theme.transitions.create(["transform"], {
        duration: theme.transitions.duration.standard,
        easing: theme.transitions.easing.easeinOut,
      }),
      "&:hover": {
        transform: "scale(1.4)",
      }
    },
    heading: {
      paddingLeft: theme.spacing(6),
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
      marginBottom:"20px"
    },
    InputLabel: {
      marginTop : theme.spacing(2),
      marginBottom: theme.spacing(2),
      color : 'red'
    },
    select: {
      marginBottom : theme.spacing(2)
    }
  }));

export default function Details() {
    const classes = useStyles();
  const [date, setDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [problem, setProblem] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const navigate = useNavigate();
    
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
        navigate("/appointment");
        // handle form submission here
      };
  return (
      <Box>
          <Header />
          <Container maxWidth="sm">
          <form>
          <Typography variant="h5" color="primary" >
            Add Primary Details
          </Typography>
          <TextField
            label="Your Name"
            value={patientName}
            onChange={handlePatientNameChange}
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
            label="Phone Number"
            type='number'
            value={problem}
            onChange={handleProblemChange}
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
            <InputLabel id="appointment-date-label" 
            className={classes.InputLabel} sx={{color : 'red'}}>
              Interested Brands
            </InputLabel>
            <Select
              labelId="appointment-date-label"
              value={appointmentDate}
            onChange={handleAppointmentDateChange}
            className={classes.select}
            fullWidth
            sx={{border : '1px solid grey' , color : 'red'}}
            >
              <MenuItem value="" sx={{color: 'red'}}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={"2023-05-01"}>BMW</MenuItem>
              <MenuItem value={"2023-05-02"}>Volvo</MenuItem>
              <MenuItem value={"2023-05-03"}>Mercedes-Benz</MenuItem>
              <MenuItem value={"2023-05-04"}>Audi</MenuItem>
              <MenuItem value={"2023-05-05"}>Porsche</MenuItem>
              <MenuItem value={"2023-05-06"}>Land Rover</MenuItem>
              <MenuItem value={"2023-05-07"}>Ferrari</MenuItem>
              <MenuItem value={"2023-05-08"}>Lamborghini</MenuItem>
              <MenuItem value={"2023-05-09"}>Lexus</MenuItem>
            </Select>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={()=> navigate('/appointment')}
          >
            Add Appointment
          </Button> <hr />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={classes.button}
            onClick={()=> navigate('/cars')}
          >
            Check All Cars
          </Button>
              </form>
              </Container>
      </Box>
  )
}
