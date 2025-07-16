import React from 'react';
import logo from '../assets/Logo.png';
import '../styles/App.css';

const Header = () => {
  return (
    <header className="eco-header">
      <div className="eco-header-left">
        <img src={logo} alt="EcoWaste" className="eco-logo" />
        <h1 className="eco-title-header">EcoWaste</h1>
      </div>
      <div className="eco-header-center">
        <input type="text" className="eco-search-input" placeholder="Search..." />
        <button className="eco-search-button">🔍</button>
      </div>
      <div className="eco-header-right">
        <button className="eco-header-button">Notifikasi</button>
        <button className="eco-header-button">Log Out</button>
      </div>
    </header>
  );
};

export default Header;
