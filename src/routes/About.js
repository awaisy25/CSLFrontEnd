import React from "react";
import './styles/Common.scss';
import './styles/About.scss';
function About() {
    const links =
    {
       ICU: "https://www.4icu.org/us/a-z/",
       gForms: "https://docs.google.com/forms/d/e/1FAIpQLScYlvtxvNgWn5zEEONSpHGMWjfQ5R0HlO_-XH8jyao96V0XKw/viewform?usp=sf_link"

    };
    return (
<div className="About-container">
    <div className="paragraph-section">
        <h3 className="page-header">About Us:</h3>
        <p>The problem we saw is many students were choosing colleges without calculating how much they will be in debt after college. 
            Once they have graduated they don't realize how their career’s play a role in the amount of time it will take to pay off their student debt. 
            Our goal is to provide a service that helps students make the best financial decisions towards their education and careers.
        </p>
    </div>
    <div className="paragraph-section">
        <h3 className="page-header">For Universities:</h3>
        <p>University’s tuition prices were researched and collected by searching through the listing of United States Universities on <a href={links.ICU} className="link" target="blank">https://www.4icu.org/us/a-z/.</a>
            If your University tuition pricing is not accurate or not up to date please contact us.</p>
    </div>
    <div className="paragraph-section">
        <h3 className="page-header">Feedback:</h3>
        <p>Please click <a target="blank" className="link" href={links.gForms}>here</a> to provide some feedback on our site. This will help us in our goals for helping students. 
        </p>
        </div>
    <div className="paragraph-section">
        <h3 className="page-header">Contact Us:</h3>
        <p>For any questions, issues or feedback please email us at <span className="link">contact@calculatestudenloans.com</span></p>
    </div>
</div>

    )
}

export default About;