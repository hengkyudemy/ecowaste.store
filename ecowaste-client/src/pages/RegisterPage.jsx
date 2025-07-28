import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register } from '../utils/network-data';
import logo from '../assets/Logo.png';
import '../styles/App.css';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('pengguna');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Password dan konfirmasi password tidak sama');
      return;
    }

    if (role !== 'pengguna') {
      setError('Saat ini hanya pengguna yang dapat mendaftar.');
      return;
    }

    const { error: registerError, message } = await register({ name, email, password });
    if (registerError) {
      setError(message || 'Registrasi gagal');
      return;
    }

    navigate('/login');
  };

  return (
    <section className="register-page">
      <div className="branding">
        <div className="logo-title">
          <img src={logo} alt="EcoWaste" className="logo" />
          <h1 className="eco-title">EcoWaste</h1>
        </div>
        <h2 className="tagline">Satu Klik untuk Bumi yang Lebih Baik</h2>
      </div>

      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Konfirmasi Kata Sandi"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div className="role-options">
            <label className="radio-label">
              <input
                type="radio"
                value="pengguna"
                checked={role === 'pengguna'}
                onChange={() => setRole('pengguna')}
              />
              <span className="radio-text">Pengguna</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="dinas"
                checked={role === 'dinas'}
                onChange={() => setRole('dinas')}
              />
              <span className="radio-text">Dinas Lingkungan Hidup</span>
            </label>
          </div>

          <button type="submit" className="auth-button">Daftar</button>
        </form>
        <p className="auth-link">
          Sudah punya akun? <Link to="/login">Login di sini</Link>
        </p>
      </div>
    </section>
  );
}

export default RegisterPage;
