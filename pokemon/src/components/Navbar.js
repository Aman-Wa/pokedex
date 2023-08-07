import React from 'react'
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src="pokemon\src\assets\images\Logo.png" alt="Logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/legendaries">Legendaries</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;