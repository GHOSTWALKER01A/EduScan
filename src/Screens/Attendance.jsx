import React from 'react';
import "./Attendance.css";
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

const Attendance = () => {
  return (
    <>
      <Navbar />

      <div className="main-content">
        <div className="section">
          <h2>My Attendance</h2>
          <div className="card">
            
            <div className="filters">
              <select>
                <option value="" disabled selected>Select Subject</option>
                <option value="math">Math 101</option>
                <option value="science">Science 102</option>
                <option value="history">History 103</option>
                <option value="english">English 104</option>
              </select>
              <input type="date" value="2023-10-01" />
              <input type="date" value="2023-10-31" />
            </div>

            <div className="attendance-summary">
              <div className="summary-item">
                <p>Classes Attended</p>
                <span>48/50</span>
              </div>
              <div className="summary-item">
                <p>Attendance Rate</p>
                <span>96%</span>
              </div>
              <div className="summary-item">
                <p>Late Arrivals</p>
                <span>1</span>
              </div>
              <div className="summary-item">
                <p>Absences</p>
                <span>1</span>
              </div>
            </div>

            <table className="attendance-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Time</th>
                  <th>Room</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-10-08</td>
                  <td>Math 101</td>
                  <td>9:00 AM - 10:00 AM</td>
                  <td>A-101</td>
                  <td className="status-present">Present</td>
                </tr>
                <tr>
                  <td>2023-10-09</td>
                  <td>Science 102</td>
                  <td>10:00 AM - 11:00 AM</td>
                  <td>B-204</td>
                  <td className="status-present">Present</td>
                </tr>
                <tr>
                  <td>2023-10-10</td>
                  <td>History 103</td>
                  <td>11:00 AM - 12:00 PM</td>
                  <td>A-102</td>
                  <td className="status-late">Late</td>
                </tr>
                <tr>
                  <td>2023-10-11</td>
                  <td>English 104</td>
                  <td>1:00 PM - 2:00 PM</td>
                  <td>C-301</td>
                  <td className="status-absent">Absent</td>
                </tr>
              </tbody>
            </table>
            <button className="action-button">Export Attendance Report</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Attendance;