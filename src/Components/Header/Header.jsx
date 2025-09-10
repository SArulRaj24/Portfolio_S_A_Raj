import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const TITLES = ['ML Engineer', 'Front End Developer', 'Software Engineer'];

const Header = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];

    let typingSpeed = isDeleting ? 50 : 100; // faster when deleting

    if (!isDeleting && charIndex < currentTitle.length) {
      // Typing characters
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev + currentTitle.charAt(charIndex));
        setCharIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting characters
      const timeout = setTimeout(() => {
        setDisplayedTitle(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at end before deleting
      const pause = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(pause);
    } else if (isDeleting && charIndex === 0) {
      // Switch to next title
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % TITLES.length);
    }
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <header className="header">
      <div className="header__left">
        <h1>{displayedTitle}<span className="blinking-cursor">|</span></h1>
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
