import React from 'react'
import "./Doubt.css"
const Doubt = () => {
    return (
        <>
            <div className="section">
                <h2>Submit a Doubt</h2>
                <div className="card">
                    <div className="doubt-form">
                        <input type="text" placeholder="Subject (e.g., Math 101)" required></input>
                        <textarea placeholder="Describe your doubt or question" required></textarea>
                        <button className="submit-button">Submit Doubt</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doubt
