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
    <Link to="/schedule"><a href="#">Schedule</a></Link>
    <Link to="/attendance"><a href="#">Attendance</a></Link>
    <Link to="/events"><a href="#">Events</a></Link>
   </nav>
   <img   className="profile" src="../src/assets/profile.png" alt="" />
   
   </header>
    </>
  )
}

export default Navbar
