import React, { useState, useEffect } from 'react';
import "../Styles/Header.css";
import Logo from "../Logotype 2-02.png";

const Header = ({ background }) => {
    const [scrollBackground, setScrollBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setScrollBackground(true);
            } else {
                setScrollBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ backgroundColor: background }}>
            <img src={Logo} id="HeaderLogo" alt="Logo"></img>
            <nav>
                <ul className={`nav-links ${scrollBackground ? 'black' : ''}`}>
                    <li>
                        <a href="/">PODS</a>
                    </li>
                    <li>
                        <a href="/"> BENEFICIOS </a>
                    </li>
                    <li>
                        <a href="/">SOBRE NOSOTROS</a>
                    </li>
                </ul>
            </nav>
            <div className={`burger-menu ${scrollBackground ? 'black' : ''}`}>
                <label htmlFor="toggle" className="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="dropdown-menu">
                    <a href="/">Option 1</a>
                    <a href="/">Option 2</a>
                    <a href="/">Option 3</a>
                </div>
            </div>
        </header>
    );
};

export default Header;
