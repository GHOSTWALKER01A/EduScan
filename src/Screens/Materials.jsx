import React from 'react';
import "./Materials.css";
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';
import Doubt from '../Components/Doubt';

const Materials = () => {
    return (
        <>
            <Navbar />

            <div className="main-content">
                
                <div className="section">
                    <h2>Academic Materials</h2>
                    <div className="card">
                        <div className="resources-grid">
                            <div className="resource-item">
                                <p>Maths Notes 1st Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Chemistry Notes 2nd Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>DSA Notes 3rd Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Mechanics Notes 2nd Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>EDCG Guide</p>
                                <a href="#">Download Guide</a>
                            </div>
                            <div className="resource-item">
                                <p>EEE Notes 2nd Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                        </div>
                    </div>
                    
                </div>

                {/* Previous Year Papers */}
                <div className="section">
                    <h2>Previous Year Papers</h2>
                    <div className="card">
                        <div className="resources-grid">
                            <div className="resource-item">
                                <p>Maths PYQS 1st Year</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Chemistry PYQS 1st Year</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>DSA PYQS 3rd Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Mechanics PYQS 1st Year</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>EDCG PYQS 1st Year</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>EEE PYQS 1st Semester</p>
                                <a href="#">Download PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Doubt/>
            <Footer />
        </>
    );
};

export default Materials;