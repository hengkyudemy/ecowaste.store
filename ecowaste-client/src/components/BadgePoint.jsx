import React, { useContext, useEffect, useState } from 'react';
import { TrashContext } from '../contexts/TrashContext';
import '../styles/App.css';
import StarImage from '../assets/Star.png';

const BadgePoint = () => {
  const { pengumpulanList } = useContext(TrashContext);
  const [totalSampah, setTotalSampah] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const totalKg = pengumpulanList.reduce((acc, item) => acc + parseFloat(item.jumlah || 0), 0);
    setTotalSampah(totalKg);
    setPoints(totalKg * 10); // 1 kg = 10 poin
  }, [pengumpulanList]);

  return (
    <div className="badge-point-container">
      <div className="badge-left">
        <img src={StarImage} alt="Star Icon" className="star-icon" />
        <div className="text-wrapper">
          <span className="badge-label">Poin Anda</span>
          <h2 className="point-value">{points}</h2>
        </div>
      </div>
      <div className="badge-right">
        <p className="sampah-label">Total Sampah dikumpulkan</p>
        <h2 className="sampah-value">{totalSampah} Kg</h2>
      </div>
    </div>
  );
};

export default BadgePoint;
