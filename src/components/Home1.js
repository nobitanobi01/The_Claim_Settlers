import React from 'react'
import '../styles/Home1.css';
const Home1 = () => {
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

            <div className='home-right'>
                <form className="home-form">
                    <div className='home-form-heading'>
                        <h3>You May Qualify for Compensation</h3>
                        <p className="subheading">
                            If Qualified, Get an immediate Free <strong>Phone</strong> Consultation
                        </p>
                    </div>

                    <div className='home-form-heading-2'>
                    <label>
                        Did you or a child suffer sexual exploitation or sextortion through Roblox?
                    </label>
                    <div className="button-group">
                        <button type="button" className="blue-btn">My Self</button>
                        <button type="button" className="blue-btn">My Child</button>
                    </div>

                    {/* Question 2 */}
                    <label>
                        Which of the following best describes the most serious injury you experienced as a result of the abuse?
                    </label>
                    <select required>
                        <option value="">Select an option</option>
                        <option>Rape or statutory rape</option>
                        <option>Attempted rape / sexual assault</option>
                        <option>Sexual assualt (touching, penetration, or oral)</option>
                        <option>Sex trafficking</option>
                        <option>Sextortion / sexual extortion</option>
                        <option>Sent or received explicit images</option>
                        <option>Grooming that caused harm </option>
                        <option>Mental health issues (depression, PTSD, self-harm, substance abuse)</option>
                        <option>Suicide or attempted suicide</option>
                        <option>Physical or emotional harm / changes</option>
                        <option>None of the above</option>
                    </select>

                    {/* Question 3 */}
                    <label>Do you currently have a lawyer representing your claim?</label>
                    <div className="button-group">
                        <button type="button" className="blue-btn">Yes</button>
                        <button type="button" className="blue-btn">No</button>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="green-btn">Do I Qualify</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home1
