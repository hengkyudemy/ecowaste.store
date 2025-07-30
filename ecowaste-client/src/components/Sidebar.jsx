import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePicture from './ProfilePicture';
import '../styles/App.css';

const Sidebar = () => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const storedPhoto = localStorage.getItem('profilePhoto');
    setPhoto(storedPhoto);
  }, []);

  return (
    <aside className="eco-sidebar">
      <div className="sidebar-profile">
        <ProfilePicture photo={photo} size={64} />
        <p className="sidebar-username">Nama User</p>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
          Profile
        </NavLink>
        <NavLink to="/informasi" className={({ isActive }) => isActive ? 'active' : ''}>
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