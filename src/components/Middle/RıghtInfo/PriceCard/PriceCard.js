import React from 'react';
import './PriceCard.css';

function PriceCard() {
  return (
    <div className="price-card">
      <div className="product-title">
        Sony Playstation 5 + 2.Dualsense + PS5 Fc 24
      </div>
      <div className="product-brand">
        <a href="#">Sony</a>
      </div>
      <div className="product-price">
        <span className="price">35.999,00 TL</span>
        <div className="installment">3999 TL x 9 aya varan Taksitle</div>
      </div>
      <div className="product-rating">
        <div className="rating-top">
          <span className="stars">4,7</span>
          <span className="stars-symbol">★★★★★</span>
        </div>
        <div className="reviews">(192 Değerlendirme)</div>
      </div>
      <div className="premium-info">
        <span className="premium">PREMIUM</span> Premium ile avantajlarını katla, Hepsipara kazan.
      </div>
      <div className="seller-card">
        <div className="seller-info">
          <span>Satıcı: <a href="#">game time</a></span>
          <div className="rating">
            <span>Puan</span>
            <span className="rating-score">9,7</span>
          </div>
          <span className="campaign">Kampanyaları Gör</span>
        </div>
      </div>
      <div className="shipping-info">
        200 TL üzeri kargo bedava
      </div>
    </div>
  );
}

export default PriceCard;
