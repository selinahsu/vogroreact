import React from 'react';
import '../index.css';

import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

function ContactUs() {
  const classes = useStyles();
  return (
    <div className="ContactUs">
      <div className={classes.heroContent}>
				<Container>
					<Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
					ContactUs
					</Typography>
				</Container>
      </div>
    </div>
  );
}

export default ContactUs;
