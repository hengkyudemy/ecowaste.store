import React, { createContext, useEffect, useState } from 'react';

export const TrashContext = createContext();

export function TrashProvider({ children }) {
  const [pengumpulanList, setPengumpulanList] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [totalPoin, setTotalPoin] = useState(0);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('pengumpulanList') || '[]');
    const storedLastId = parseInt(localStorage.getItem('lastPengumpulanId') || '0');
    setPengumpulanList(storedList);
    setLastId(storedLastId);

    // Hitung total poin awal saat load
    const total = storedList.reduce((sum, item) => sum + (parseFloat(item.jumlah || 0) * 10), 0);
    setTotalPoin(total);
  }, []);

  useEffect(() => {
    localStorage.setItem('pengumpulanList', JSON.stringify(pengumpulanList));

    // Rehitung total poin setiap kali data pengumpulan berubah
    const total = pengumpulanList.reduce((sum, item) => sum + (parseFloat(item.jumlah || 0) * 10), 0);
    setTotalPoin(total);
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
    <TrashContext.Provider value={{ pengumpulanList, addPengumpulan, totalPoin }}>
      {children}
    </TrashContext.Provider>
  );
}
