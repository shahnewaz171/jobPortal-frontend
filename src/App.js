import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Cards from "./components/Home/Cards/Cards";
import CreateJob from "./components/Home/CreateJob/CreateJob";
import SearchItems from "./components/Home/SearchItems/SearchItems";
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
              <Cards />
              <CreateJob />
              <SearchItems />
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
