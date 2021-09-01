import React from "react";
import logo from "../assets/logo.png";
import "./styles/NavBar.css";

function NavBar() {
  return (
    <div className="navBar">
      <div className="logoTitle">
        <img src={logo} alt="" id="navbar-logo"/>
        <span id="navbar-title"> Calculate Student Loans</span>
      </div>
    </div>
  );
}

export default NavBar;
