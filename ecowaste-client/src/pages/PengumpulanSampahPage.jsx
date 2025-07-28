import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import '../styles/App.css';

const PengumpulanSampahPage = () => {
  const navigate = useNavigate();
  const [pengumpulanList, setPengumpulanList] = useState([]);

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
            <div key={index}>
              <p>{item.jenis} - {item.jumlah} kg</p>
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
