import React from 'react';
import '../styles/App.css';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className="eco-search-wrapper">
      <input
        type="text"
        placeholder="Cari informasi..."
        value={keyword}
        onChange={(e) => keywordChange(e.target.value)}
        className="eco-search-input"
      />
    </div>
  );
};

export default SearchBar;
