import React from 'react';
import '../styles/Footer.css';
import Logo from "../Logotype 2-02.png";

const Footer = () => {
    return (
        <footer id="FooterContainer">
            <section id="FooterLinks">
                <div className="footer-column">
                    <h3>Shop</h3>
                    <ul>
                        <li>Pod de inmersión en frío </li>
                        <li>Pod de inmersión en frío + Covertor</li>
                        <li>Pod de inmersión en frío + Covertor + Mochila para transporte</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Info</h3>
                    <ul>
                        <li>Sobre Nosotros</li>
                        <li>Envíos & Devoluciones</li>
                        <li>Términos & Condiciones </li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: contacto@polarplungecompany.com </li>
                        <li>Teléfono: 095786382 / 095444525 </li>
                    </ul>
                </div>
                {/* <div className="footer-column">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div> */}
            </section>
            <section id="FooterInfo">
                <img src={Logo} id="FooterLogo"></img>
                <p id="CompanyInfo"> © 2023, Polar. - Company No: 5478956748 </p>
            </section>
        </footer>
    );
};

export default Footer;
