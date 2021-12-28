import React from 'react';
import { styled } from '@mui/material/styles';
import { Typography, Grid, Paper, Box } from '@mui/material';
import jobIcon from '../../../images/activeJob-icon.png';
import userIcon from '../../../images/feather-users.png';
import './Cards.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Cards = () => {

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} className="job-cards" columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{pt: 4}} >
                    <Grid item xs={12} md={4} lg={3} >
                        <Item className="text-white job-card">
                            <Typography variant="p" component="div" sx={{textTransform: "uppercase", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", paddingTop: "10px"}} >
                                <img src={jobIcon} alt="job_icon" style={{paddingRight: "15px"}} />
                                total active job
                            </Typography>
                            <Typography variant="p" component="div" sx={{fontWeight: "500", paddingTop: "12px", fontSize: "24px",paddingBottom: "6px"}}>5</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <Item className=" text-white interview-card">
                        <Typography variant="p" component="div" sx={{textTransform: "uppercase", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", paddingTop: "10px"}} >
                                <img src={userIcon} alt="job_icon" style={{paddingRight: "15px"}} />
                                interview schedule
                            </Typography>
                            <Typography variant="p" component="div" sx={{fontWeight: "500", paddingTop: "12px", fontSize: "24px",paddingBottom: "6px"}}>5</Typography>
                        </Item >
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <Item className="text-white hiring-card">
                        <Typography variant="p" component="div" sx={{textTransform: "uppercase", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", paddingTop: "10px"}} >
                                <img src={userIcon} alt="job_icon" style={{paddingRight: "15px"}} />
                                new hiring
                            </Typography>
                            <Typography variant="p" component="div" sx={{fontWeight: "500", paddingTop: "12px", fontSize: "24px",paddingBottom: "6px"}}>5</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3} >
                        <Item className="text-white applicant-card">
                        <Typography variant="p" component="div" sx={{textTransform: "uppercase", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "500", paddingTop: "10px"}} >
                                <img src={userIcon} alt="job_icon" style={{paddingRight: "15px"}} />
                                total applicant
                            </Typography>
                            <Typography variant="p" component="div" sx={{fontWeight: "500", paddingTop: "12px", fontSize: "24px",paddingBottom: "6px"}}>5</Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Cards;