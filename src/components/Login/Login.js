import React from 'react';
import { Button,CssBaseline,TextField, Paper, Box, Grid, Typography } from '@mui/material';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { Tab, TabsList,TabPanel } from '../shared/custom-styles';
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
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <ThemeProvider theme={theme} >
                <Grid container component="main" justifyContent="center"  alignItems="center" style={{ minHeight: '100vh' }} >
                    <CssBaseline />
                    <Grid item xs={12} sm={11} md={6} lg={5} component={Paper} elevation={6} square >
                        <TabsUnstyled defaultValue={0} style={{background: "#eff3f6"}} >
                            <TabsList>
                                <Tab>Sign in</Tab>
                                <Tab>Sign up</Tab>
                            </TabsList>
                            <TabPanel value={0}>
                                <Box sx={{ py: 8, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography component="h1" variant="h5" sx={{textTransform: 'uppercase', fontWeight: "500"}} >
                                        Sign in
                                    </Typography>
                                    <Typography component="p"sx={{color: "#646464", fontSize: "14px"}} >
                                        Login To Get A Job
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="off" autoFocus InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required fullWidth name="password" label="Password"type="password" id="password" 
                                        inputProps={{autoComplete: 'new-password', form: {autoComplete: 'off'}}} InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <Box sx={{textAlign: 'center'}} >
                                            <Button type="submit" variant="contained" className="login-btn" sx={{ mt: 3, mb: 2, backgroundColor: "#19305a", fontWeight: "400"}} >
                                                Sign In
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={1}>
                                <Box sx={{ pt: 3, pb: 2, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography component="h1" variant="h5" sx={{textTransform: 'uppercase', fontWeight: "500"}} >
                                        Sign up
                                    </Typography>
                                    <Typography component="p"sx={{color: "#646464", fontSize: "14px"}} >
                                        Register To Get A Job
                                    </Typography>
                                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                        <TextField margin="normal" required id="name" label="Full Name" type="name" name="name" autoComplete="off" autoFocus sx={{marginRight: "20px"}} InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required id="number" label="Phone Number" type="number" name="number" autoComplete="off" InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required id="birthDate" label="Date Of Birth" type="date" name="birthDate" defaultValue={currentDate} sx={{marginRight: "20px"}} InputLabelProps={{shrink: true, style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required id="gender" label="Gender" type="text" name="gender" autoComplete="off"  InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required fullWidth id="email" label="Email" type="email" name="email" autoComplete="off" InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required name="password" label="Password ddddd" type="password" id="password" sx={{marginRight: "20px"}} inputProps={{autoComplete: 'new-password', form: {autoComplete: 'off'}}} InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <TextField margin="normal" required name="confirm_pass" label="Confirm Password" type="password" id="confirm_pass" inputProps={{autoComplete: 'new-password', form: {autoComplete: 'off'}}} InputLabelProps={{style: {fontSize: "14px"}}} />
                                        <Box sx={{textAlign: 'center'}} >
                                            <Button type="submit" variant="contained" className="login-btn" sx={{ mt: 3, mb: 2, backgroundColor: "#19305a", fontWeight: "400"}} >
                                                Sign Up
                                            </Button>
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
                            <Typography component="p"sx={{fontStyle: "italic", lineHeight: "0.6", color: "#646464", fontSize: "14px"}} >
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
                            <Typography component="p"sx={{color: "#646464", fontSize: "14px"}} >
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