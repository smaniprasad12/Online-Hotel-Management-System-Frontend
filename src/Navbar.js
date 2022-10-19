import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./FrontPages/Home";


import "./Navbar.css";
class Navbar extends Component {
    render(){
        return(
            <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Hotel Management System
        </Link>
        <div className="navbar-nav ml-auto">
          <li className="nav-item">
                  <Link to={"/"} className="btn btn-outline-light ms-2 ">
              Home
            </Link>
          </li>
          <li className="nav-item">
                <Link to={"/contact"} className="btn btn-outline-light ms-2">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Button"} className="btn btn-outline-light ms-2">
                  Login/Register
                </Link>
              </li> 
            </div>
            </nav>
        
            </div>
        )
    }
}
export default Navbar