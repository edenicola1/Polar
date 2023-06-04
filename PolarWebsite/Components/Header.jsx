import React from 'react';
import "../Styles/Header.css"

const Header = () => {
    return (
        <div id="header">
            <div className="logo">Logo</div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/">ICE BATHS</a>
                    </li>
                    <li>
                        <a href="/">THERAPY</a>
                    </li>
                    <li>
                        <a href="/">ABOUT US</a>
                    </li>
                </ul>
            </nav>
            <div className="burger-menu">
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
        </div>
    );
};

export default Header;
