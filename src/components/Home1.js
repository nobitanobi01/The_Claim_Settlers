import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Home1.css";

const Home1 = () => {
    const [selectedPerson, setSelectedPerson] = useState("");
    const [hasLawyer, setHasLawyer] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [showContactForm, setShowContactForm] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    // Contact form fields
    const [contactData, setContactData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        state: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedPerson || !hasLawyer || !selectedOption) {
            setErrorMessage("⚠️ Please select all required options before continuing.");
            return;
        }
        setErrorMessage("");
        setShowContactForm(true);
    };

    const handleContactChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setShowPopup(true);

        const templateParams = {
            selectedPerson,
            selectedOption,
            hasLawyer,
            firstName: contactData.firstName,
            lastName: contactData.lastName,
            email: contactData.email,
            phone: contactData.phone,
            state: contactData.state,
            date: new Date().toLocaleString(),
        };

        emailjs
            .send(
                "service_jrvob9d", // EmailJS service ID
                "template_0dutvno", // Template ID
                templateParams,
                "brTOInCWBJlK4szm_" // Public key
            )
            .then(
                () => {
                    window.location.href =
                        window.location.origin + window.location.pathname;
                  
                },
                (error) => {
                    alert("Email send failed:", error);
                    setShowPopup(false);
                }
            );
    };

    return (
        <div className="home-container">
            <div className="home-left">
                <h2>Attention: Roblox & Discord Abuse Victims</h2>
                <p className="home-left-heading">
                    Online Predators Are Targeting Kids Who Play Roblox Using Discord –
                    Could Your Child Be at Risk?
                </p>
                <p className="home-left-subheading">
                    If your child plays <strong>Roblox</strong> and uses <strong>Discord</strong>,
                    families may be eligible for <strong><mark>Significant Financial Compensation.</mark></strong>
                </p>
            </div>

            <div className="home-right">
                <form className="home-form" onSubmit={!showContactForm ? handleSubmit : handleContactSubmit}>
                    {!showContactForm ? (
                        <>
                            <div className="home-form-heading">
                                <h3>You May Qualify for Compensation</h3>
                                <p className="subheading">
                                    If Qualified, Get an immediate Free <strong>Phone</strong> Consultation
                                </p>
                            </div>

                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            <div className="home-form-heading-2">
                                <label>Did you or a child suffer sexual exploitation or sextortion through Roblox?</label>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`blue-btn ${selectedPerson === "self" ? "selected" : ""}`}
                                        onClick={() => setSelectedPerson("self")}
                                    >
                                        {selectedPerson === "self" && <i className="fas fa-check" style={{ marginRight: "8px" }}></i>}
                                        Myself
                                    </button>
                                    <button
                                        type="button"
                                        className={`blue-btn ${selectedPerson === "child" ? "selected" : ""}`}
                                        onClick={() => setSelectedPerson("child")}
                                    >
                                        {selectedPerson === "child" && <i className="fas fa-check" style={{ marginRight: "8px" }}></i>}
                                        My Child
                                    </button>
                                </div>

                                <label>Which of the following best describes the most serious injury you experienced?</label>
                                <select
                                    required
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option>Rape or statutory rape</option>
                                    <option>Attempted rape / sexual assault</option>
                                    <option>Sexual assault (touching, penetration, or oral)</option>
                                    <option>Sex trafficking</option>
                                    <option>Sextortion / sexual extortion</option>
                                    <option>Sent or received explicit images</option>
                                    <option>Grooming that caused harm</option>
                                    <option>Mental health issues (depression, PTSD, etc.)</option>
                                    <option>Suicide or attempted suicide</option>
                                    <option>Physical or emotional harm / changes</option>
                                    <option>None of the above</option>
                                </select>

                                <label>Do you currently have a lawyer representing your claim?</label>
                                <div className="button-group">
                                    <button
                                        type="button"
                                        className={`blue-btn ${hasLawyer === "yes" ? "selected" : ""}`}
                                        onClick={() => setHasLawyer("yes")}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        className={`blue-btn ${hasLawyer === "no" ? "selected" : ""}`}
                                        onClick={() => setHasLawyer("no")}
                                    >
                                        No
                                    </button>
                                </div>

                                <button type="submit" className="green-btn">Do I Qualify</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="home-form-heading">
                                <h3>Your Case Results Are Ready!</h3>
                                <p className="subheading">
                                    Receive your case results instantly by submitting your contact information below!
                                </p>
                            </div>

                            <div className="home-form-heading-2">
                                <input name="firstName" type="text" required placeholder="Enter your first name" onChange={handleContactChange} />
                                <input name="lastName" type="text" required placeholder="Enter your last name" onChange={handleContactChange} />
                                <input name="email" type="email" required placeholder="Enter your email" onChange={handleContactChange} />
                                <input name="phone" type="tel" required placeholder="Enter your phone number" onChange={handleContactChange} />
                                <input name="state" type="text" required placeholder="Enter your state" onChange={handleContactChange} />

                                <button type="submit" className="green-btn">
                                    Connect with Us!
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
            {showPopup && (
                <div className="popup-message">
                    Message Submitted. Our team will connect you soon.
                    <br />
                    Redirecting
                </div>
            )}
        </div>
    );
};

export default Home1;
