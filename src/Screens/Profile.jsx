import React from 'react'
import "./Profile.css"
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
const Profile = () => {
  return (
   <>
   <Navbar />
   
    <div class="main-content">
        
        <div class="section">
            <h2>Student Profile</h2>
            <div class="card">
                <div class="profile-header">
                    <img src="../src/assets/profile.png" alt="Profile Photo" class="profile-photo" />
                    <div class="profile-details">
                        <h1>Divya Raj Singh</h1>
                        <p>Student ID: 24030480049</p>
                        <p>Email: Divyaraj123@gmail.com</p>
                        <p>Phone: +91 8652153746</p>
                        <p>Grade: 12th</p>
                        <p>Join Date: 2025-08-15</p>
                    </div>
                </div>
            </div>
        </div>

    
        <div class="section">
            <h2>Student Dashboard</h2>
            <div class="card">
                <div class="dashboard">
                    <div class="dashboard-item">
                        <h3>Upcoming Classes</h3>
                        <p>Next class in 2 hours</p>
                        <span>Math 101</span>
                    </div>
                    <div class="dashboard-item">
                        <h3>Assignments Due</h3>
                        <p>Due this week</p>
                        <span>3</span>
                    </div>
                    <div class="dashboard-item">
                        <h3>Grades Overview</h3>
                        <p>Current Average</p>
                        <span>92%</span>
                    </div>
                </div>
            </div>
        </div>

     
        <div class="section">
            <h2>Attendance Overview</h2>
            <div class="card">
                <div class="attendance-graph">Attendance Graph Placeholder (e.g., Line Chart)</div>
            </div>
        </div>

       
        <button class="action-button">Edit Profile</button>
    </div>
   <Footer />
   </>
  )
}

export default Profile
