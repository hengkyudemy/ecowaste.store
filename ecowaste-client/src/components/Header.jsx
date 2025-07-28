import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import '../styles/App.css';
import SearchBar from './SearchBar';
import LogoutButton from './LogoutButton';

const Header = () => {
  return (
    <header className="eco-header">
      {/* Logo dan judul EcoWaste bisa diklik */}
      <div className="eco-header-left">
        <Link to="/" className="eco-logo-link">
          <img src={logo} alt="EcoWaste" className="eco-logo" />
          <h1 className="eco-title-header">EcoWaste</h1>
        </Link>
      </div>

      {/* Gabungkan Search dan Tombol di kanan */}
      <div className="eco-header-right-wrapper">
        <div className="eco-header-center">
          <SearchBar />
        </div>
        <div className="eco-header-right">
          <button className="eco-header-button">Notifikasi</button>
          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

