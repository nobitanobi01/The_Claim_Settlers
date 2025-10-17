import React from "react";
import "../styles/Home2.css";

const Home2 = () => {
    return (
        <section className="compensation-section">
            <h2 className="section-heading">How Do I Get Compensated?</h2>
            <div className="compensation-cards">
                <div className="card">
                    <i className="fa-solid fa-file icon" style={{fontSize:"2rem", color:"grey"}}></i>
                    <h3>Fill out the Quiz Form</h3>
                    <p>Answer a few questions to see if you may qualify.</p>
                </div>
                <div className="card">
                   <i className="fa-duotone fa-solid fa-phone-volume icon" style={{fontSize:"2rem", color:"green"}}></i>
                    <h3>Speak With Our Experienced Attorneys</h3>
                    <p>Our team will quickly review your case and match you with an experienced attorney.</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-scale-balanced icon" style={{fontSize:"2rem", color:"blue"}}></i>
                    <h3>Potential Compensation</h3>
                    <p>Receive the justice and potential compensation that you and your loved ones deserve.</p>
                </div>
            </div>
        </section>
    );
};

export default Home2;
