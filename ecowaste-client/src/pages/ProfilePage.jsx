import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProfilePicture from '../components/ProfilePicture';
import BadgePoint from '../components/BadgePoint';
import '../styles/App.css';

const ProfilePage = () => {
  const [name, setName] = useState('Nama User');
  const [email, setEmail] = useState('EmailUser@gmail.com');
  const [photo, setPhoto] = useState(null);
  const [totalSampah, setTotalSampah] = useState(0);

  const handlePhotoChange = (file) => {
    setPhoto(file);
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Profile</h2>
        <div className="profile-header">
          <ProfilePicture photo={photo} onPhotoChange={handlePhotoChange} />
          <h3 className="profile-name">{name}</h3>
        </div>

        <form className="profile-form">
          <label>Nama Lengkap</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </form>

        <BadgePoint totalSampah={totalSampah} />
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;