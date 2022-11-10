import React from "react";
import logo from '../assets/images/logo.png';

const navbar = () => {
    return (
    <navbar>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Exercises</li>
                <li>Classes</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    </navbar>
    );
};

export default navbar;
