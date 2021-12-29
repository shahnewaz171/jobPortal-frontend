import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import EditJob from "./components/EditJob/EditJob";
import Cards from "./components/Home/Cards/Cards";
import CreateJob from "./components/Home/CreateJob/CreateJob";
import Jobs from "./components/Home/Jobs/Jobs";
import SearchItems from "./components/Home/SearchItems/SearchItems";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/shared/Navbar/Navbar";
import ViewJob from "./components/ViewJob/ViewJob";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
              <Navbar />
              <Cards />
              <CreateJob open={open} setOpen={setOpen} />
              <SearchItems />
              <Jobs />
              {/* <ViewJob /> */}
              {/* <EditJob /> */}
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
