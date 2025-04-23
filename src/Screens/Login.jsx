import React from 'react'
import "./Login.css"






const Login = () => {



  return (
    
    <>

   

    <div className='animation'>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>

    </div>

    <div className="container">

 <div className="logo">EduScan</div>
     <h2>Welcome Back!</h2>

     <div className="form">
        <input type="password" placeholder='Registration no' required/>
        <input type="email" placeholder='Email' required />
        <input type="password" placeholder='Password' required />
        <button>Log In</button>
        <a href="#" className='forgot-password'>Forgot password?</a>
     </div>

     <p className='signup-prompt'>Dont have a Account? <a href="#">Sign Up</a></p>
    </div>


    </>
  )
}

export default Login