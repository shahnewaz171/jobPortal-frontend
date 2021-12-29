import React from 'react';
import { Grid, CssBaseline, Typography, Card, CardContent, List, ListItem, ListItemText, Box, Container } from '@mui/material';
import Navbar from '../shared/Navbar/Navbar';
import './ViewJob.css';

const ViewJob = () => {

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
        </>
    );
};

export default ViewJob;