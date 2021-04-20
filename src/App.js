import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./Components/About/About";
import AddService from "./Components/AddService/AddService";
import Booking from "./Components/Booking/Booking";
import Dashbord from "./Components/Dashbord/Dashbord";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ReviewUs from "./Components/ReviewUs/ReviewUs";
import ServiceList from "./Components/ServiceList/ServiceList";

export const UserContext = createContext();


function App() {
  const [loggedIn, setLoggedIn] = useState({});

  return (
    <UserContext.Provider value ={[loggedIn, setLoggedIn]}>
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/dashbord">
            <Dashbord />
          </PrivateRoute>
          <Route path="/login">
          <Login />
          </Route>
          <PrivateRoute path="/booking/:title">
          <Booking />
          </PrivateRoute>
          <Route path="/list">
          <ServiceList/>
          </Route>
          <PrivateRoute path="/addServices">
          <AddService />
          </PrivateRoute>
          <PrivateRoute path="/reviewUs">
          <ReviewUs />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
