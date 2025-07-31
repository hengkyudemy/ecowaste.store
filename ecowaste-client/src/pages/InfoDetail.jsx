import React from 'react';
import { useParams } from 'react-router-dom';
import { getInfo } from '../utils/local-data';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/App.css';

const InfoDetail = () => {
  const { id } = useParams();
  const info = getInfo(Number(id));

  if (!info) return <p>Informasi tidak ditemukan.</p>;

  return (
    <div className="page-container">
      <Header />
      <Sidebar />
      <main className="info-detail-container">
        <h2 className="page-title">{info.title}</h2>
        <img src={info.image} alt={info.title} className="info-detail-image" />
        <p>{info.body}</p>
      </main>
      <Footer />
    </div>
  );
};

export default InfoDetail;
