import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import PengumpulanSampahPage from './pages/PengumpulanSampahPage';
import FormPengumpulanSampah from './pages/FormPengumpulanSampah';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      {/* Login & Register bebas diakses */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Semua ini butuh login */}
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
    </Routes>
  );
}

export default App;
