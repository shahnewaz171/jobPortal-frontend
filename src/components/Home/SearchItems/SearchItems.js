import React, { useState } from 'react';
import { Grid, Box, TextField, Select,Typography, MenuItem, Button  } from '@mui/material';
import { InputAdornment } from "@material-ui/core";
import { FiSearch } from "react-icons/fi";
import './SearchItems.css';

const SearchItems = () => {
    const [type, setType] = useState('');
    const [department, setDepartment] = useState('');
    const [time, setTime] = useState('');
    const [shift, setShift] = useState('');

    const handleType = (e) => {
        setType(e.target.value);
    };
    const handleDepartment = (e) => {
        setDepartment(e.target.value);
    };
    const handleTime = (e) => {
        setTime(e.target.value);
    };
    const handleShift = (e) => {
        setShift(e.target.value);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} className="job-cards" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 4, pb: 5, px: 3 }} >
                    <Grid item xs={6} md={3} lg={2}>
                        <Typography variant="p" component="div" className="searchItem-title" >
                            search
                        </Typography>
                       <TextField fullWidth sx={{border: "1px solid #707070"}} InputProps={{ endAdornment: (
                       <InputAdornment position="end">
                            <FiSearch />
                        </InputAdornment>
                        )}} />
                    </Grid>

                    <Grid item xs={6} md={3} lg={2}>
                        <Typography variant="p" component="div" className="searchItem-title" >
                            selected by type
                        </Typography>
                        <Select fullWidth  sx={{border: "1px solid #707070"}} value={type} onChange={handleType} >
                            <MenuItem value="type1">Type 1</MenuItem>
                            <MenuItem value="type2">Type 2</MenuItem>
                            <MenuItem value="type3">Type 3</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} md={3} lg={2}>
                        <Typography variant="p" component="div" className="searchItem-title" >
                            selected by department
                        </Typography>
                        <Select fullWidth  sx={{border: "1px solid #707070"}} value={department} onChange={handleDepartment} >
                            <MenuItem value="IT">IT</MenuItem>
                            <MenuItem value="Non IT">Non IT</MenuItem>
                            <MenuItem value="General">General</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6} md={3} lg={2}>
                        <Typography variant="p" component="div" className="searchItem-title" >
                            selected by time
                        </Typography>
                        <Select fullWidth  sx={{border: "1px solid #707070"}} value={time} onChange={ handleTime} >
                            <MenuItem value="10.00">10.00 AM</MenuItem>
                            <MenuItem value="12.00">12.00 PM</MenuItem>
                            <MenuItem value="2.00">2.00 PM</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2}>
                        <Typography variant="p" component="div" className="searchItem-title" >
                            selected by shift
                        </Typography>
                        <Select fullWidth  sx={{border: "1px solid #707070"}} value={shift} onChange={ handleShift} >
                            <MenuItem value="morning">Morning</MenuItem>
                            <MenuItem value="evening">Evening</MenuItem>
                            <MenuItem value="night">Night</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2}>
                       <Typography variant="p" component="div" sx={{paddingTop: "26px", textAlign: "end"}} >
                            <Button variant="contained" className="filter-btn" >
                                filter
                            </Button>
                       </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default SearchItems;