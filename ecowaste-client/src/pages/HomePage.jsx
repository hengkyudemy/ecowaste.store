import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashContext } from '../contexts/TrashContext';
import { getAllInfos } from '../utils/local-data';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';
import StarIcon from '../assets/Star.png';
import Increase from '../assets/Increase.png';
import BuangSampah from '../assets/BuangSampah.png';
import '../styles/HomePage.css';

const HomePage = () => {
  const { authedUser } = useContext(AuthContext);
  const { totalPoin } = useContext(TrashContext); // ✅ Ambil poin dari TrashContext
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    const allInfos = getAllInfos();
    setInfos(allInfos.slice(0, 2));
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <main className="homepage-container">
        <section className="homepage-welcome">
          <h1>Selamat Datang di EcoWaste</h1>
          <p>Kelola Sampahmu, Selamatkan Bumi</p>
        </section>

        <section className="homepage-content">
          <div className="card-poin">
            <div className="poin-header">
              <img src={StarIcon} alt="Star Icon" className="star-icon" />
              <span className="poin-label">Poin Anda</span>
            </div>
            <p className="poin-angka">{totalPoin}</p>
            <img src={Increase} alt="Increase" className="poin-grafik" />
          </div>

          <img src={BuangSampah} alt="Ilustrasi pengguna" className="eco-illustration" />
        </section>

        <section className="info-section">
          {infos.map((info) => (
            <Link
              to={`/informasi/${info.id}`}
              key={info.id}
              className="info-card-link"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="info-card">
                <h4>{info.title}</h4>
                <p>{info.body}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
