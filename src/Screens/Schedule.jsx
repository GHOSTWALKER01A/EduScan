import React from 'react'
import "./Schedule.css"
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
const Schedule = () => {
  return (
    <>

     <Navbar/>

     <div className="main-content">
        <div className="section">
            <h2>Weekly Schedule</h2>
            <div className="card">
                <div className="day-selector">
                    <button data-day="monday">Monday</button>
                    <button data-day="tuesday">Tuesday</button>
                    <button data-day="wednesday">Wednesday</button>
                    <button data-day="thursday">Thursday</button>
                    <button data-day="friday">Friday</button>
                </div>

                <table className="timetable">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="time-slot">9:00 - 9:45</td>
                            <td className="academic" data-day="monday">Math</td>
                            <td className="academic" data-day="tuesday">Science</td>
                            <td className="academic" data-day="wednesday">English</td>
                            <td className="academic" data-day="thursday">History</td>
                            <td className="arts" data-day="friday">Art</td>
                        </tr>
                        <tr>
                            <td className="time-slot">9:45 - 10:30</td>
                            <td className="academic" data-day="monday">Science</td>
                            <td className="academic" data-day="tuesday">Math</td>
                            <td className="arts" data-day="wednesday">Music</td>
                            <td className="academic" data-day="thursday">English</td>
                            <td className="pe" data-day="friday">Physical Education</td>
                        </tr>
                        <tr>
                            <td className="time-slot">10:30 - 11:15</td>
                            <td className="academic" data-day="monday">English</td>
                            <td className="arts" data-day="tuesday">Art</td>
                            <td className="academic" data-day="wednesday">History</td>
                            <td className="pe" data-day="thursday">Physical Education</td>
                            <td className="academic" data-day="friday">Math</td>
                        </tr>
                        <tr>
                            <td className="time-slot">11:15 - 11:30</td>
                            <td colspan="5" className="recess">Recess</td>
                        </tr>
                        <tr>
                            <td className="time-slot">11:30 - 12:15</td>
                            <td className="academic" data-day="monday">History</td>
                            <td className="pe" data-day="tuesday">Physical Education</td>
                            <td className="academic" data-day="wednesday">Math</td>
                            <td className="arts" data-day="thursday">Music</td>
                            <td className="academic" data-day="friday">Science</td>
                        </tr>
                        <tr>
                            <td className="time-slot">12:15 - 1:00</td>
                            <td className="arts" data-day="monday">Art</td>
                            <td className="academic" data-day="tuesday">English</td>
                            <td className="pe" data-day="wednesday">Physical Education</td>
                            <td className="academic" data-day="thursday">Science</td>
                            <td className="academic" data-day="friday">History</td>
                        </tr>
                        <tr>
                            <td className="time-slot">1:00 - 1:45</td>
                            <td className="pe" data-day="monday">Physical Education</td>
                            <td className="arts" data-day="tuesday">Music</td>
                            <td className="academic" data-day="wednesday">Science</td>
                            <td className="academic" data-day="thursday">Math</td>
                            <td className="arts" data-day="friday">Art</td>
                        </tr>
                        <tr>
                            <td className="time-slot">1:45 - 2:30</td>
                            <td className="arts" data-day="monday">Music</td>
                            <td className="academic" data-day="tuesday">History</td>
                            <td className="arts" data-day="wednesday">Art</td>
                            <td className="pe" data-day="thursday">Physical Education</td>
                            <td className="academic" data-day="friday">English</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="section">
            <h2>Daily Schedule Overview</h2>
            <div className="card">
                <div className="daily-overview">
                    <div className="overview-card" data-day="monday">
                        <h3>9:00 - 9:45</h3>
                        <p>Math <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>9:45 - 10:30</h3>
                        <p>Science <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>10:30 - 11:15</h3>
                        <p>English <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>11:15 - 11:30</h3>
                        <p>Recess</p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>11:30 - 12:15</h3>
                        <p>History <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>12:15 - 1:00</h3>
                        <p>Art <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>1:00 - 1:45</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="monday">
                        <h3>1:45 - 2:30</h3>
                        <p>Music <span className="subject-type">(Arts)</span></p>
                    </div>
                  
                    <div className="overview-card" data-day="tuesday">
                        <h3>9:00 - 9:45</h3>
                        <p>Science <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>9:45 - 10:30</h3>
                        <p>Math <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>10:30 - 11:15</h3>
                        <p>Art <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>11:15 - 11:30</h3>
                        <p>Recess</p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>11:30 - 12:15</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>12:15 - 1:00</h3>
                        <p>English <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>1:00 - 1:45</h3>
                        <p>Music <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="tuesday">
                        <h3>1:45 - 2:30</h3>
                        <p>History <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>9:00 - 9:45</h3>
                        <p>English <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>9:45 - 10:30</h3>
                        <p>Music <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>10:30 - 11:15</h3>
                        <p>History <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>11:15 - 11:30</h3>
                        <p>Recess</p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>11:30 - 12:15</h3>
                        <p>Math <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>12:15 - 1:00</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>1:00 - 1:45</h3>
                        <p>Science <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="wednesday">
                        <h3>1:45 - 2:30</h3>
                        <p>Art <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>9:00 - 9:45</h3>
                        <p>History <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>9:45 - 10:30</h3>
                        <p>English <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>10:30 - 11:15</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>11:15 - 11:30</h3>
                        <p>Recess</p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>11:30 - 12:15</h3>
                        <p>Music <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>12:15 - 1:00</h3>
                        <p>Science <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>1:00 - 1:45</h3>
                        <p>Math <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="thursday">
                        <h3>1:45 - 2:30</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>9:00 - 9:45</h3>
                        <p>Art <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>9:45 - 10:30</h3>
                        <p>Physical Education <span className="subject-type">(PE)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>10:30 - 11:15</h3>
                        <p>Math <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>11:15 - 11:30</h3>
                        <p>Recess</p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>11:30 - 12:15</h3>
                        <p>Science <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>12:15 - 1:00</h3>
                        <p>History <span className="subject-type">(Academic)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>1:00 - 1:45</h3>
                        <p>Art <span className="subject-type">(Arts)</span></p>
                    </div>
                    <div className="overview-card" data-day="friday">
                        <h3>1:45 - 2:30</h3>
                        <p>English <span className="subject-type">(Academic)</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
     <Footer/>
     </>
  )
}

export default Schedule
