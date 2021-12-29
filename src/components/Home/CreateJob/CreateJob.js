import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Typography, Button, Select, MenuItem, Box, Modal, TextField, TextareaAutosize } from '@mui/material';
import { GiCancel } from "react-icons/gi";
import { Div, modalStyle } from '../../shared/custom-styles';
import './CreateJob.css';

const CreateJob = ({ open, setOpen }) => {
    const [shift, seShift] = useState('');
    const [department, setDepartment] = useState('');
    const [level, setLevel] = useState('');
    const [vacancy, setVacancy] = useState('');
    const [salary, setSalary] = useState('');
    const [question, setQuestion] = useState('');

    const handleShift = (e) => {
        seShift(e.target.value);
    };
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    };
    const handleLevel = (e) => {
        setLevel(e.target.value);
    };
    const handleFilterQue = (e) => {
        setQuestion(e.target.value);
    };
    const handleVacancy = (e) => {
        setVacancy(e.target.value);
    };
    const handleSalary = (e) => {
        setSalary(e.target.value);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Div>
                <Typography variant="p" component="div" className="createJob-btn">
                    <Button onClick={handleOpen} variant="contained" startIcon={<FaPlusCircle />} >
                        create job
                    </Button>
                </Typography>
            </Div>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                className="createJob-modal"
            >
                <Box sx={modalStyle}>
                    <Div className="demo">
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Create Job
                        </Typography>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Job Title
                            </Typography>
                            <TextField fullWidth />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Shift
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={shift} onChange={handleShift} >
                                <MenuItem value="Morning">Morning</MenuItem>
                                <MenuItem value="Evening">Evening</MenuItem>
                                <MenuItem value="Night">Night</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Department
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={department} onChange={handleDepartment} >
                                <MenuItem value="IT">IT</MenuItem>
                                <MenuItem value="Non IT">Non IT</MenuItem>
                                <MenuItem value="General">General</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Level
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={level} onChange={handleLevel} >
                                <MenuItem value="Junior">Junior</MenuItem>
                                <MenuItem value="Mid">Mid</MenuItem>
                                <MenuItem value="Senior">Senior</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Vacancy
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={vacancy} onChange={handleVacancy} >
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="5">5</MenuItem>
                                <MenuItem value="8">8</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Salary
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={salary} onChange={handleSalary} >
                                <MenuItem value="20k">20k</MenuItem>
                                <MenuItem value="30k">30k</MenuItem>
                                <MenuItem value="40k">40k</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Filter Question
                            </Typography>
                            <Select fullWidth sx={{ border: "1px solid #707070" }} value={question} onChange={handleFilterQue} >
                                <MenuItem value="Lorem ipsum dolor sit1">Lorem ipsum dolor sit1</MenuItem>
                                <MenuItem value="Lorem ipsum dolor si2">Lorem ipsum dolor sit2</MenuItem>
                                <MenuItem value="Lorem ipsum dolor sit3">Lorem ipsum dolor sit3</MenuItem>
                            </Select>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Job Description
                            </Typography>
                            <TextareaAutosize aria-label="minimum height" minRows={8} placeholder="Write job description..." style={{ width: "100%", padding: "10px" }} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" />
                            <Div className="createJobSave">
                                <Button type="submit" variant="contained" className="createJobSave-btn" >
                                    Save and add another
                                </Button>
                                <Button type="submit" variant="contained" className="createJobSave-btn" >
                                    Save
                                </Button>
                            </Div>
                        </Div>
                        <Typography variant="p" component="p" className="close-btn">
                            <GiCancel onClick={handleClose} />
                        </Typography>
                    </Div>
                </Box>
            </Modal>
        </>
    );
};

export default CreateJob;