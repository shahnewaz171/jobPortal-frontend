import React, { useState } from 'react';
import axios from 'axios';
import { Grid, CssBaseline, Typography, Card, CardContent, List, ListItem, ListItemText, Button, Select, MenuItem, TextareaAutosize, ListItemIcon, Checkbox, Box, Container, TextField } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import Navbar from '../shared/Navbar/Navbar';
import { Div } from '../shared/custom-styles';
import '../ViewJob/ViewJob.css';
import { useParams } from 'react-router-dom';

const EditJob = () => {
    const [checked, setChecked] = useState([0]);
    const { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({
        mode: "all",
        reValidateMode: 'onChange'
    });

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const  onSubmit = (data) => {
        console.log(data);
        const jwtToken = localStorage.getItem('jwtToken') || null;
        if(jwtToken !== null){
            axios.patch(`https://tf-practical.herokuapp.com/api/job_update/${id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <>
        <Navbar />
            <div className="bg-color" >
                <CssBaseline />
                <Container className="editJob view-post filterInput" maxWidth="lg">
                    <Card>
                        <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
                            <Box className="vJob-info vJob-title">
                                <Div>
                                    <Typography variant="span">Job title</Typography>
                                    <Typography variant="span" sx={{ paddingLeft: "30px" }}>Back-end developer</Typography>
                                </Div>
                                <Div>
                                    <Button type="submit" variant="contained" className="login-btn" sx={{ backgroundColor: "#182F59", padding: "4px 30px" }} >
                                        Edit
                                    </Button>
                                </Div>
                            </Box>
                            <Box className="vJob-info">
                                <Div className="editJob-search">
                                    <Grid container rowSpacing={1} className="" columnSpacing={{ xs: 1, sm: 2, md: 10 }}>
                                        <Grid item xs={6} md={4} sx={{marginBottom: "18px"}}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Shift
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} >
                                                <MenuItem value="Morning">Morning</MenuItem>
                                                <MenuItem value="Evening">Evening</MenuItem>
                                                <MenuItem value="Night">Night</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Job Type
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }}>
                                                <MenuItem value="part_time">Part Time</MenuItem>
                                                <MenuItem value="full_time">Full Time</MenuItem>
                                                <MenuItem value="internship">Internship</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Level
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} >
                                                <MenuItem value="Junior">Junior</MenuItem>
                                                <MenuItem value="Mid">Mid</MenuItem>
                                                <MenuItem value="Senior">Senior</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Vacancy
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} >
                                                <MenuItem value="3">3</MenuItem>
                                                <MenuItem value="5">5</MenuItem>
                                                <MenuItem value="8">8</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                LastDateOfApply
                                            </Typography>
                                            <TextField type="date" fullWidth sx={{ border: "1px solid #707070" }} name="lastDateOfApply" />
                                        </Grid>
                                    </Grid>
                                    <Div className="vEdit-btn">
                                        <Button type="submit" variant="contained" className="login-btn" sx={{ backgroundColor: "#182F59", padding: "4px 30px" }} >
                                            Edit
                                        </Button>
                                    </Div>
                                </Div>
                            </Box>
                            <Box className=" eJob-info vJob-info">
                                <Div className="editJob-des">
                                    <Typography variant="p" component="p">Description</Typography>
                                    <Div>
                                        <Button type="submit" variant="contained" className="login-btn" sx={{ backgroundColor: "#182F59", padding: "4px 30px" }} >
                                            Edit
                                        </Button>
                                    </Div>
                                </Div>
                                <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Your description" defaultValue="As a backend developer, you will be expected to be actively involved in product development and establishing infrastructure. You will also have to coordinate with different teams across the organization. You are expected to be an early adopter of new technologies and find ways to integrate them into the tasks asked to perform. " style={{ width: "100%", padding: "10px" }} />
                            </Box>
                            <Box className="filter-questions">
                                <Typography variant="p" component="p">Filter Question</Typography>
                                <List>
                                    {[0, 1, 2, 3].map((value) => {
                                        const labelId = `checkbox-list-label-${value}`;
                                        return (
                                            <ListItem key={value} >
                                                <ListItemText primary={`${value + 1}.  Lorem Ipsum is simply dummy text of the printing and  typesetting industry?`} />
                                                <ListItemIcon onClick={handleToggle(value)} sx={{ color: "#000" }} >
                                                    <Checkbox
                                                        edge="start"
                                                        checked={checked.indexOf(value) !== -1}
                                                        tabIndex={-1}
                                                        disableRipple
                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                    />
                                                </ListItemIcon>
                                            </ListItem>
                                        );
                                    })};
                                </List>
                            </Box>
                            <Box>
                                <Div sx={{ textAlign: "center" }}>
                                    <Button type="submit" variant="contained" className="login-btn" sx={{ backgroundColor: "#182F59", padding: "0.5rem 5rem", marginTop: "1rem" }} >
                                        Save
                                    </Button>
                                </Div>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </>
    );
};

export default EditJob;