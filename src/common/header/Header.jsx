import React from 'react'
import "../header/Header.css"
import logo from "../../assets/images/logo.svg"
function Header() {
  return (
    <>
    <div id="header">
    <div className="logo">
     <img src={logo} alt="" />
    </div>
     <div id="headerlinks">
    
     </div>
     </div>
    </>
  )
}

export default Header