import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../styles/App.css';

const BadgePoint = ({ totalSampah }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // misal aturan: 1 kg sampah = 5 poin
    const newPoints = totalSampah * 5;
    setPoints(newPoints);
  }, [totalSampah]);

  return (
    <div className="badge-point-container">
      <div className="badge-icon">
        <FaStar size={24} color="gold" />
        <span>Poin Anda</span>
      </div>
      <div className="badge-values">
        <h2 className="point-value">{points}</h2>
        <p>Total sampah dikumpulkan</p>
        <h2 className="sampah-value">{totalSampah} Kg</h2>
      </div>
    </div>
  );
};

export default BadgePoint;