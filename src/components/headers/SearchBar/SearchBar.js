import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        className="search-input" 
        placeholder="Ürün, kategori veya marka ara" 
      />
      <button className="search-button">ARA</button>
    </div>
  );
};

export default SearchBar;
