import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { StyledTableCell, StyledTableRow } from '../../shared/custom-styles';
import './Jobs.css';


const Jobs = () => {

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
                                <StyledTableCell>Post Name</StyledTableCell>
                                <StyledTableCell align="right">Total Applicant</StyledTableCell>
                                <StyledTableCell align="right">Vacancies</StyledTableCell>
                                <StyledTableCell align="right">Shift</StyledTableCell>
                                <StyledTableCell align="right">Type</StyledTableCell>
                                <StyledTableCell align="right">Post Date</StyledTableCell>
                                <StyledTableCell align="right">Expire Date</StyledTableCell>
                                <StyledTableCell align="right">Salary</StyledTableCell>
                                <StyledTableCell align="right">Status</StyledTableCell>
                                <StyledTableCell align="right">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow >
                                <StyledTableCell component="th" scope="row">
                                    Backend Developer
                                </StyledTableCell>
                                <StyledTableCell align="right">10</StyledTableCell>
                                <StyledTableCell align="right">2</StyledTableCell>
                                <StyledTableCell align="right">Day</StyledTableCell>
                                <StyledTableCell align="right">Full Time</StyledTableCell>
                                <StyledTableCell align="right">04.12.2021</StyledTableCell>
                                <StyledTableCell align="right">04.12.2021</StyledTableCell>
                                <StyledTableCell align="right">Negotiable</StyledTableCell>
                                <StyledTableCell align="right">
                                    <Typography variant="span" component="div" className="status-btn">
                                        Active
                                    </Typography>
                                </StyledTableCell>
                                <StyledTableCell align="right">
                                    <EditIcon className="edit-icon" />
                                    <DeleteIcon className="delete-icon" sx={{mx: 1}} />
                                    <VisibilityIcon className="visible-icon" />
                                </StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default Jobs;