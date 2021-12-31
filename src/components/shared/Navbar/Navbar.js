import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography, Badge, MenuItem, Menu } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../../images/main-logo.png';
import notificationIcon from '../../../images/notification.png';
import userIcon from '../../../images/user.png';
import './Navbar.css';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const navigate = useNavigate();
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        navigate("/login", { replace: true });
        localStorage.clear();
        setAnchorEl(null);
        handleMobileMenuClose();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={menuId}keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMenuOpen} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Dashboard</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top',  horizontal: 'right'  }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit" >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon sx={{color: "#182F59"}} />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton size="large" aria-label="account of current user"  aria-controls="primary-search-account-menu" aria-haspopup="true" color="inherit"
                >
                    <AccountCircle sx={{color: "#182F59"}} />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundColor: "#182F59", padding: "5px 0px"}} >
                    <Toolbar >
                        <Box  component="div" sx={{marginRight: "15px"}}  >
                           <img src={logo} alt="logo" className="main-logo" />
                        </Box>
                        <Box  component="div" sx={{ display: { xs: 'none', sm: 'block' } }}  >
                            <Typography variant="h6" sx={{fontSize: "22px", lineHeight: "1.1", fontWeight: "500"}} >TechForing</Typography> 
                            <Typography variant="span" sx={{fontSize: "12px"}} >Shaping Tomorrow's Cybersecurity</Typography>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton  size="large" aria-label="show 17 new notifications" color="inherit" >
                                <Badge badgeContent={17} color="error">
                                    <img src={notificationIcon} alt="" />
                                </Badge>
                            </IconButton>
                            <IconButton  size="large"  edge="end" aria-label="account of current user"  aria-controls={menuId}  aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit" >
                            <img src={userIcon} alt="" />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large"  aria-label="show more"  aria-controls={mobileMenuId}  aria-haspopup="true"  onClick={handleMobileMenuOpen} color="inherit"  >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </>
    );
};

export default Navbar;