import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css';

const Sidebar = () => {
  return (
    <aside className="eco-sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-profile-pic">Profile User</div>
        <p className="sidebar-username">Nama User</p>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          Profile
        </NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
          Informasi Sampah
        </NavLink>
        <NavLink to="/riwayat" className={({ isActive }) => isActive ? 'active' : ''}>
          Riwayat Pengumpulan
        </NavLink>
        <NavLink to="/poin" className={({ isActive }) => isActive ? 'active' : ''}>
          Poin
        </NavLink>
        <NavLink to="/pengumpulan" className={({ isActive }) => isActive ? 'active' : ''}>
          Pengumpulan Sampah
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
