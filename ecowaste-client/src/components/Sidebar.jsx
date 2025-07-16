import React from 'react';
import '../styles/App.css';

const Sidebar = () => {
  return (
    <aside className="eco-sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-profile-pic">Profile User</div>
        <p className="sidebar-username">Nama User</p>
      </div>
      <nav className="sidebar-nav">
        <a href="/profile">Profile</a>
        <a href="/informasi" className="active">Informasi Sampah</a>
        <a href="/riwayat">Riwayat Pengumpulan</a>
        <a href="/poin">Poin</a>
        <a href="/pengumpulan">Pengumpulan Sampah</a>
      </nav>
    </aside>
  );
};

export default Sidebar;