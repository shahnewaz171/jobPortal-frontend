import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import EditJob from "./components/EditJob/EditJob";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ViewJob from "./components/ViewJob/ViewJob";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import './App.css';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={
            <PrivateRoute><Home /></PrivateRoute>
          }/>
          <Route path="login" element={
            <Login />
          } />
          <Route path="view-job"  element={
            <PrivateRoute><ViewJob /></PrivateRoute>
          }/>
           <Route path="edit-job"  element={
            <PrivateRoute><EditJob /></PrivateRoute>
          }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
