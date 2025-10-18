import React, { useState } from "react";
import '../styles/Home1.css';
const Home1 = () => {
    const [selectedPerson, setSelectedPerson] = useState(""); // "self" or "child"
    const [hasLawyer, setHasLawyer] = useState(""); // "yes" or "no"
    const [selectedOption, setSelectedOption] = useState(""); // select option
    const [showContactForm, setShowContactForm] = useState(false); // to toggle forms
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all fields are selected
        if (!selectedPerson || !hasLawyer || !selectedOption) {
            setErrorMessage("⚠️ Please select all required option before continuing.");
            return;
        }
        // Clear any previous error and move to contact form
        setErrorMessage("");
        setShowContactForm(true);
    };

    return (
        <div className='home-container'>
            <div className='home-left'>
                <h2>Attention: Roblox & Discord Abuse Victims</h2>
                <p className='home-left-heading'>
                    Online Predators Are Targeting Kids Who Play RobloxUsing Discord-
                    Could Your Child Be at  Risk?
                </p>
                <p className='home-left-subheading'>
                    If your child plays <strong>Roblox</strong> and uses <strong>Discord</strong>, there's a chance online
                    predators have tried to exploit them. Families may be eligible for <strong style={{ textDecoration: "underline" }}><mark>Significant Financial Compensation.</mark></strong>
                </p>
            </div>

            <div className="home-right">
                <form className="home-form" onSubmit={handleSubmit}>
                    {!showContactForm ? (
                        <>
                            {/* Step 1: Qualification Questions */}
                            <div className="home-form-heading">
                                <h3>You May Qualify for Compensation</h3>
                                <p className="subheading">
                                    If Qualified, Get an immediate Free <strong>Phone</strong> Consultation
                                </p>
                            </div>
                            {errorMessage && (
                                    <p className="error-message">{errorMessage}</p>
                                )}
                            <div className="home-form-heading-2">
                                {/* Question 1 */}
                                <label>
                                    Did you or a child suffer sexual exploitation or sextortion through Roblox?
                                </label>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`blue-btn ${selectedPerson === "self" ? "selected" : ""}`}
                                        onClick={() => setSelectedPerson("self")}

                                    >
                                        {selectedPerson === "self" && (
                                            <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
                                        )}
                                        My Self
                                    </button>
                                    <button
                                        type="button"
                                        className={`blue-btn ${selectedPerson === "child" ? "selected" : ""}`}
                                        onClick={() => setSelectedPerson("child")}

                                    >
                                        {selectedPerson === "child" && (
                                            <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
                                        )}
                                        My Child
                                    </button>
                                </div>

                                {/* Question 2 */}
                                <label>
                                    Which of the following best describes the most serious injury you experienced as a result of the abuse?
                                </label>
                                <select
                                    required
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    <option>Rape or statutory rape</option>
                                    <option>Attempted rape / sexual assault</option>
                                    <option>Sexual assault (touching, penetration, or oral)</option>
                                    <option>Sex trafficking</option>
                                    <option>Sextortion / sexual extortion</option>
                                    <option>Sent or received explicit images</option>
                                    <option>Grooming that caused harm</option>
                                    <option>
                                        Mental health issues (depression, PTSD, self-harm, substance abuse)
                                    </option>
                                    <option>Suicide or attempted suicide</option>
                                    <option>Physical or emotional harm / changes</option>
                                    <option>None of the above</option>
                                </select>

                                {/* Question 3 */}
                                <label>Do you currently have a lawyer representing your claim?</label>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`blue-btn ${hasLawyer === "yes" ? "selected" : ""}`}
                                        onClick={() => setHasLawyer("yes")}

                                    >
                                        {hasLawyer === "yes" && (
                                            <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
                                        )}
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        className={`blue-btn ${hasLawyer === "no" ? "selected" : ""}`}
                                        onClick={() => setHasLawyer("no")}

                                    >
                                        {hasLawyer === "no" && (
                                            <i className="fas fa-check" style={{ marginRight: "8px" }}></i>
                                        )}
                                        No
                                    </button>
                                </div>
                                <button type="submit" className="green-btn">
                                    Do I Qualify
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Step 2: Contact Information Form */}
                            <div className="home-form-heading">
                                <h3>Your Case Results Are Ready!</h3>
                                <p className="subheading">
                                    Receive your case results instantly by submitting your contact information below!
                                </p>
                            </div>

                            <div className="home-form-heading-2">
                                <input type="text" required placeholder="Enter your first name" />

                                <input type="text" required placeholder="Enter your last name" />

                                <input type="email" required placeholder="Enter your email" />

                                <input type="tel" required placeholder="Enter your phone number" />

                                <input type="text" required placeholder="Enter your state" />

                                <p style={{ fontSize: "11px", color: "black", marginTop: "10px", lineHeight: "1.5" }}>
                                    By clicking the 'Get Your Results Now!'button below, you consent
                                    to receive automated phone calls or text messages, made by or on behalf of Claim Settlers
                                    and its<strong style={{ color: "blue" }}> Partners </strong>to the phone number provided above, regarding your potential
                                    case, legal services, and promotions/offers. Your consent is not a condition of any
                                    purchase of any goods or services. By clicking on the
                                    'Get Your Results Now!' below, you confirm you have read and agree
                                    to abide by our <strong style={{ color: "blue" }}>Terms & Conditions</strong> (including resolving all disputes through binding
                                    individual arbitration and including the E-SIGN consent) and our<strong style={{ color: "blue" }}> Privacy </strong> <strong style={{ color: "blue" }}>Policy</strong>. You
                                    understand there may be a charge by your wireless carrier for such communications. To
                                    unsubscribe at any time, reply "STOP". Message & Data rates may apply.
                                </p>

                                <button type="submit" className="green-btn">
                                    Get Your Results Now!
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Home1
