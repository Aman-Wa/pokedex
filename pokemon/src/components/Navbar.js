import React from 'react'
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <img src="https://cdn.icon-icons.com/icons2/3914/PNG/512/pokemon_logo_icon_248810.png" alt="Logo" />
        </div>
        <div className="navbar-right">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/legendaries">Legendaries</Link></li>
            <li><Link to="/documentation">Documentation</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Navbar;