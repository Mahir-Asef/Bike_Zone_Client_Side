import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, signInWithGoogle, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    // alert("hello");
    loginUser(loginData.email, loginData.password, history, location );
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(history, location);
  };

const Login = () => {
    signInWithGoogle(history, location);
  };

  return (
    <Container className="text-center">
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8 }} item xs={12} md={12}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "50%", m: 1 }}
              id="standard-basic"
              label="Your email"
              name="email"
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
            <Button
              sx={{ width: "50%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <br/>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && 
              <Alert severity="success">Login successfully!</Alert>
            }
            {authError && <Alert severity="error">{authError}</Alert>}
          </form>
          <p>Google Sign In</p>
          <Button onClick={handleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;