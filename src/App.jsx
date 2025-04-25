import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Landingpage from './Screens/Landingpage';



const App = () => {
  return (
    <>
    <Router>
    <Routes>
    <Route path="/login" element= {<Login/>}/>
    <Route path="/signup" element= {<Signup/>}/>
    <Route path="/" element={<Landingpage />} />
    
    </Routes>
    </Router>
    
    </>
  )
}

export default App
