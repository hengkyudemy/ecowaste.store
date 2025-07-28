import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PengumpulanSampahPage from './pages/PengumpulanSampahPage';
import FormPengumpulanSampahPage from './pages/FormPengumpulanSampahPage';



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />   {/* WAJIB ADA */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/pengumpulan" element={<PengumpulanSampahPage />} />
      <Route path="/pengumpulan/tambah" element={<FormPengumpulanSampahPage />} />
    </Routes>
  );
}

export default App;
