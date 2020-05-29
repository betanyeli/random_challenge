
import React from "react";
import {Avatar,  Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./UseStyles";



export default function Home() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Random ... 
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              disabled={true}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Only Google Sign In Is Supported"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              disabled={true}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Only Google Sign In Is Supported"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

