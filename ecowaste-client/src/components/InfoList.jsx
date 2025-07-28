import InfoItem from './InfoItem';

function InfoList({ infos }) {
  if (infos.length === 0) {
    return <p>Tidak ada informasi yang ditemukan.</p>
  }

  return (
    <div className='infos-list'>
      {
        infos.map((info) => (
          <InfoItem
            key={info.id}
            id={info.id}
            {...info} />
        ))
      }
    </div>
  );
}

export default InfoList;