import React from 'react';
import Button from '@mui/material/Button';
import { FaPlusCircle } from "react-icons/fa";
import { Typography } from '@mui/material';
import './CreateJob.css';

const CreateJob = () => {

    return (
        <>
            <Typography variant="p" component="div" className="createJob-btn">
                <Button variant="contained" startIcon={<FaPlusCircle />} >
                    create job
                </Button>
            </Typography>
        </>
    );
};

export default CreateJob;