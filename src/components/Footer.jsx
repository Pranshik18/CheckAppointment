import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(1),
  },
  iconButton: {
    margin: theme.spacing(0, 1),
    color: theme.palette.grey[700],
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant="h6" align="center">
        Connect with us:
      </Typography>
      <div className={classes.socialIcons}>
        <IconButton className={classes.iconButton} aria-label="Facebook">
          <Link href="https://www.facebook.com/">
            <FacebookIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton className={classes.iconButton} aria-label="Twitter">
          <Link href="https://www.twitter.com/">
            <TwitterIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton className={classes.iconButton} aria-label="Instagram">
          <Link href="https://www.instagram.com/">
            <InstagramIcon fontSize="large" />
          </Link>
        </IconButton>
      </div>
      <Typography variant="body2" color="primary" align="center">
        © {new Date().getFullYear()} Car Company. All rights reserved.
      </Typography>
    </footer>
  );
}

export default Footer;
