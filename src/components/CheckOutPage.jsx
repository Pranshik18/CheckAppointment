import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
    Paper,
  Modal,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { Box } from '@mui/system';
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 600,
  },
  formControl: {
    margin: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CheckoutPage = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Header />
    <Paper className={classes.paper}>
      <Typography variant="h4" align="center" gutterBottom>
        Checkout
      </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField required id="firstName" label="First name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="lastName" label="Last name" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              label="Address line 1"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="address2" label="Address line 2" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="city" label="City" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="zip" label="Zip / Postal code" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required id="country" label="Country" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Shipping method</FormLabel>
              <RadioGroup aria-label="shipping" name="shipping">
                <FormControlLabel
                  value="standard"
                  control={<Radio />}
                  label="Standard shipping (Free)"
                />
                <FormControlLabel
                  value="express"
                  control={<Radio />}
                  label="Express shipping ($9.99)"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Payment method</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="creditCard" />}
                  label="Credit card"
                />
                <FormControlLabel
                  control={<Checkbox name="paypal" />}
                  label="PayPal"
                              />
                              <FormControlLabel
                  control={<Checkbox name="Debit Card" />}
                  label="Debit card"
                              />
                              <FormControlLabel
                  control={<Checkbox name="Net Banking" />}
                  label="Net Banking"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.submit}
                        type="submit"
                        onClick={handleOpen}
          fullWidth
        >
          Place order
                    </Button>
                    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
            Add Your confirmation to buy
          </Typography>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {localStorage.getItem("name") +" "+ localStorage.getItem("model")}
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
            {localStorage.getItem("type")}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='h5'>
           Price : ${localStorage.getItem("price")}
                        </Typography>
                        <Button className=''>Buy</Button>
                        <Button className='' onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
            </Paper>
            </Box>
  );
};

export default CheckoutPage;

