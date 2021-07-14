import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { createTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
  },
}));

export default function ColorTextFields() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
    >
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
        id="outlined-secondary"
        label="Email address"
        variant="outlined"
        color="secondary"
        margin="normal"
        fullWidth
        required
      />
      </div>
      <TextField
        id="outline-secondary"
        label="Password"
        variant="outlined"
        color="secondary"
        margin="normal"
        fullWidth
        required
      />
    </form>
    </Grid>
  );
}