import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Typography, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import { StyledTableCell } from '../../shared/custom-styles';
import { ToastContainer } from 'react-toastify';
import JobList from './JobList';
import './Jobs.css';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobId, setJobId] = useState('');

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken') || null;
        if(jwtToken !== null){
            axios.get("https://tf-practical.herokuapp.com/api/job_post/", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(res => {
                if(res){
                    setJobs(res.data);
                }
            });
        }
      }, [jobId]);


    return (
        <>
            <Box sx={{ padding: "0px 40px", marginTop: "0.5rem" }}>
                <Typography variant="div" component="div" className="jobPost-title" >
                    recent job post
                </Typography>
                <TableContainer component={Paper} sx={{ marginBottom: "4rem" }} className="job-items" >
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="left">Post Name</StyledTableCell>
                                <StyledTableCell align="left">Vacancies</StyledTableCell>
                                <StyledTableCell align="center">Shift</StyledTableCell>
                                <StyledTableCell align="center" className="text-center" >Type</StyledTableCell>
                                <StyledTableCell align="left">Post Date</StyledTableCell>
                                <StyledTableCell align="left">Last Updated</StyledTableCell>
                                <StyledTableCell align="left">Level</StyledTableCell>
                                <StyledTableCell align="left">Location</StyledTableCell>
                                <StyledTableCell align="center" className="text-center">Status</StyledTableCell>
                                <StyledTableCell align="center" className="text-center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="job-list">
                            {
                                jobs && jobs.map((job) => <JobList key={job.id} job={job}  setJobId={ setJobId} /> )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            {
                <ToastContainer />
            }
        </>
    );
};

export default Jobs;