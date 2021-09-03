import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./styles/Header.scss";

function Header() {
  //Link can't use css so have to use JSX syntax
  const linkStyle={
    textDecoration: "none",
    color: "black"
  }
  return (
    <div className="navBar">
      <div className="logoTitle">
        <Link to="/"><img src={logo} alt="" id="navbar-logo"/></Link>
        <span id="navbar-title"> <Link to="/" style={linkStyle}>Calculate Student Loans</Link></span>
      </div>
    </div>
  );
}

export default Header;
