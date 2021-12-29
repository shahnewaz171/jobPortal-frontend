import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const jwtToken = localStorage.getItem('jwtToken') || null;

    return jwtToken !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;