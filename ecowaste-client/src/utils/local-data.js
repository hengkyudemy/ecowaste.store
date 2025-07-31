import OlahanSampah from '../assets/OlahanSampah.png';
import Jenis from '../assets/Jenis.png';
import DaurUlang from '../assets/DaurUlang.png';
import TrukSampah from '../assets/TrukSampah.png';

const infos = [
  {
    id: 1,
    title: 'Sampah di Indonesia',
    image: TrukSampah,
    body: 'Berdasarkan data dari Sistem Informasi Pengelolaan Sampah Nasional (SIPSN), timbunan sampah yang terus bertambah setiap hari di Indonesia mencapai angka 93,7 ribu ton; dan timbunan sampah per tahun mencapai 31,9 juta ton. Masalah ini berpotensi memberikan dampak negatif yang signifikan terhadap masyarakat Indonesia.',
  },
  {
    id: 2,
    title: 'Olahan Sampah',
    image: OlahanSampah,
    body: 'Sampah bisa di olah menjadi berbagai macam produk. Sampah organik bisa diolah menjadi kompos, biogas, atau pakan ternak.',
  },
  {
    id: 3,
    title: 'Jenis-Jenis Sampah',
    image: Jenis,
    body: 'Berdasarkan sifatnya, sampah dapat diklasifikasikan ke dalam tiga jenis yaitu sampah organik, anorganik, dan sampah B3.',
  },
  {
    id: 4,
    title: 'Daur Ulang Sampah',
    image: DaurUlang,
    body: 'Daur ulang adalah proses mengubah sampah menjadi bahan baku baru yang dapat digunakan untuk membuat produk baru. Manfaatnya meliputi mengurangi sampah, menghemat sumber daya alam, mengurangi polusi, dan menghemat energi.',
  },
];

function getAllInfos() {
  return infos;
}

function getInfo(id) {
  return infos.find((info) => info.id === id);
}

export {
  getAllInfos,
  getInfo,
};