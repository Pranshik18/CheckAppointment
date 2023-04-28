import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  label: {
    marginRight: theme.spacing(2),
    width: 200,
  },
  button: {
    minWidth: 0,
    margin: theme.spacing(0.5),
    },
    head: {
        margin: theme.spacing(4),
        fontWeight : '800'
  }
}));
export const FeedbackForm = () => {
    const classes = useStyles();
    const [car, setCar] = useState({
        carModel: '',
        howMuchLike: 0,
        fuelEfficiency: 0,
        comfort: 0,
        safety: 0,
        performance: 0,
        exteriorDesign: 0,
    });
  
    const handleChange = (field, value) => {
        setCar({ ...car, [field]: value });
    };
  
    return (
        <div className={classes.root}>
            <Header />
            <Typography variant="h4" color="primary" className={classes.head}>
            Provide your Valuable Feedback
          </Typography>
            <div className={classes.field}>
            <TextField
            label="Car Model"
            type='text'
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
            </div>
            <div className={classes.field}>
                <label htmlFor="howMuchLike" className={classes.label}>
                    How much do you like this car?
                </label>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Button
                        key={value}
                        variant={car.howMuchLike === value ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleChange('howMuchLike', value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className={classes.field}>
                <label htmlFor="fuelEfficiency" className={classes.label}>
                    Fuel Efficiency:
                </label>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Button
                        key={value}
                        variant={car.fuelEfficiency === value ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleChange('fuelEfficiency', value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className={classes.field}>
                <label htmlFor="comfort" className={classes.label}>
                    Comfort:
                </label>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Button
                        key={value}
                        variant={car.comfort === value ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleChange('comfort', value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className={classes.field}>
                <label htmlFor="safety" className={classes.label}>
                    Safety:
                </label>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Button
                        key={value}
                        variant={car.safety === value ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleChange('safety', value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
            <div className={classes.field}>
                <label htmlFor="performance" className={classes.label}>
                    Performance:
                </label>
                {[0, 1, 2, 3, 4, 5].map((value) => (
                    <Button
                        key={value}
                        variant={car.performance === value ? 'contained' : 'outlined'}
                        color="primary"
                        className={classes.button}
                        onClick={() => handleChange('performance', value)}
                    >
                        {value}
                    </Button>
                ))}
            </div>
        </div>
    )
}