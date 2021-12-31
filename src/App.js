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
          <Route path="/" 
            element={ <PrivateRoute> <Home /> </PrivateRoute> } 
          />
          <Route path="login" element={ <Login /> } />
          <Route path="view-job/:id" 
            element={ <PrivateRoute> <ViewJob /> </PrivateRoute> } 
          />
          <Route path="edit-job/:id" 
            element={ <PrivateRoute> <EditJob /> </PrivateRoute> } 
          />
          <Route path='home' element={<PrivateRoute> <Home /> </PrivateRoute>} />
          <Route path='*' element={<PrivateRoute> <Home /> </PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
