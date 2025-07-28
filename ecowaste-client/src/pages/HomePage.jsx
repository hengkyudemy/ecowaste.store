// src/pages/HomePage.jsx
import React, { useContext, useEffect, useState } from 'react';
import { getUserPoints } from '../utils/network-data';
import { getAllInfos } from '../utils/local-data';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthContext';
import '../styles/HomePage.css';

const HomePage = () => {
  const { authedUser } = useContext(AuthContext);
  const [points, setPoints] = useState(0);
  const [infos, setInfos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const pointsResponse = await getUserPoints();
      if (!pointsResponse.error) {
        setPoints(pointsResponse.data.points);
      }

      const { data } = getAllInfos();
      setInfos(data.slice(0, 2)); // hanya 2 info pertama
    }

    fetchData();
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
          <div className="card card-poin">
            <h3>⭐ Poin Anda</h3>
            <p className="poin-angka">{points}</p>
            <img src="/assets/poin-chart.png" alt="Grafik Poin" className="poin-grafik" />
          </div>

          <img src="/assets/eco-user.png" alt="Ilustrasi pengguna" className="eco-illustration" />
        </section>

        <section className="info-section">
          {infos.map((info) => (
            <div className="info-card" key={info.id}>
              <h4>{info.title}</h4>
              <p>{info.body}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;