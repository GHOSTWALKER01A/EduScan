import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (
    <>
    
    <div className='animation'>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

    </div>

{/* 
    <div class="signup-container">
        <div class="logo">LearnSync</div>
        <h2>Join LearnSync</h2>
        <div class="signup-form">
            <input type="text" placeholder="Full Name" required>
            <input type="email" placeholder="Email" required>
            <input type="tel" placeholder="Phone Number" required>
            <select required>
                <option value="" disabled selected>Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>
            <input type="password" placeholder="Password" required>
            <input type="password" placeholder="Confirm Password" required>
            <button>Sign Up</button>
        </div>
        <p class="login-prompt">Already have an account? <a href="login.html">Log In</a></p>
    </div> */}
    
    
    <div className="container">
        <div className="logo">EduScan</div>
        <h2>Join EduScan</h2>
        <div className="form">
            <input type="text" placeholder='Full Name' required />
            <input type="password" placeholder='Registration No' required />
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password'required />
            <input type="tel" placeholder='Phone No' required />

            <select required >
                <option value="" disabled selected>Select Role</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
            </select>
            <button>Sign Up</button>

        </div>
        <p className='login-prompt'>Already have a account? <a href="/login">Log In</a></p>
    </div>
    
    </>
  )
}

export default Signup