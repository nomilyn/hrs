

import React, { Component } from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../assets/css/App.css";
import "../assets/css/utilities.css";


import Header from "./Header";
import Footer from "./Footer";
import HomePage from './HomePage';
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Terms from "./Terms";
import RoomList from "./RoomList";
import SliderItem from "./SliderItem";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import Employee from "./Employee";
import UpdateRoom from "./UpdateRoom";
import ManageRoom from "./ManageRoom";
import AddRoom from "./AddRoom";
import SearchMenu from './SearchMenu';
import UpdateUser from './UpdateUser';
import UserDashboard from './UserDashboard';
import { StarTwoTone } from '@material-ui/icons';
import HotelContext from "./HotelContext";
import ReservationPage from "./ReservationPage";
const App = () => {

  var [activeComponent, setComponent] = useState([
    {
      nameofComp: "HomePage",//use to set main component
      user: "Employee"//use to set menu items
    }
  ]);

  const handlleActiveComp = (name) => {


    setComponent([{

      nameofComp: name

    }])


  }
  return (
    <div className="grid grid-row-3" id="main-container">
      <main id="main-area">
        <HotelContext.Provider value={{ activeComponent, handlleActiveComp }}>
          <Router>
            <Header user={activeComponent[0].user} handleAC={handlleActiveComp} />
            <Switch> 
              <Route exact path="/"><HomePage /></Route>
              <Route path="/ReservationPage"><ReservationPage /></Route>
              <Route path="/AboutUs"><AboutUs /></Route>
              <Route path="/ContactUs"><ContactUs /></Route>
              <Route path="/Terms"><Terms /></Route>
              <Route path="/SliderItem"><SliderItem /></Route>
              <Route path="/RoomList"><RoomList /></Route>
              <Route path="/LoginPage"><LoginPage /></Route>
              <Route path="/Signup"> <Signup /></Route>
              <Route path="/Employee"> <Employee /></Route>
              <Route path="/ManageRoom"> <ManageRoom /></Route>
              <Route path="/UpdateRoom"> <UpdateRoom /></Route>
              <Route path="/AddRoom"> <AddRoom /></Route>
              <Route path="/UserDashboard"> <UserDashboard /></Route>
              <Route path="/SearchMenu">  <SearchMenu /></Route>
              <Route path="/UpdateUser"> <UpdateUser /></Route>

            </Switch>
            <Footer handleAC={handlleActiveComp} />
          </Router>
        </HotelContext.Provider>

      </main>
    </div>
  )
}


export default App;

