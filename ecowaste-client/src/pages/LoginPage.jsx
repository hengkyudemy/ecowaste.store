import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login } from '../utils/network-data';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../assets/Logo.png';
import '../styles/App.css';

function LoginPage() {
  const { loginSuccess } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('pengguna');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const { error, data, message } = await login({ email, password });
    if (error) {
      setError(message || 'Email atau password salah');
      return;
    }

    if (role !== 'pengguna') {
      setError('Login untuk dinas belum tersedia');
      return;
    }

    await loginSuccess(data.accessToken);
    navigate('/');
  };

  return (
    <section className="login-page">
      <div className="branding">
        <div className="logo-title">
          <img src={logo} alt="EcoWaste" className="logo" />
          <h1 className="eco-title">EcoWaste</h1>
        </div>
        <h2 className="tagline">Satu Klik untuk Bumi yang Lebih Baik</h2>
      </div>

      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmitHandler}>
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Kata Sandi'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" className="auth-button">Masuk</button>
        </form>
        <p className="auth-link">
          Belum punya akun? <Link to="/register">Daftar di sini</Link>
        </p>
      </div>
    </section>
  );
}

export default LoginPage;