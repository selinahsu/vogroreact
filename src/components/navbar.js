import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Grid } from '@material-ui/core';

import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  appbar: {
    fontFamily: 'Quicksand',
    height: '100px',
    background: 'transparent', 
    boxShadow: 'none',
  },
  logo: {
    paddingTop: '30px',
    paddingLeft: '20px'
  },
  navlink: {
    padding: '20px',
    color: '#9e9e9e',
    textDecoration: 'none',
    "&:hover": {
      color: '#555555'
    }
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <a href="/">
              <img src={logo} alt="VoGro Logo" height="60" className={classes.logo}/>
            </a>
          </Grid>
          <Grid item>
            <nav>
              <a href="/" className={classes.navlink}>
                HOME
              </a>
              <a href="/volunteering" className={classes.navlink}>
                VOLUNTEERING
              </a>
              <a href="/elderly-and-at-risk" className={classes.navlink}>
                ELDERLY + AT RISK
              </a>
              <a href="/faq" className={classes.navlink}>
                FAQ
              </a>
              <a href="/contact-us" className={classes.navlink}>
                CONTACT US
              </a>
            </nav>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );

}

export default Navbar;