import React from 'react';
import "./Materials.css";
import Navbar from '../Components/navbar';
import Footer from '../Components/Footer';

const Materials = () => {
    return (
        <>
            <Navbar />

            <div className="main-content">
                {/* Academic Materials */}
                <div className="section">
                    <h2>Academic Materials</h2>
                    <div className="card">
                        <div className="resources-grid">
                            <div className="resource-item">
                                <p>Math 101 Notes</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Science 102 Slides</p>
                                <a href="#">View Slides</a>
                            </div>
                            <div className="resource-item">
                                <p>History 103 Guide</p>
                                <a href="#">Download Guide</a>
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
                                <p>Math 101 - 2022</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>Science 102 - 2022</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="resource-item">
                                <p>History 103 - 2021</p>
                                <a href="#">Download PDF</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Materials;