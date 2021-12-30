import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { Typography, Button, Select, MenuItem, Box, Modal, TextField, TextareaAutosize, FormControl, FormHelperText } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { GiCancel } from "react-icons/gi";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Div, modalStyle } from '../../shared/custom-styles';
import './CreateJob.css';

const CreateJob = ({ open, setOpen }) => {
    const [shift, seShift] = useState('');
    const [department, setDepartment] = useState('');
    const [level, setLevel] = useState('');
    const [jobType, setJobType] = useState('');
    const [disable, setDisable] = useState(false);
    const { register, handleSubmit, watch, reset, formState: { errors }, control } = useForm({
        mode: "all",
        reValidateMode: 'onChange'
    });

    const handleShift = (e) => {
        seShift(e.target.value);
        console.log(shift);
    };
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
        console.log(department);
    };
    const handleLevel = (e) => {
        setLevel(e.target.value);
        console.log(level);
    };
    const handleJobType = (e) => {
        setJobType(e.target.value);
        console.log(jobType);
    };

    const onSubmit = (data) => {
        console.log(data);
        const jwtToken = localStorage.getItem('jwtToken') || null;

        if(jwtToken !== null){
           setTimeout(() => {
            axios.post('https://tf-practical.herokuapp.com/api/job_post/', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`
                }
            })
            .then(res => {
                if (res) {
                    console.log(res.statusText);
                    reset();
                }
            })
            .catch(error => {
                console.error(error);
            });
           }, 2000);
        }
    };

    return (
        <>
            <Div>
                <Typography variant="p" component="div" className="createJob-btn">
                    <Button onClick={() => setOpen(true)} variant="contained" startIcon={<FaPlusCircle />} >
                        create job
                    </Button>
                </Typography>
            </Div>
            <Modal
                keepMounted
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                className="createJob-modal"
            >
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={modalStyle}>
                    <Div className="filterInput">
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Create Job
                        </Typography>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Job Title
                            </Typography>
                            <TextField fullWidth name="jobTitle" {...register("jobTitle", { required: "This field is required" })} error={Boolean(errors.jobTitle)} helperText={errors.jobTitle?.message} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                LastDateOfApply
                            </Typography>
                            <TextField type="date" fullWidth name="lastDateOfApply" {...register("lastDateOfApply", { required: "This field is required" })} error={Boolean(errors.lastDateOfApply)} helperText={errors.lastDateOfApply?.message} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Level
                            </Typography>
                            <TextField fullWidth name="level" {...register("level", { required: "This field is required" })} error={Boolean(errors.level)} helperText={errors.level?.message} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Shift
                            </Typography>
                            <FormControl fullWidth error={Boolean(errors.shift)} >
                                <Controller 
                                    render={({ field }) => (
                                        <Select {...field} sx={{ border: "1px solid #707070" }} >
                                        <MenuItem value="day">Day</MenuItem>
                                        <MenuItem value="night">Night</MenuItem>
                                        </Select>
                                    )}
                                    name="shift"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required"
                                    }}
                                />
                                <FormHelperText>{errors.shift?.message}</FormHelperText>
                            </FormControl>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Location
                            </Typography>
                            <TextField  fullWidth name="location" {...register("location", { required: "This field is required" })} error={Boolean(errors.location)} helperText={errors.location?.message} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Vacancies
                            </Typography>
                            <TextField type="number" fullWidth name="vacancies" {...register("vacancies", { required: "This field is required" })} error={Boolean(errors.vacancies)} helperText={errors.vacancies?.message} />
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Job type
                            </Typography>
                            <FormControl fullWidth error={Boolean(errors.jobType)} >
                                <Controller 
                                    render={({ field }) => (
                                        <Select {...field} sx={{ border: "1px solid #707070" }} >
                                            <MenuItem value="part_time">Part Time</MenuItem>
                                            <MenuItem value="full_time">Full Time</MenuItem>
                                            <MenuItem value="internship">Internship</MenuItem>
                                        </Select>
                                    )}
                                    name="jobType"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required"
                                    }}
                                />
                                <FormHelperText>{errors.jobType?.message}</FormHelperText>
                            </FormControl>
                        </Div>
                        <Div className="createJob-item">
                            <Typography variant="p" component="div" className="searchItem-title" >
                                Job Description
                            </Typography>
                            <FormControl fullWidth error={Boolean(errors.jobDescription)}>
                                <Controller 
                                    render={({ field }) => (
                                        <TextareaAutosize {...field} aria-label="minimum height" minRows={8} placeholder="Write job description..." style={{ width: "100%", padding: "10px" }}  />
                                    )}
                                    name="jobDescription"
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: "This field is required"
                                    }}
                                />
                                <FormHelperText>{errors.jobDescription?.message}</FormHelperText>
                            </FormControl>
                          
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
                            <GiCancel onClick={() => setOpen(false)} />
                        </Typography>
                    </Div>
                </Box>
            </Modal>
            {
                <ToastContainer />
            }
        </>
    );
};

export default CreateJob;