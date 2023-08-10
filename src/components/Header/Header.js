import React from "react";

const Header =()=> {
    
        return (
            <nav className="navbar">
                <ul className="navbar-list" id="navList">
                    <li className="underline-animation"> <a href="#intro"><span className="number">01.</span>Home</a></li>
                    <li className="underline-animation"> <a href="#about-me"><span className="number">02.</span>About</a></li>
                    <li className="underline-animation"> <a href="#my-work"><span className="number">03.</span>Work</a></li>
                    <li className="underline-animation"> <a href="#contact-me"><span className="number">04.</span>Contact</a></li>
                </ul>
            </nav>
        )
    
}

export default Header; 