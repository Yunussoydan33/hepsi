import React from 'react';
import './MiniCategories.css';

function MiniCategories() {
  return (
    <div className="mini-categories">
      <span>Ana Sayfa</span>
      <span>Hobi Oyun Konsolları</span>
      <span>Oyunlar Oyun Konsolları</span>
      <div className="dropdown">
        <span>Playstation 5 <i className="dropdown-icon">&#9660;</i></span>
        <div className="dropdown-content">
          <span>Seçenek 1</span>
          <span>Seçenek 2</span>
        </div>
      </div>
      <span>Playstation 5 Konsol</span>
      <span>Sony Playstation 5 Konsol</span>
    </div>
  );
}

export default MiniCategories;
