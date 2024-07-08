
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Container, ThemeProvider, createTheme } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBase/fireBase-Conflicts';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { createContext } from 'react';


// TODO remove, this demo shouldn't need to reset the theme.

const DefaultTheme = createTheme();

// export const Defaultprovider = createContext()

export default function SignIn() {

  const [user,setUser]=useState({
    email:null,
    password:null,
  })
  const navigate = useNavigate()

  const onchangeHandler=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
   }

   const signInnavigate=()=>{
    navigate("/signUp")
   }


  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("user login sucessfully")
    localStorage.setItem("token",user.accessToken)
    localStorage.setItem("user",JSON.stringify(user))
    navigate("/")
  })
  .catch((error) => {
    alert(error.message)
  });
  };

  return (
    // <Defaultprovider.Provider value={{user}}>
    <ThemeProvider theme={DefaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={user.email}
              autoFocus
              onChange={onchangeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={user.password}
              autoComplete="current-password"
              onChange={onchangeHandler}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item >
                <Link variant="body2" to="/signUp">
                  {<p style={{fontSize:"16px",cursor:"pointer"}} onClick={signInnavigate}>Don't have an account? Sign Up</p>}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    //  </Defaultprovider.Provider>
  );
}