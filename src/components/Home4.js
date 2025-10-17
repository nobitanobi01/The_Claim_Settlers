import React from "react";
import "../styles/Home4.css";

const Home4 = () => {
    return (
        <section className="comparison-section">
            <div className="container">
                <h2 className="section-heading">Key Differences Between Mass Tort and Class Action Lawsuits</h2>

                <h3>Structure</h3>
                <ul>
                    <li><strong>Mass Tort:</strong> Involves multiple individual lawsuits grouped together due to common elements or defendants.</li>
                    <li><strong>Class Action Lawsuits:</strong> A single lawsuit brought on behalf of a larger group, known as the class, with a designated representative plaintiff.</li>
                </ul>

                <h3>Individual Control</h3>
                <ul>
                    <li><strong>Mass Tort:</strong> Each plaintiff maintains control over their case and its resolution.</li>
                    <li><strong>Class Action Lawsuits:</strong> Class members have limited control over the lawsuit, with decisions made by the representative plaintiff and their legal team.</li>
                </ul>

                <h3>Compensation</h3>
                <ul>
                    <li><strong>Mass Tort:</strong> Compensation and settlements are determined individually, considering the unique circumstances and harm suffered by each plaintiff.</li>
                    <li><strong>Class Action Lawsuits:</strong> Compensation and settlements are typically distributed uniformly among all class members, often on a pro-rata basis.</li>
                </ul>

                <h3>Applicability</h3>
                <ul>
                    <li><strong>Mass Tort:</strong> Ideal when cases involve varying degrees of harm or distinct circumstances for each plaintiff.</li>
                    <li><strong>Class Action Lawsuits:</strong> Effective when numerous claimants have similar claims and a uniform resolution is practical.</li>
                </ul>

                <h3>Efficiency</h3>
                <ul>
                    <li><strong>Mass Tort:</strong> May be more time-consuming and complex due to individual case management.</li>
                    <li><strong>Class Action Lawsuits:</strong> Generally more efficient in terms of time and resources as it consolidates claims into one proceeding.</li>
                </ul>

                <p className="conclusion">
                    Understanding these differences is crucial for both plaintiffs and defendants when determining the most appropriate legal strategy for addressing a collective grievance or harm.
                </p>
            </div>
        </section>
    );
};

export default Home4;
