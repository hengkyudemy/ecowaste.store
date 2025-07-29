import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import '../styles/App.css';

const PengumpulanSampahPage = () => {
  const navigate = useNavigate();
  const [pengumpulanList, setPengumpulanList] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('pengumpulanList') || '[]');
    setPengumpulanList(data);
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Pengumpulan Sampah</h2>
        {pengumpulanList.length === 0 ? (
          <p>Tidak ada pengumpulan sampah saat ini</p>
        ) : (
          pengumpulanList.map((item, index) => (
            <div className="pengumpulan-card" key={index}>
              <h3>
                {item.status === 'Pengumpulan Sampah sudah diambil'
                  ? 'Pengumpulan Sampah sudah Selesai'
                  : 'Pengumpulan Sampah dalam Proses'}
              </h3>
              <div className="pengumpulan-info">
                <p><strong>Jenis:</strong> {item.jenis}</p>
                <p><strong>Jumlah:</strong> {item.jumlah} kg</p>
                <p><strong>Alamat:</strong> {item.alamat}</p>
                <p><strong>Status:</strong> {item.status}</p>
                {item.tanggal && <p><strong>Tanggal:</strong> {item.tanggal}</p>}
                {item.catatan && <p><strong>Catatan:</strong> {item.catatan}</p>}
              </div>
            </div>
          ))
        )}
        <AddButton onClick={() => navigate('/pengumpulan/tambah')} />
      </main>
      <Footer />
    </div>
  );
};

export default PengumpulanSampahPage;