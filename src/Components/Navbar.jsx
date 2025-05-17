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
          <nav style={{ margin: "0px 0px 0px 351px" }}>
          <a href="#">Home</a>
          <Link to="/materials">Materials</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/attendance">Attendance</Link>
          <Link to="/events">Events</Link>
        </nav>
        <Link to="/profile"><img className="profile" src="../src/assets/profile.png" alt="" /></Link>

      </header>
    </>
  )
}

export default Navbar
