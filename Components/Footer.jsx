import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div id="FooterContainer">
            <section id="FooterLinks">
                <div className="footer-column">
                    <h3>Shop</h3>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Info</h3>
                    <ul>
                        <li>About Us</li>
                        <li>Shipping</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: example@example.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Address: 123 Street, City</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
            <section id="FooterInfo">
                <p id="LogoFooter"> LOGO </p>
                <p id="CompanyInfo"> © 2023, Polar. - Company No: 5478956748 </p>
            </section>
        </div>
    );
};

export default Footer;
