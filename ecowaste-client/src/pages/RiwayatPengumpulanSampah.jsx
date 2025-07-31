import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { TrashContext } from '../contexts/TrashContext';
import TrashImage from '../assets/Trash.png';
import '../styles/RiwayatSampah.css';
import '../styles/App.css';

const RiwayatSampah = () => {
  const { pengumpulanList } = useContext(TrashContext);
  const [selectedMonthYear, setSelectedMonthYear] = useState('');

  const monthMap = {
    Januari: '01', Februari: '02', Maret: '03', April: '04', Mei: '05', Juni: '06', Juli: '07', Agustus: '08', September: '09', Oktober: '10', November: '11', Desember: '12',
  };

  // Filter data berdasarkan bulan dan tahun (format yyyy-mm dari input type="month")
  const filteredList = pengumpulanList.filter(item => {
    if (!selectedMonthYear) return true;
    const [day, monthName, year] = item.tanggal.split(' ');
    const itemMonthYear = `${year}-${monthMap[monthName]}`;
    return itemMonthYear === selectedMonthYear;
  });

  return (
    <>
      <Header />
      <Sidebar />
      <main className="content-container">
        <h1 className="riwayat-title">Riwayat Pengumpulan Sampah</h1>
        <img src={TrashImage} alt="Trash Bins" className="trash-image" />

        <div className="filter-container">
          <label>Filter berdasarkan bulan dan tahun:</label>
          <label className="month-picker">
            <input
              type="month"
              value={selectedMonthYear}
              onChange={(e) => setSelectedMonthYear(e.target.value)}
            />
          </label>
          <button onClick={() => setSelectedMonthYear('')} className="reset-button">
            Tampilkan Semua
          </button>
        </div>

        <table className="riwayat-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Jenis Sampah</th>
              <th>Jumlah</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.length === 0 ? (
              <tr>
                <td colSpan="3">Tidak ada data untuk filter yang dipilih.</td>
              </tr>
            ) : (
              filteredList.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.tanggal}</td>
                  <td>{item.jenis}</td>
                  <td>{item.jumlah} Kg</td>
                  <td>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default RiwayatSampah;
