import React, { createContext, useEffect, useState } from 'react';

export const TrashContext = createContext();

export function TrashProvider({ children }) {
  const [pengumpulanList, setPengumpulanList] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('pengumpulanList') || '[]');
    const storedLastId = parseInt(localStorage.getItem('lastPengumpulanId') || '0');
    setPengumpulanList(storedList);
    setLastId(storedLastId);
  }, []);

  useEffect(() => {
    localStorage.setItem('pengumpulanList', JSON.stringify(pengumpulanList));
  }, [pengumpulanList]);

  useEffect(() => {
    localStorage.setItem('lastPengumpulanId', lastId.toString());
  }, [lastId]);

  const addPengumpulan = (data) => {
    const newId = lastId + 1;
    const formattedId = 'PS' + String(newId).padStart(4, '0');

    const newDataWithId = {
      id: formattedId,
      status: 'Pengumpulan Sampah diterima',
      ...data,
    };

    setPengumpulanList((prev) => [...prev, newDataWithId]);
    setLastId(newId);

    // Hitung poin (1kg = 10 poin)
    const poin = data.jumlah * 10;

    const newRiwayat = {
      tanggal: data.tanggal,
      aktivitas: `Mengumpulkan ${data.jumlah} Kg Sampah ${data.jenis}`,
      poin: `+ ${poin}`,
    };

    const existingRiwayat = JSON.parse(localStorage.getItem('riwayatPoin') || '[]');
    const updatedRiwayat = [...existingRiwayat, newRiwayat];
    localStorage.setItem('riwayatPoin', JSON.stringify(updatedRiwayat));
  };


  return (
    <TrashContext.Provider value={{ pengumpulanList, addPengumpulan }}>
      {children}
    </TrashContext.Provider>
  );
}
