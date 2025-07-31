import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrashContext } from '../contexts/TrashContext';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/App.css';

const FormPengumpulanSampahPage = () => {
  const { addPengumpulan } = useContext(TrashContext);
  const navigate = useNavigate();

  const [jenis, setJenis] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [alamat, setAlamat] = useState('');
  const [catatan, setCatatan] = useState('');

  const formatTanggal = (inputDate) => {
    const dateObj = new Date(inputDate);
    const bulanIndo = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = bulanIndo[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem('pengumpulanList') || '[]');
    const newId = 'PS' + String(data.length + 1).padStart(4, '0');

    const newData = {
      id: newId,
      jenis,
      jumlah,
      tanggal: formatTanggal(tanggal),
      alamat,
      catatan,
      status: 'Pengumpulan Sampah diterima',
    };

    if (typeof addPengumpulan === 'function') {
      addPengumpulan(newData);
    } else {
      data.push(newData);
      localStorage.setItem('pengumpulanList', JSON.stringify(data));
    }

    navigate('/pengumpulan');
  };

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Pengumpulan Sampah</h2>
        <form className="form-box" onSubmit={handleSubmit}>
          <label>
            Jenis Sampah
            <select value={jenis} onChange={(e) => setJenis(e.target.value)} required>
              <option value="">--Pilih Jenis Sampah--</option>
              <option value="Organik">Organik</option>
              <option value="Anorganik">Anorganik</option>
              <option value="B3">B3</option>
            </select>
          </label>
          <label>
            Jumlah Sampah
            <input
              type="number"
              value={jumlah}
              onChange={(e) => setJumlah(e.target.value)}
              required
              min="0.1"
              step="0.1"
            />
          </label>
          <label>
            Tanggal Pengumpulan
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              min={getTodayDate()}
              required
            />
          </label>
          <label>
            Alamat
            <textarea
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              required
            />
          </label>
          <label>
            Catatan Tambahan
            <input
              type="text"
              value={catatan}
              onChange={(e) => setCatatan(e.target.value)}
            />
          </label>
          <button type="submit" className="auth-button">Kirim</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default FormPengumpulanSampahPage;