import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    borderRadius: '0.5rem',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
  },
  field: {
    margin: '1rem 0',
    width: '100%',
  },
  label: {
    display: 'block',
    marginBottom: '.5rem',
  },
  button: {
    margin: '0 .5rem',
  },
}));

export default function ContactUs() {
    const classes = useStyles();
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        carModel: '',
        inquiryType: '',
    });

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // You can add your logic to submit the form data here
    };

    return (<>
        <Header />
        <div className={classes.root}>
            
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <div className={classes.field}>
                    <TextField
                        id="name"
                        label="Name"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        id="email"
                        label="Email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        id="phone"
                        label="Phone"
                        required
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        variant="outlined"
                    />
                </div>
                <div className={classes.field}>
                    <FormControl variant="outlined" className={classes.field}>
                        <InputLabel id="car-model-label">Car Model</InputLabel>
                        <Select
                            labelId="car-model-label"
                            id="car-model"
                            value={form.carModel}
                            onChange={(e) => handleChange('carModel', e.target.value)}
                            label="Car Model"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Model 1">Model 1</MenuItem>
                            <MenuItem value="Model 2">Model 2</MenuItem>
                            <MenuItem value="Model 3">Model 3</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.field}>
                    <FormControl variant="outlined" className={classes.field}>
                        <InputLabel id="inquiry-type-label">Inquiry Type</InputLabel>
                        <Select
                            labelId="inquiry-type-label"
                            id="inquiry-type"
                            value={form.inquiryType}
                            onChange={(e) => handleChange('inquiryType', e.target.value)}
                            label="Inquiry Type"
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value="Sales">Sales</MenuItem>
                            <MenuItem value="Service">Service</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.field}>
                    <TextField
                        id="message"
                        label="Message"
                        multiline
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        variant="outlined"
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
        </>
    )
}