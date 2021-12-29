import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from "axios";
import { inputLabelStyle, inputDateLabelStyle, Div } from '../shared/custom-styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import logoImg from '../../images/logo.png';
import './Login.css';

const theme = createTheme();

const Login = () => {
    const [login, setLogin] = useState(true);
    const [gender, setGender] = useState("Male");
    const [disable, setDisable] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        mode: "all",
        reValidateMode: 'onChange'
    });
    const location = useLocation();
    const navigate = useNavigate();
    const password = useRef();
    password.current = watch('password');

    const handleChange = (event) => {
        setGender(event.target.value);
    };

    let { from } = location.state || { from: { pathname: "/" }};

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        
        formData.append('email', data.email);
        formData.append('password', data.password);

        if (!login && data.email && data.password) {

            formData.append('full_name', data.name);
            formData.append('birthDate', data.birth);
            formData.append('gender', gender);
            formData.append('phone_number', data.number);

            setTimeout(() => {
                axios.post('https://tf-practical.herokuapp.com/api/register/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(res => {
                        if (res) {
                            setDisable(false);
                            console.log(res);
                            toast.success("Success", {
                                theme: "dark",
                                position: toast.POSITION.TOP_LEFT,
                                autoClose: 3000
                            });
                            reset();
                            setLogin(true);
                        }
                    })
                    .catch(error => {
                        setDisable(false);
                        console.error(error);
                    });
            }, 2000);
        }
        else if(login) {
            setTimeout(() => {
                axios.post('https://tf-practical.herokuapp.com/api/login/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                    .then(res => {
                        if (res) {
                            setDisable(false);
                            console.log(res);
                            toast.success("Successfully Logged In", {
                                theme: "dark",
                                position: toast.POSITION.TOP_LEFT,
                                autoClose: 3000
                            });
                            const { access, user } = res.data;
                            window.localStorage.setItem('jwtToken', access);
                            window.localStorage.setItem('userInfo', JSON.stringify(user));
                            navigate(from, { replace: true });
                        }
                    })
                    .catch(error => {
                        setDisable(false);
                        console.error(error);
                    });
            }, 2000);
        }
        setDisable(true);
    }


    return (
        <>
            <ThemeProvider theme={theme} >
                <Grid container component="main" justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }} >
                    <CssBaseline />
                    <Grid item xs={12} sm={11} md={6} lg={5} component={Paper} elevation={6} square >
                        <Div className="login-tabs" >
                            <Div sx={{ display: "flex", flexWrap: "wrap" }}>
                                <Typography onClick={() => { reset(); setLogin(true); setGender("") }} component="p" variant="h5" className={"nav-item " + (login ? "active" : "")}>Sign in</Typography>
                                <Typography onClick={() => { reset(); setLogin(false); setGender("Male"); }} component="p" variant="h5" className={"nav-item " + (!login ? "active" : "")}>Sign Up</Typography>
                            </Div>
                            <Box sx={{ pt: 6, px: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography component="h1" variant="h5" className="fw-500 uppercase">
                                    {login ? "Sign in " : "Sign up"}
                                </Typography>
                                <Typography component="p" className="text-gray fs-14" >
                                    {login ? "Login To Get A Job " : "Register To Get A Job"}
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                                    {login ?
                                        <>
                                            <TextField margin="normal" fullWidth label="Email Address" name="email" autoComplete="off" autoFocus InputLabelProps={inputLabelStyle} {...register("email", { required: "This field is required" })} error={Boolean(errors.email)} helperText={errors.email?.message} />
                                            <TextField margin="normal" fullWidth name="password" label="Password" type="password" InputLabelProps={inputLabelStyle} {...register("password", { required: "This field is required" })} error={Boolean(errors.password)} helperText={errors.password?.message} />
                                        </>
                                        :
                                        <>
                                            <TextField margin="normal" label="Full Name" type="name" name="name" autoComplete="off" autoFocus className="mr-20" InputLabelProps={inputLabelStyle} {...register("name", { required: "This field is required" })} error={Boolean(errors.name)} helperText={errors.name?.message}
                                            />
                                            <TextField margin="normal" label="Phone Number" type="number" name="number" autoComplete="off" InputLabelProps={inputLabelStyle} {...register("number", { required: "This field is required" })} error={Boolean(errors.number)} helperText={errors.number?.message}
                                            />
                                            <TextField margin="normal" label="Date Of Birth" type="date" name="birthDate" className="mr-20" InputLabelProps={inputDateLabelStyle} {...register("birth", { required: "This field is required" })} error={Boolean(errors.birth)} helperText={errors.birth?.message}
                                            />
                                            <FormControl sx={{ width: "50%", marginTop: "16px" }} >
                                                <Select value={gender} label="Gender" name="gender" onChange={handleChange}>
                                                    <MenuItem value="Male">Male</MenuItem>
                                                    <MenuItem value="Female">Female</MenuItem>
                                                    <MenuItem value="Others">Others</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <TextField margin="normal" fullWidth label="Email" type="email" name="email" autoComplete="off" InputLabelProps={inputLabelStyle} {...register("email", { required: "This field is required" })} error={Boolean(errors.email)} helperText={errors.email?.message}
                                            />
                                            <TextField margin="normal" name="password" label="Password" type="password" className="mr-20" InputLabelProps={inputLabelStyle} {...register("password", { required: "This field is required" })} error={Boolean(errors.password)} helperText={errors.password?.message}
                                            />
                                            <TextField margin="normal" name="confirm_pass" label="Confirm Password" type="password" InputLabelProps={inputLabelStyle} {...register("confirm_pass", { required: true, validate: (value) => value === password.current })} error={Boolean(errors.confirm_pass)} helperText={errors.confirm_pass?.type === "required" ? "This field is required" : errors.confirm_pass?.type === "validate" ? "Password does not match" : ""}
                                            />
                                        </>
                                    }
                                   {login && <Box className="text-center" >
                                        <Button disabled={disable} type="submit" variant="contained" className="login-btn" >{ disable ? "Signing In...": "Sign In" }</Button>
                                    </Box>}
                                   {!login && <Box className="text-center" >
                                        <Button disabled={disable} type="submit" variant="contained" className="login-btn" >{ disable ? "Registering...": "Sign up" }</Button>
                                    </Box>}
                                </Box>
                            </Box>
                        </Div>
                    </Grid>

                    <Grid item xs={false} sm={11} md={6} lg={6} >
                        <Box
                            sx={{ my: 8, mx: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                            <img src={logoImg} className="logo" alt="logo" />
                            <Typography component="p" className="text-gray fs-14" sx={{ fontStyle: "italic", lineHeight: "0.6" }} >
                                Shaping Tomorrow's Cybersecurity
                            </Typography>
                            <Typography component="h1" variant="h4" sx={{ color: "#19305a", marginTop: "3rem", fontWeight: "500" }} >
                                Welcome to TechForing
                            </Typography>
                            <Typography component="h5" sx={{ color: "#5bbc2e", fontWeight: "500" }} >
                                Notice:
                            </Typography>
                            <Typography component="h5" sx={{ color: "#19305a", fontWeight: "500" }} >
                                An applicant can register only once.
                            </Typography>
                            <Typography component="p" className="text-gray fs-14" >
                                Registered applicant please login with your credentials by entering email and password
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            {
                <ToastContainer />
            }
        </>
    );
};

export default Login;