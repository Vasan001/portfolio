import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Toggle the menu for mobile view
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Change navbar background color on scroll
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={sticky ? 'sticky' : ''}>
      <div className="navbar">
        <div className="logo">
          <img className="logo" src="Images/logo.png" height="50px" width="50px" alt="Logo" />
          <a href="#home" style={{ paddingLeft: '30px' }}>Portfolio</a>
        </div>
        
        {/* Menu for mobile view */}
        <div className="menu-btn" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        {/* Desktop Navbar links */}
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="media-icons">
          <a href="https://www.linkedin.com/in/k-j-vasan-ab3924236" target="_blank"
        rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={{ fontSize: '30px' }}></i>
          </a>
          <a href="mailto:kjvasan28503@gmail.com">
            <i className="fa fa-envelope" style={{ fontSize: '30px' }}></i>
          </a>
        </div>
      </div>

      {/* Side Menu for Mobile */}
      <div className={`side-menu ${menuActive ? 'open' : ''}`}>
        
        <div className="menu-header">
          
          <div className="cancel-btn" onClick={toggleMenu}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <div className="title">
        <a href="#home" onClick={toggleMenu}>Portfolio</a>
        </div>
        <ul className="menu-items">
        
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#services" onClick={toggleMenu}>Certifications</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
