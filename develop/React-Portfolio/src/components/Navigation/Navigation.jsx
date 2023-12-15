// Navbar.js
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navigation = () => {
  useEffect(() => {
    const initialSection = document.getElementById('initialSection');
    initialSection.classList.add('initial');

    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
      link.addEventListener('click', () => {
        links.forEach(otherLink => otherLink.classList.remove('initial'));
      });
    });
  }, []);


  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/about" id='initialSection'>About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );

};

export default Navigation;
