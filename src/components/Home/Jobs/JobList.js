import React from 'react';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { StyledTableCell, StyledTableRow } from '../../shared/custom-styles';

const JobList = ({ job }) => {
    const { jobTitle, vacancies, shift, jobType, postDate, lastUpdated, level, location } = job;

    return (
        <>
            <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                    {jobTitle}
                </StyledTableCell>
                <StyledTableCell align="center">{vacancies}</StyledTableCell>
                <StyledTableCell align="left">{shift}</StyledTableCell>
                <StyledTableCell align="center">{jobType}</StyledTableCell>
                <StyledTableCell align="left">{postDate}</StyledTableCell>
                <StyledTableCell align="left">{lastUpdated}</StyledTableCell>
                <StyledTableCell align="left">{level !== null ? level : "Junior"}</StyledTableCell>
                <StyledTableCell align="left">{location}</StyledTableCell>
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
        </>
    );
};

export default JobList;