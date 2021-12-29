import React from 'react';
import { Button,CssBaseline,TextField, Paper, Box, Grid, Typography } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { Tab, TabsList,TabPanel, inputLabelStyle, inputDateLabelStyle } from '../shared/custom-styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoImg from '../../images/logo.png';
import './Login.css';

const theme = createTheme();

const Login = () => {

    const date = new Date();
    const currentDate = ( date.getMonth() + 1 ) + '/' + date.getDate() + '/' + date.getFullYear();
    console.log(currentDate);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            name: data.get('name'),
            phone: data.get('number'),
            birthDate: data.get('birthDate'),
            gender: data.get('gender'),
            email: data.get('email'),
            password: data.get('password'),
            confirm_pass: data.get('confirm_pass')
        });
    };

    return (
        <>
            <ThemeProvider theme={theme} >
                <Grid container component="main" justifyContent="center"  alignItems="center" style={{ minHeight: '100vh' }} >
                    <CssBaseline />
                    <Grid item xs={12} sm={11} md={6} lg={5} component={Paper} elevation={6} square >
                        <TabsUnstyled defaultValue={0} className="login-tabs" >
                            <TabsList>
                                <Tab>Sign in</Tab>
                                <Tab>Sign up</Tab>
                            </TabsList>
                            <TabPanel value={0}>
                                <Box sx={{ py: 8, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography component="h1" variant="h5" className="fw-500 uppercase" >Sign in</Typography>
                                    <Typography component="p" className="text-gray fs-14" >
                                        Login To Get A Job
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField margin="normal" fullWidth label="Email Address" name="email" autoComplete="off" autoFocus InputLabelProps={inputLabelStyle} />
                                        <TextField margin="normal" fullWidth name="password" label="Password"type="password" InputLabelProps={inputLabelStyle} />
                                        <Box className="text-center" >
                                            <Button type="submit" variant="contained" className="login-btn" >Sign In</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={1}>
                                <Box className="signup-form">
                                    <Typography component="h1" variant="h5" className="fw-500 uppercase">
                                        Sign up
                                    </Typography>
                                    <Typography component="p" className="text-gray fs-14" >
                                        Register To Get A Job
                                    </Typography>
                                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField margin="normal" label="Full Name" type="name" name="name" autoComplete="off" autoFocus className="mr-20" InputLabelProps={inputLabelStyle} 
                                        />
                                        <TextField margin="normal" label="Phone Number" type="number" name="number" autoComplete="off" InputLabelProps={inputLabelStyle} 
                                        />
                                        <TextField margin="normal" label="Date Of Birth" type="date" name="birthDate" defaultValue={currentDate} className="mr-20" InputLabelProps={inputDateLabelStyle} 
                                        />
                                        <TextField margin="normal"  label="Gender" type="text" name="gender" autoComplete="off"  InputLabelProps={inputLabelStyle} 
                                        />
                                        <TextField margin="normal" fullWidth label="Email" type="email" name="email" autoComplete="off" InputLabelProps={inputLabelStyle} 
                                        />
                                        <TextField margin="normal" name="password" label="Password ddddd" type="password" className="mr-20" InputLabelProps={inputLabelStyle} 
                                        />
                                        <TextField margin="normal" name="confirm_pass" label="Confirm Password" type="password" InputLabelProps={inputLabelStyle} 
                                        />
                                        <Box className="text-center" >
                                            <Button type="submit" variant="contained" className="login-btn" >Sign Up</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                        </TabsUnstyled>
                    </Grid>

                    <Grid item xs={false} sm={11} md={6} lg={6} >
                        <Box
                            sx={{my: 8, mx: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={logoImg} className="logo" alt="logo" />
                            <Typography component="p" className="text-gray fs-14" sx={{fontStyle: "italic", lineHeight: "0.6"}} >
                                Shaping Tomorrow's Cybersecurity
                            </Typography>
                            <Typography component="h1" variant="h4" sx={{color: "#19305a", marginTop: "3rem",  fontWeight: "500"}} >
                                Welcome to TechForing
                            </Typography>
                            <Typography component="h5" sx={{color: "#5bbc2e", fontWeight: "500"}} >
                                Notice:
                            </Typography>
                            <Typography component="h5" sx={{color: "#19305a", fontWeight: "500"}} >
                                An applicant can register only once.
                            </Typography>
                            <Typography component="p" className="text-gray fs-14" >
                                Registered applicant please login with your credentials by entering email and password
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
};

export default Login;