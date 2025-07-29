import React from 'react';
import { Link } from 'react-router-dom';
import { getAllInfos } from '../utils/local-data';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/App.css';

const InformasiSampah = () => {
  const informasi = getAllInfos();

  return (
    <div className="page-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Informasi Sampah</h2>
        <div className="info-section">
          {informasi.map((item) => (
            <Link to={`/informasi/${item.id}`} key={item.id} className="info-card-link">
              <div className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InformasiSampah;