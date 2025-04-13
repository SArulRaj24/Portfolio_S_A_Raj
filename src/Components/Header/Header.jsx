import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css'; // Optional

const Header = () => {
  
  return (
    <div className="header">
    <div className="header__left">
        <h1>
            ML Engineer
        </h1>
    </div>
        <div className="header__right">
            <Link to="about" smooth={true} duration={500} offset={-150}>
                <h3>About me</h3>
            </Link>
            <Link to="skills" smooth={true} duration={500} offset={-120}>
                <h3>Skills</h3>
            </Link>
            <Link to="project" smooth={true} duration={500} offset={-100}>
                <h3>Project</h3>
            </Link>
            <Link to="exp" smooth={true} duration={500} offset={-100}>
                <h3>Education</h3>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-100}>
            <h3>Contact</h3>
            </Link>
            

        </div>
    

</div>
  );
}


export default Header;
