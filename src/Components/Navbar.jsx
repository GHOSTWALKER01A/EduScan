import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header>
    <div className="logo">EduScan</div>
   <nav>
    <a href="#">Home</a>
    <Link to="/materials"><a href="#">Materials</a></Link>
    <a href="#">Schedule</a>
    <a href="#">Attendance</a>
    <a href="#">Events</a>
   </nav>
   <div className="profile">
    <img src="profile.svg" alt="" />
   </div>
   </header>
    </>
  )
}

export default Navbar
