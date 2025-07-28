import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/App.css';

const FormPengumpulanSampahPage = () => {
  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Pengumpulan Sampah</h2>
        <form className="form-box">
          <label>
            Jenis Sampah
            <select required>
              <option value="">--Pilih Jenis Sampah--</option>
              <option value="organik">Organik</option>
              <option value="anorganik">Anorganik</option>
            </select>
          </label>
          <label>
            Jumlah Sampah
            <input type="number" required />
          </label>
          <label>
            Tanggal Pengumpulan
            <input type="date" required />
          </label>
          <label>
            Alamat
            <textarea required />
          </label>
          <label>
            Catatan Tambahan
            <input type="text" />
          </label>
          <button type="submit" className="auth-button">Kirim</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default FormPengumpulanSampahPage;
