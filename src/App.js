import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
              <Navbar />
            </Route>
            <PrivateRoute path="/home">
              <h1>Home</h1>
            </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
