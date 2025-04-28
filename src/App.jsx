import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login.jsx';
import Signup from './Screens/Signup.jsx';
import Landingpage from './Screens/Landingpage.jsx';
import Materials from './Screens/Materials.jsx';




const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/materials" element={<Materials />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
