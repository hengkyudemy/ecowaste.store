import React, { useRef, useState } from 'react';
import { FaUser, FaCamera } from 'react-icons/fa';
import '../styles/App.css';

const ProfilePicture = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setImageUrl(imageURL);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-picture-wrapper">
      <div className="profile-picture" onClick={triggerFileInput}>
        {imageUrl ? (
          <img src={imageUrl} alt="User" className="profile-img" />
        ) : (
          <FaUser size={60} color="#666" />
        )}
      </div>
      <button className="upload-button" onClick={triggerFileInput}>
        <FaCamera /> Ubah Foto
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleImageUpload}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ProfilePicture;