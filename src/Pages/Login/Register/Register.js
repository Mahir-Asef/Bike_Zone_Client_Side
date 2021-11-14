import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink,useHistory } from "react-router-dom";
import useAuth from './../../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


const Register = () => {
   const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
        if(loginData.password!==loginData.password2){
            alert(' password  not match! correct it');
            e.preventDefault();
            return
        }
      registerUser( loginData.email, loginData.password, loginData.name, history );
      e.preventDefault();
    };

    return (
        <Container className="text-center">
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Register
            {!isLoading && <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                label="Your name"
                name="name"
                type="text"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                label="Your email"
                name="email"
                type="email"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                label="Your password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "50%", m: 1 }}
                id="standard-basic"
                label="Retype your password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <Button
                sx={{ width: "50%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <br />
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success">User created successfully!</Alert>}
            {authError &&  <Alert severity="error">{authError}</Alert>}
          </Typography>
        </Grid>
       
      </Grid>
    </Container>
    );
};

export default Register;