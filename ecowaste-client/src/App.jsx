import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />   {/* WAJIB ADA */}
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
