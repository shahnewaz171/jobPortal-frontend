import React, { useState } from 'react';
import { Grid, CssBaseline, Typography, Card, CardContent, List, ListItem, ListItemText, Button, Select, MenuItem, TextareaAutosize, ListItemIcon, Checkbox, Box, Container } from '@mui/material';
import Navbar from '../shared/Navbar/Navbar';
import { Div } from '../shared/custom-styles';
import '../ViewJob/ViewJob.css';

const EditJob = () => {
    const [checked, setChecked] = useState([0]);
    const [shift, seShift] = useState('');
    const [department, setDepartment] = useState('');
    const [level, setLevel] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [salary, setSalary] = useState('');

    const handleShift = (e) => {
        seShift(e.target.value);
    };
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    };
    const handleLevel = (e) => {
        setLevel(e.target.value);
    };
    const handleVacancy = (e) => {
        setVacancy(e.target.value);
    };
    const handleSalary = (e) => {
        setSalary(e.target.value);
    };

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

    return (
        <>
        <Navbar />
            <div style={{ backgroundColor: "#EFF3F6" }}>
                <CssBaseline />
                <Container className="editJob view-post filterInput" maxWidth="lg">
                    <Card>
                        <CardContent>
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
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Shift
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={shift} onChange={handleShift} >
                                                <MenuItem value="Morning">Morning</MenuItem>
                                                <MenuItem value="Evening">Evening</MenuItem>
                                                <MenuItem value="Night">Night</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Department
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={department} onChange={handleDepartment} >
                                                <MenuItem value="IT">IT</MenuItem>
                                                <MenuItem value="Non IT">Non IT</MenuItem>
                                                <MenuItem value="General">General</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Level
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={level} onChange={handleLevel} >
                                                <MenuItem value="Junior">Junior</MenuItem>
                                                <MenuItem value="Mid">Mid</MenuItem>
                                                <MenuItem value="Senior">Senior</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Vacancy
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={vacancy} onChange={handleVacancy} >
                                                <MenuItem value="3">3</MenuItem>
                                                <MenuItem value="5">5</MenuItem>
                                                <MenuItem value="8">8</MenuItem>
                                            </Select>
                                        </Grid>
                                        <Grid item xs={6} md={4}>
                                            <Typography variant="p" component="div" className="searchItem-title" >
                                                Salary
                                            </Typography>
                                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={salary} onChange={handleSalary} >
                                                <MenuItem value="20k">20k</MenuItem>
                                                <MenuItem value="30k">30k</MenuItem>
                                                <MenuItem value="40k">40k</MenuItem>
                                            </Select>
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