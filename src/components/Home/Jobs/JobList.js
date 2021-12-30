import React, { useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { StyledTableCell, StyledTableRow } from '../../shared/custom-styles';

const JobList = ({ job,  setJobId }) => {
    const toastId = useRef(null);
    const { jobTitle, vacancies, shift, jobType, postDate, lastUpdated, level, location, id } = job;

    const deleteJob = (id) => {
        const jwtToken = localStorage.getItem('jwtToken') || null;
        axios.delete(`https://tf-practical.herokuapp.com/api/job_update/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then(res => {
            if(res){
                toast.dismiss(toastId.current);
                toast.success("Deleted", {
                    theme: "dark",
                    position: toast.POSITION.TOP_LEFT,
                    autoClose: 3000
                });
                setJobId(id);
            }
        })
        .catch(error => {
            toast.dismiss(toastId.current);
            toast.error(error?.message, {
                theme: "dark",
                position: toast.POSITION.TOP_LEFT,
                autoClose: 3000
            });
        });
    }

    
    return (
        <>
            <StyledTableRow >
                <StyledTableCell component="th" scope="row">
                    {jobTitle}
                </StyledTableCell>
                <StyledTableCell align="left">{vacancies}</StyledTableCell>
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
                    <Link to={`edit-job/${id}`}>
                        <EditIcon className="edit-icon" />
                    </Link>
                    <DeleteIcon onClick={() => deleteJob(id)} className="delete-icon" sx={{ mx: 1 }} />
                    <Link to={`view-job/${id}`}>
                        <VisibilityIcon className="visible-icon" />
                    </Link>
                </StyledTableCell>
            </StyledTableRow>
        </>
    );
};

export default JobList;