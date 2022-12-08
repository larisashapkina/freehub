import React from 'react';

import './CompanyIntro.scss';
import { Link } from "react-router-dom";

const styles = {
    'background-image' :  'url("/CompanyIntroBackground.PNG")'
}

function CompanyIntro(props) {
    return (
        <div className="companyIntro" style={styles}>
            <div className="companyIntro__content">
                <div className="companyIntro__intro">Our Introduction</div>
                <div className="companyIntro__name">FreeHub</div>
                <div className="companyIntro__greeting">Hello, our webiste to trade used things for other awsome things! I hope you like it! Welcome guest!</div>
                    <Link to={`/listings`}>
                        <div className="companyIntro__button">Learn More</div>
                    </Link>
            </div>
        </div>
    );
}

export default CompanyIntro;