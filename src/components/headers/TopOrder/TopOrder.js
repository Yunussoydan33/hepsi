import React from 'react';
import './TopOrder.css';

function TopOrder() {
  return (
    <div className="top-order">
      <span>Siparişlerim</span>
      <span>Süper Fiyat, Süper Teklif</span>
      <span>Yurt Dışından</span>
      <span>Kampanyalar</span>
      <span className="highlight-red">Girişimci Kadınlar</span>
      <span>Müşteri Hizmetleri</span>
      <span className="highlight-orange">Hepsiburada Premium</span>
      <span>Hepsiburada'da Satıcı Ol</span>
    </div>
  );
}

export default TopOrder;
