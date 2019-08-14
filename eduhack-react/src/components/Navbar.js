import React from 'react'

function Navbar() {
  function closeNav() {
    document.getElementById("sidenav").style.width = "0"
  }

  function openNav() {
    document.getElementById("sidenav").style.width = "250px"
  }

  return (
    <div>
      <div id="sidenav" className="side-nav">

        <a href="#!" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#header" onClick={closeNav}>Home</a>
        <a href="#content" onClick={closeNav}>Event Details</a>
        <a href="#join" onClick={closeNav} id="join-button">Register</a>
      </div>

      <div id="nav">
        <div id="hamburger" onClick={openNav}>
          <div className="hamburger-strip"></div>
          <div className="hamburger-strip"></div>
          <div className="hamburger-strip"></div>
        </div>
        <div id="nav-logo">
          <a href="#header">
            <img src="assets/small-logo.png" alt="EduHack Small Logo" />
          </a>
        </div>
        <div id="nav-link">
          <a href="#header">Home</a>
          <a href="#content">Event Details</a>
          <a href="#join" id="join-button">Register</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar