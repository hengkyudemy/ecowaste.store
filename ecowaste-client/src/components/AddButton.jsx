import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import '../styles/App.css';

const AddButton = ({ onClick }) => {
  return (
    <button className="add-button" onClick={onClick}>
      <FaPlus />
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;