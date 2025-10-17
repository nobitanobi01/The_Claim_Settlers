import React from "react";
import "../styles/Home3.css";
import { useNavigate } from "react-router-dom";

const Home3 = () => {
    const navigate = useNavigate();

    const goToHome1 = () => {
        navigate("/home1");
       
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);
    };
    return (
        <section className="roblox-section">
            <div className="container">
                <h2 className="section-heading">
                    Was your child harmed while using Roblox or contacted by predators through Discord?
                </h2>

                <p className="intro">
                    Families across the country are filing lawsuits against Roblox Corporation, claiming the gaming platform exposed children to unsafe environments, including contact with predators using apps like Discord.
                </p>

                <p className="intro">
                    If your child experienced emotional distress, in-game addiction, or abuse linked to Roblox and Discord, you may be able to take legal steps now.
                </p>

                <p>Take the first step – <span ><button className="cta-button" onClick={goToHome1}>  Click HERE for a FREE Case Review!</button></span></p>

                <h3 className="sub-heading">What Happened on Roblox and Discord?</h3>
                <p>
                    Roblox markets itself as a creative and social experience for kids. But many families are now speaking out after discovering just how unsafe the platform can be—especially when linked to external chat apps like Discord.
                </p>
                <p>
                    In recent cases, predators posed as young players and used both Roblox and Discord to gain access to children. Parents have reported everything from grooming and solicitation to obsessive gaming behavior and financial loss from in-game purchases.
                </p>

                <h4 className="sub-sub-heading">Key Concerns Involving Roblox and Discord:</h4>
                <ul>
                    <li>Addictive gameplay designed to keep kids online for hours</li>
                    <li>Direct messaging features that allow strangers to contact minors</li>
                    <li>Easy access to Discord, where contact continues without moderation</li>
                    <li>Limited safety measures or effective age restrictions</li>
                    <li>Emotional, financial, and psychological harm to children</li>
                </ul>

                <p>If your child experienced any of these harms while using Roblox or Discord, you may qualify for compensation.</p>
                <button className="cta-button" onClick={goToHome1}> Find Out If You Qualify – Click HERE to Speak with a Lawsuit Intake Specialist Today!</button>

                <h3 className="sub-heading">Why Are Families Suing Roblox?</h3>
                <p>
                    Roblox encourages social interaction, but its open platform design has also created opportunities for predators and introduced addictive features that affect children’s mental and emotional health.
                </p>

                <h4 className="sub-sub-heading">Lawsuits allege that Roblox Corporation:</h4>
                <ul>
                    <li>Knew about the risks to children but failed to prevent them</li>
                    <li>Designed addictive systems that encourage compulsive behavior</li>
                    <li>Allowed unsafe interactions without meaningful safeguards</li>
                    <li>Profited from children through in-game purchases and Robux sales</li>
                </ul>
                <p>Some children have experienced sleep disruption, anxiety, isolation, academic decline, or obsessive gaming habits after using the platform. Others were contacted through Roblox and then directed to Discord for private conversations.</p>
                <p>If your child was harmed in these ways, a lawsuit may help you recover damages.</p>
                <button className="cta-button" onClick={goToHome1}> Click HERE to See If You Qualify for a Roblox Discord Lawsuit!</button>

                <h3 className="sub-heading">What Can Families Recover?</h3>
                <p>Roblox Discord abuse lawsuits seek financial relief for families affected by the harm. You may be eligible to recover damages for:</p>
                <ul>
                    <li>Mental health treatment or therapy expenses</li>
                    <li>Money lost through unauthorized in-game purchases</li>
                    <li>Time missed from work due to caregiving needs</li>
                    <li>Emotional distress suffered by your child or your family</li>
                    <li>Punitive damages to hold the company accountable</li>
                </ul>
                <p>Many parents had no idea Roblox or Discord posed this kind of risk. The harms being reported go far beyond entertainment—and the effects can linger without intervention.</p>
                <button className="cta-button" onClick={goToHome1}>Don’t Wait – Click HERE to Connect With an Experienced Attorney Today!</button>


                <h3 className="sub-heading">Why Now?</h3>
                <p>
                    As more families come forward, the lawsuits continue to grow. Filing now may help you:
                </p>
                <ul>
                    <li>Gain financial relief for the harm your family has endured</li>
                    <li>Add pressure on Roblox Corporation to fix its unsafe systems</li>
                    <li>Prevent further harm to children still using the platform</li>
                </ul>
                <p>
                    Time limits may apply based on where you live and when the harm occurred, so it's important to act without delay.
                </p>
                <h3 className="sub-heading">How InjuryClaims.com Can Help</h3>
                <p>
                    At InjuryClaims.com, we connect parents and guardians with attorneys who are actively filing lawsuits against Roblox and similar companies. Our legal partners understand how deeply this issue can affect families and are ready to help you hold the right people accountable.
                </p>
                <p>Take the first step toward protecting your child and learning your rights- <button className="cta-button" onClick={goToHome1}>Fill out our form for a FREE case review today!</button></p>
            </div>
        </section>
    );
};

export default Home3;
