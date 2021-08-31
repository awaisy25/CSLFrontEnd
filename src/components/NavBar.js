import React from 'react'
import logo from '../assets/logo.png'
import './NavBar.css'

function NavBar() {
    return (
        <div className="navBar">
          <div className="logoTitle">
              <img src={logo} alt="" width="30" height="30"/>
          <span> Calculate Student Loans</span>
          </div>
        </div>
    )
}

export default NavBar
