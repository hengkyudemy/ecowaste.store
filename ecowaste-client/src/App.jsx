import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PengumpulanSampahPage from './pages/PengumpulanSampahPage';
import FormPengumpulanSampah from './pages/FormPengumpulanSampah';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import InformasiSampah from './pages/InformasiSampah';
import InfoDetail from './pages/InfoDetail';
import RiwayatPengumpulanSampah from './pages/RiwayatPengumpulanSampah';
import PoinPage from './pages/PoinPage';


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pengumpulan"
        element={
          <ProtectedRoute>
            <PengumpulanSampahPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pengumpulan/tambah"
        element={
          <ProtectedRoute>
            <FormPengumpulanSampah />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/informasi"
        element={
          <ProtectedRoute>
            <InformasiSampah />
          </ProtectedRoute>
        }
      />
      <Route
        path="/informasi/:id"
        element={
          <ProtectedRoute>
            <InfoDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/poin"
        element={
          <ProtectedRoute>
            <PoinPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/riwayat"
        element={
          <ProtectedRoute>
            <RiwayatPengumpulanSampah />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
