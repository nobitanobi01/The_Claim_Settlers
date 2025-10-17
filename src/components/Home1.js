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
                    predators have tried to exploit them. Families may be eligible for
                    <strong style={{ textDecoration: "underline" }}><mark> Significant Financial Compensation.</mark></strong>
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
                        <option>Emotional trauma</option>
                        <option>Depression or anxiety</option>
                        <option>Self-harm</option>
                        <option>Suicidal thoughts</option>
                        <option>Substance abuse</option>
                        <option>Sexual exploitation</option>
                        <option>Physical injury</option>
                        <option>Loss of education or opportunities</option>
                        <option>PTSD</option>
                        <option>Online harassment</option>
                        <option>Other</option>
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
