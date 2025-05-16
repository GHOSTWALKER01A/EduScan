import React from 'react'
import "./Events.css"
import Navbar from '../Components/navbar'
import Footer from '../Components/Footer'
const Events = () => {
  return (
    <>
      <Navbar />
     
    <div class="main-content">
     
        <div class="section">
            <h2>Upcoming Events</h2>
            <div class="card">
                
                <div class="filters">
                    <select>
                        <option value="" disabled selected>Filter by Category</option>
                        <option value="academic">Academic</option>
                        <option value="cultural">Cultural</option>
                        <option value="sports">Sports</option>
                        <option value="community">Community</option>
                    </select>
                </div>


                <div class="events-grid">
                    <div class="event-card">
                        {/* <img src="" alt="Science Fair" class="event-media"> */}
                        <img src="" alt="" class="event-media" />
                        <h3>Science Fair 2023</h3>
                        <p>Date: October 15, 2023</p>
                        <p>Time: 10:00 AM - 3:00 PM</p>
                        <p>Location: Main Hall</p>
                        <p>Category: Academic</p>
                        <a href="#" class="action-button">View Details</a>
                    </div>
                    <div class="event-card">
                        <video class="event-video" controls>
                            {/* <source src="" type="video/mp4"> */}
                            <source  src='' type=''/>
                            Your browser does not support the video tag.
                        </video>
                        <h3>Parent-Teacher Meeting</h3>
                        <p>Date: October 20, 2023</p>
                        <p>Time: 2:00 PM - 5:00 PM</p>
                        <p>Location: Conference Room</p>
                        <p>Category: Community</p>
                        <a href="#" class="action-button">View Details</a>
                    </div>
                    <div class="event-card">
                        {/* <img src="https://via.placeholder.com/300x200?text=Cultural+Fest" alt="Cultural Fest" class="event-media"> */}
                        <img src="" alt=""  class="event-media"/>
                        <h3>Cultural Fest</h3>
                        <p>Date: November 5, 2023</p>
                        <p>Time: 9:00 AM - 6:00 PM</p>
                        <p>Location: College Grounds</p>
                        <p>Category: Cultural</p>
                        <a href="#" class="action-button">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


      <Footer />
    </>

  )
}

export default Events
