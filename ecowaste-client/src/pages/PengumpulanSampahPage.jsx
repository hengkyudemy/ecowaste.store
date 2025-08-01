import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AddButton from '../components/AddButton';
import { TrashContext } from '../contexts/TrashContext';
import '../styles/App.css';

const PengumpulanSampahPage = () => {
  const navigate = useNavigate();
  const trashCtx = useContext(TrashContext);
  const pengumpulanList = trashCtx?.pengumpulanList || [];

  return (
    <div className="app-container">
      <Header />
      <Sidebar />
      <main className="content-container">
        <h2 className="page-title">Pengumpulan Sampah</h2>
        {pengumpulanList.length === 0 ? (
          <p>Tidak ada pengumpulan sampah saat ini</p>
        ) : (
          pengumpulanList.map((item, index) => (
            <div className="pengumpulan-card" key={index}>
              <h3>
                {item.status === 'Pengumpulan Sampah sudah diambil'
                  ? 'Pengumpulan Sampah sudah Selesai'
                  : item.status === 'Ditangguhkan'
                    ? 'Pengumpulan Sampah Ditangguhkan'
                    : item.status === 'Dijadwalkan Ulang'
                      ? 'Pengumpulan Sampah Dijadwalkan Ulang'
                      : 'Pengumpulan Sampah dalam Proses'}
              </h3>
              <div className="pengumpulan-info">
                <p><strong>ID     :</strong> {item.id}</p>
                <p><strong>Jenis  :</strong> {item.jenis}</p>
                <p><strong>Jumlah :</strong> {item.jumlah} kg</p>
                <p><strong>Alamat :</strong> {item.alamat}</p>
                {item.tanggal && <p><strong>Tanggal :</strong> {item.tanggal}</p>}
                {item.catatan && <p><strong>Catatan :</strong> {item.catatan}</p>}
                <p><strong>Status :</strong> {item.status}</p>
              </div>
            </div>
          ))
        )}
        <AddButton onClick={() => navigate('/pengumpulan/tambah')} />
      </main>
      <Footer />
    </div>
  );
};

export default PengumpulanSampahPage;
