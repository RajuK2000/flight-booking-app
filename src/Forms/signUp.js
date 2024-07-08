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
// import { blue } from '@mui/material/colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBase/fireBase-Conflicts';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme();

export default function SignUp() {

  const [user,setUser]=React.useState({
    email:null,
    password:null,
  })
  const navigate=useNavigate()

 const onchangeHandler=(e)=>{
  const {name,value}=e.target
  setUser({...user,[name]:value})
 }

 const handlesSignIn=()=>{
  navigate("/signIn")
 }

  const handleSubmit = (event) => {
    event.preventDefault();
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    localStorage.setItem("token",user.accessToken)
    localStorage.setItem("user",JSON.stringify(user))
    
    console.log(user)
    navigate("/signIn")
    alert("signUp succesfully!")
  })
  .catch((error) => {
     console.log(error) 
     alert(error)   

  });
  };

  return (
    
    <ThemeProvider theme={defaultTheme} >
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  autoComplete="email"
                  onChange={onchangeHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={user.password}
                  id="password"
                  autoComplete="new-password"
                  onChange={onchangeHandler}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container >
              <Grid item >
                <Link variant="body2">
                  {<p style={{fontSize:"16px",cursor:"pointer"}} onClick={handlesSignIn}>Already have an account?</p> }
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>

  );
}
