import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Grid, CssBaseline, Typography, Card, CardContent, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from '../shared/Navbar/Navbar';
import './ViewJob.css';

const ViewJob = () => {
    const { id } = useParams();
    const [singleJob, setSingleJob] = useState([]);

    useEffect(() => {
        toast.warn('There was no api for the single job post. So, thats why I did write these code for single job', {
            theme: "dark",
            position: toast.POSITION.TOP_LEFT,
            autoClose: 5000
        });
    }, [])

    /* there was no api for the single job post, so that's why I did write these code for single job.
    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken') || null;
        if(jwtToken !== null){
            axios.get(`https://tf-practical.herokuapp.com/api/job_post/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(res => {
            if(res){
                console.log(res);
                setSingleJob(res.data);
            }
            });
        }
      }, [id]); */

    return (
        <>
            <Navbar />
            <div style={{ backgroundColor: "#EFF3F6" }}>
                <CssBaseline />
                <Container className="view-post" maxWidth="lg">
                    <Card>
                        <CardContent>
                            <Box className="vJob-info">
                                <Typography variant="span">Job title</Typography>
                                <Typography variant="span" sx={{ paddingLeft: "30px" }}>Back-end developer</Typography>
                            </Box>
                            <Box className="vJob-info">
                                <Grid container rowSpacing={1} className="" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant="p" component="p">Shift</Typography>
                                        <Typography variant="p" component="p" sx={{ fontWeight: "500", fontSize: "13px !important" }} >Day</Typography>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant="p" component="p">Department</Typography>
                                        <Typography variant="p" component="p" sx={{ fontWeight: "500", fontSize: "13px !important" }} >Development</Typography>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant="p" component="p">Level</Typography>
                                        <Typography variant="p" component="p" sx={{ fontWeight: "500", fontSize: "13px !important" }} >Senior</Typography>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant="p" component="p">Vacancy</Typography>
                                        <Typography variant="p" component="p" sx={{ fontWeight: "500", fontSize: "13px !important" }} >2</Typography>
                                    </Grid>
                                    <Grid item xs={4} lg={2}>
                                        <Typography variant="p" component="p">Salary</Typography>
                                        <Typography variant="p" component="p" sx={{ fontWeight: "500", fontSize: "13px !important" }} >20k</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="vJob-info">
                                <Typography variant="p" component="p">Description</Typography>
                                <Typography variant="p" component="p">
                                    As a backend developer, you will be expected to be actively involved in product development and establishing infrastructure. You will also have to coordinate with different teams across the organization. You are expected to be an early adopter of new technologies and find ways to integrate them into the tasks asked to perform.
                                </Typography>
                            </Box>
                            <Box className="filter-questions">
                                <Typography variant="p" component="p">Filter Question</Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            Lorem Ipsum is simply dummy text of the printing and  typesetting industry?
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Lorem Ipsum is simply dummy text of the printing and  typesetting industry?
                                        </ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Lorem Ipsum is simply dummy text of the printing and  typesetting industry?
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </div>
            {
                <ToastContainer />
            }
        </>
    );
};

export default ViewJob;