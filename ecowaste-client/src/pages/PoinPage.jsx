import React, { useContext } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { TrashContext } from '../contexts/TrashContext';
import StarImage from '../assets/Star.png';
import '../styles/PoinPage.css';

const PoinPage = () => {
  const { pengumpulanList } = useContext(TrashContext);

  // Hitung total poin (10 poin per kg)
  const totalPoin = pengumpulanList.reduce((acc, item) => {
    const jumlahKg = Number(item.jumlah);
    if (!isNaN(jumlahKg)) {
      return acc + jumlahKg * 10;
    }
    return acc;
  }, 0);

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Poin dan Hadiah</h2>

        <div className="poin-box">
          <div className="poin-info">
            <p className="poin-label">Poin Anda</p>
            <p className="poin-value">{totalPoin}</p>
          </div>
          <img src={StarImage} alt="Poin Icon" className="poin-icon" />
        </div>

        <p className="note">1 Kg sampah akan mendapatkan 10 poin</p>

        {pengumpulanList.length > 0 && (
          <>
            <h3 className="riwayat-title">Riwayat poin</h3>
            <table className="riwayat-table">
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Aktivitas</th>
                  <th>Poin</th>
                </tr>
              </thead>
              <tbody>
                {pengumpulanList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.tanggal}</td>
                    <td>Mengumpulkan {item.jumlah} Kg Sampah {item.jenis}</td>
                    <td>+ {item.jumlah * 10}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PoinPage;
