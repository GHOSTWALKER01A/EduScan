import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <header>
    <div className="logo">EduScan
        <img src="../src/assets/Logo.png" alt="" />
    </div>
   <nav>
    <a href="#">Home</a>
    <Link to="/materials"><a href="#">Materials</a></Link>
    <a href="#">Schedule</a>
    <a href="#">Attendance</a>
    <a href="#">Events</a>
   </nav>
   <img   className="profile" src="../src/assets/profile.png" alt="" />
   
   </header>
    </>
  )
}

export default Navbar
