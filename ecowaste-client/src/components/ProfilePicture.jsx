import React, { useRef } from 'react';
import { FaUser, FaCamera } from 'react-icons/fa';
import '../styles/App.css';

const ProfilePicture = ({ photo, onPhotoChange, size = 120 }) => {
  const fileInputRef = useRef();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (onPhotoChange) {
          onPhotoChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="profile-picture-wrapper">
      <div
        className="profile-picture"
        onClick={onPhotoChange ? triggerFileInput : undefined}
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          background: '#eee',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onPhotoChange ? 'pointer' : 'default',
        }}
      >
        {photo ? (
          <img
            src={photo}
            alt="User"
            className="profile-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <FaUser size={size * 0.6} color="#666" />
        )}
      </div>
      {onPhotoChange && (
        <>
          <button className="upload-button" onClick={triggerFileInput} type="button">
            <FaCamera /> Ubah Foto
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </>
      )}
    </div>
  );
};

export default ProfilePicture;