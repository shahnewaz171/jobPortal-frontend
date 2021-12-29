import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

    return userInfo.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;