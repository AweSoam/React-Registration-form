import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import FormGroup from '@mui/material/FormGroup';
import DatePicker from '@mui/lab/DatePicker';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import backgroundImage from './assets/bg.jpg'
import './App.css'


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [open, setOpen] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNo: data.get('phoneNo'),
      gender: data.get('gender'),
      country: data.get('country'),
      age: data.get('age'),
      receiveEmails: data.get('receiveEmails'),
      skills: Array.from(data.getAll('skills')), 
      experince:data.get('experince'),
      dateOfBirth: data.get('dateOfBirth'), 
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme} >
    
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px', padding: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
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
            Registration Form
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
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNo"
                  label="Mobile Number"
                  type="password"
                  id="PhoneNo"
                  autoComplete="phoneNo"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    labelId="country-label"
                    id="country"
                    name="country"
                  >
                    <MenuItem value="INDIA">INDIA</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="JAPAN">JAPAN</MenuItem>
                    <MenuItem value="SRILANKA">SRILANKA</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>

                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Typography id="age-slider" gutterBottom>
                  Age
                </Typography>
                <Slider
                  name="age"
                  aria-labelledby="age-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={18}
                  max={100}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Skills</FormLabel>
                  <FormGroup row>
                    <FormControlLabel control={<Checkbox name="skills" value="cPlusPlus" />} label="C++" />
                    <FormControlLabel control={<Checkbox name="skills" value="java" />} label="Java" />
                    <FormControlLabel control={<Checkbox name="skills" value="react" />} label="React" />
                    <FormControlLabel control={<Checkbox name="skills" value="nodejs" />} label="NodeJS" />
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender" defaultValue="" row> {/* Add row prop here */}
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField multiline
                  fullWidth
                  id="experince"
                  name="experince" 
                  label="Experince"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Date of Birth"
                  id="dateOFBirth"
                  name="dateOFBirth"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox name="receiveEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submission Successful</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Your form has been submitted successfully!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
