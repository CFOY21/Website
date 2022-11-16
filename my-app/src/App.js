import logo from './logo.svg';
//import './App.css';
//import "./style.css"
import React, { Component, useEffect } from 'react';

import Navbar from "./Navbar.js";
import Pricing from './pages/Pricing';
import About from './pages/About';
import Home from './pages/Home';
import Test from './pages/test';

import Axios from "axios";
import {useState} from "react";


function App() {

  
  
  let Component 
  

  switch (window.location.pathname) {
    case "/":
      Component = <Home/>
      break
      case "/pricing":
        Component = <Pricing/>
        break
        case "/about":
          Component = <About/>
          break
          case "/test":
          Component = <Test/>
          break
  }
return(
  <>
   <Navbar />

   
 
  {Component}
  </>
)
}
//import Navbar from './navbar';





export default App;



