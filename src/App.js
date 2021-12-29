import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import EditJob from "./components/EditJob/EditJob";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ViewJob from "./components/ViewJob/ViewJob";
import './App.css';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route element={<Home />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/view-job" element={<ViewJob />} />
          <Route path="/edit-job" element={<EditJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
