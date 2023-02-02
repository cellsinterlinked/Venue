import React from 'react'
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer-container">
            <div className="contact-footer">
                <h3>Ready to set a date?</h3>
                <button className="footer-button_contact">Get Started</button>
            </div>
            <div className="nav-footer">
                <div className="footer-column">
                    <p>INFORMATION</p>
                    <a href="/">About</a>
                    <a  href="/">Photos</a>
                    <a  href="/">Home</a>
                </div>
                <div className="footer-column">
                    <p>BOOKING</p>
                    <a  href="/">Pricing</a>
                    <a  href="/">Availability</a>
                    <a  href="/">Contact</a>
                </div>
                <div className="footer-column">
                    <p>FEEDBACK</p>
                    <a  href="/">Send A Review</a>
                    <a  href="/">Contact Owner</a>
                    <a  href="/">Socials</a>

                </div>
            </div>
            <div className="details-footer">
                <div className="icon-footer">
                    <h3>Club Dapper</h3>
                    <h2>CD</h2>
                </div>
                <div>
                <p>Copyright © 2023 Club Dapper, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;