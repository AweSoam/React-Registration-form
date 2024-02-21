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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Paper from '@mui/material/Paper'; 
import validate from './Validate'; 
import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({}); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

  
    const formErrors = validate({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNo: data.get('phoneNo'),
      gender: data.get('gender'),
      country: data.get('country'),
      age: data.get('age'),
      receiveEmails: data.get('receiveEmails'),
      skills: Array.from(data.getAll('skills')), 
      experince: data.get('experince'),
      dateOfBirth: data.get('dateOfBirth'),
      time : data.grt('time')
    });

    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    
    console.log('Form submitted successfully:', {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phoneNo: data.get('phoneNo'),
      gender: data.get('gender'),
      country: data.get('country'),
      age: data.get('age'),
      receiveEmails: data.get('receiveEmails'),
      skills: Array.from(data.getAll('skills')), 
      experince: data.get('experince'),
      dateOfBirth: data.get('dateOfBirth'), 
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={createTheme()}>


  <div className="row">
  <div className="image-container">
    <img src="https://images.unsplash.com/photo-1543280554-642953527bf5?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" className="image" />
  </div>
  <div className="form-container">
    <Container className="container" component="main" maxWidth="xs" sx={{ backgroundColor: 'white', borderRadius: '0px 10px 10px 0px', padding: '20px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', minWidth:'650px' }}>
        <CssBaseline />
        <div >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth:'600px'
              
            }}
          >
            <Avatar sx={{ bgcolor: 'secondary.main', my: 2 , marginBottom:'15px'}}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{marginBottom:'30px'}} >
              Registration Form
            </Typography>
            <form onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="lastName"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="phoneNo"
                    required
                    fullWidth
                    id="phoneNo"
                    label="Phone Number"
                    error={!!errors.phoneNo}
                    helperText={errors.phoneNo}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      id="country"
                      name="country"
                      label="Country"
                      error={!!errors.country}
                    >
                      <MenuItem value="INDIA">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="JAPAN">Japan</MenuItem>
                      <MenuItem value="SRILANKA">Sri Lanka</MenuItem>
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
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      name="gender"
                      defaultValue=""
                      row
                    >
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
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
                  <TextField
                    multiline
                    fullWidth
                    id="experince"
                    name="experince"
                    label="Experience"
                    autoComplete="off"
                    error={!!errors.experince}
                    helperText={errors.experince}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Date of Birth"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          fullWidth
                          error={!!errors.dateOfBirth}
                          helperText={errors.dateOfBirth}
                        />
                      </LocalizationProvider>
                </Grid>
                <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                          label="Current Time"
                          id="time"
                          name="time"
                          fullWidth
                          error={!!errors.time}
                          helperText={errors.time}
                        />
                      </LocalizationProvider>
                  
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
            </form>
          </Box>
        </div>
      </Container>
  </div>
 
  </div>
      
  

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Registration Successful</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Your registration was successful!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default App;
