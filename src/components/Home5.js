import React from "react";
import "../styles/Home5.css";
import logo from '../assets/logo.png';
const Home5 = () => {
    return (
        <section className="disclaimer-section">
            <div className="image">
                <img src={logo} alt="Logo" />
            </div>
            <p>
                ClaimSettler.com is owned and operated by The Claim Settler, located at 1712 Pioneer Ave.
                Suite 2329, Cheyenne, Wyoming 82001. The Claim Settler is a legal advertising service and
                not a law firm or a lawyer referral service. We connect individuals seeking legal services
                with participating attorneys who pay to be included in this service.
                Submitting a form, calling a listed number, or contacting us does not create an
                attorney-client relationship. An attorney-client relationship is only formed through
                a written agreement with a law firm. Do not submit confidential or time-sensitive information.
                This communication does not offer medical advice—never stop taking a prescribed medication
                without consulting a doctor. Information submitted through this site may not be protected
                by attorney-client privilege and is subject to our Privacy Policy.
                Do not submit confidential or time-sensitive information through this site. Some cases
                may be referred to co-counsel or handled jointly, subject to client consent and in compliance
                with applicable state laws. Participating attorneys may not be available in all states.
                This advertisement may not be available in jurisdictions where it violates local rules.
                No representation is made that the quality of services is greater than those of other attorneys.
                Images may be dramatized or depict models. A complete list of participating attorneys is available here.
                Free background information is available upon request. Advertising paid for by participating attorneys in a
                joint advertising program.
            </p>
        </section>
    );
};

export default Home5;
