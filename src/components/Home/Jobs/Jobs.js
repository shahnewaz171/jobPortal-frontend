import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { StyledTableCell, StyledTableRow } from '../../shared/custom-styles';
import './Jobs.css';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken') || null;
        axios.get("https://tf-practical.herokuapp.com/api/job_post/", {
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then(res => {
           if(res){
               console.log(res.data);
               setJobs(res.data);
           }
        })
      }, [])

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
                                <StyledTableCell align="center" className="text-center">Total Applicant</StyledTableCell>
                                <StyledTableCell align="center" className="text-center">Vacancies</StyledTableCell>
                                <StyledTableCell align="center">Shift</StyledTableCell>
                                <StyledTableCell align="center" className="text-center" >Type</StyledTableCell>
                                <StyledTableCell align="left">Post Date</StyledTableCell>
                                <StyledTableCell align="left">Expire Date</StyledTableCell>
                                <StyledTableCell align="left">Salary</StyledTableCell>
                                <StyledTableCell align="center" className="text-center">Status</StyledTableCell>
                                <StyledTableCell align="center" className="text-center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="job-list">
                            {jobs?.map((job) => {
                                return (
                                    <StyledTableRow key={job.id}>
                                        <StyledTableCell component="th" scope="row">
                                            Backend Developer
                                        </StyledTableCell>
                                        <StyledTableCell align="center">10</StyledTableCell>
                                        <StyledTableCell align="center">2</StyledTableCell>
                                        <StyledTableCell align="start">Day</StyledTableCell>
                                        <StyledTableCell align="center">Full Time</StyledTableCell>
                                        <StyledTableCell align="start">04.12.2021</StyledTableCell>
                                        <StyledTableCell align="start">04.12.2021</StyledTableCell>
                                        <StyledTableCell align="start">Negotiable</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <Typography variant="span" component="div" className="status-btn">
                                                Active
                                            </Typography>
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <EditIcon className="edit-icon" />
                                            <DeleteIcon className="delete-icon" sx={{ mx: 1 }} />
                                            <VisibilityIcon className="visible-icon" />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default Jobs;