import React from 'react'
import "./Landingpage.css"
import { Link } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />




const Landingpage = () => {





    return (
        <>

            <Navbar />

            <section className="hero">
                <div className="hero-content">
                    <h1>Empower Your Education</h1>
                    <p>Streamline attendance with QR scanning and organize your academic life effortlessly.</p>
                    <a href="#" className="hero-cta">Start Now</a>
                </div>
                <div className="orbit-bg"></div>
            </section>

            <section className="features">
                <h2>Core Features</h2>
                <div className="feature-container">
                    <div className="feature-card">
                        <h3>QR Attendance</h3>
                        <p>Simplify attendance tracking with a fast and secure QR code scanner.</p>
                    </div>
                    <div className="feature-card">
                        <h3>class Schedules</h3>
                        <p>Stay on top of your classes with an intuitive schedule manager.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Events</h3>
                        <p>Where ideas, talent, and passion meet.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Study Materials</h3>
                        <p>Your trusted companion for academic success</p>
                    </div>
                    <div className="feature-card">
                        <h3>Real-Time Updates</h3>
                        <p>Get instant notifications for schedule changes and attendance records.</p>
                    </div>
                </div>
            </section>



            <section className="benefits">
                <h2>Why EduScan?</h2>
                <div className="benefit-list">
                    <div className="benefit-item">
                        <h3>Time-Saving</h3>
                        <p>Automate routine tasks to focus on teaching and learning.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Accessible</h3>
                        <p>Use it anytime, anywhere on any device.</p>
                    </div>
                    <div className="benefit-item">
                        <h3>Secure</h3>
                        <p>Your data is protected with top-tier security measures.</p>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Landingpage
