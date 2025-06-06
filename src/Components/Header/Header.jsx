import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const TITLES = ['ML Engineer', 'Front End Developer', 'Software Engineer'];

const Header = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev + currentTitle.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setDisplayedTitle('');
        setCharIndex(0);
        setTitleIndex(prev => (prev + 1) % TITLES.length);
      }, 1500);
      return () => clearTimeout(pause);
    }
  }, [charIndex, titleIndex]);

  return (
    <header className="header">
      <div className="header__left">
        <h1>{displayedTitle}</h1>
        {/* <span className="blinking-cursor">|</span> */}
      </div>

      <nav className="header__right">
        {['about', 'skills', 'project', 'exp', 'contact'].map((section, idx) => (
          <Link
            key={section}
            to={section}
            smooth
            duration={500}
            offset={-100 - (idx === 0 ? 50 : 0)}
          >
            <h3>{section === 'exp' ? 'Education' : section.charAt(0).toUpperCase() + section.slice(1)}</h3>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
