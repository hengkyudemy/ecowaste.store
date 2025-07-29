import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/App.css';

function InfoItem({ id, title, body }) {
  return (
    <Link to={`/informasi/${id}`} className="info-card">
      <h3>{title}</h3>
      <p>{body.slice(0, 100)}...</p>
    </Link>
  );
}

InfoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default InfoItem;
