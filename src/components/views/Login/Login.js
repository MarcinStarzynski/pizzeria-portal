import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Login = () => (
  <Paper className={styles.component}>
    <TextField id="standard-basic" label="Login" />
    <TextField id="standard-basic" label="Password" />
    <Button component={Link} to="/panel">
      Login
    </Button>
  </Paper>
);

export default Login;
