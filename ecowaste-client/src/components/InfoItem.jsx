import { Link } from 'react-router-dom';

function InfoItem({ id, title, image }) {
    return (
        <div>
            <h3>{title}</h3>
            <img
                src={image}
                alt={title}
            />
            <Link to={`/informasi/${id}`}>
                Lihat selengkapnya..
            </Link>
        </div>
    );
}

export default InfoItem;