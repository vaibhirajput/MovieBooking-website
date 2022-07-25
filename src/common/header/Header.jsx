import React from 'react'
import "../header/Header.css"
import logo from "../../assets/images/logo.svg"

function Header(props) {
  return (
    <>
    <div id="header">
    <div className="logo">
     <img src={logo} alt="" />
    </div>
     <div id="headerlinks">
      {props.book}
     </div>
     </div>
    </>
  )
}

export default Header