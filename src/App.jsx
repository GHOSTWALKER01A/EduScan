import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login.jsx';
import Signup from './Screens/Signup.jsx';
import Landingpage from './Screens/Landingpage.jsx';
import Materials from './Screens/Materials.jsx';
import Schedule from './Screens/Schedule.jsx';
import Attendance from './Screens/Attendance.jsx';
import Events from './Screens/Events.jsx';


const App = () => {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Landingpage />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
