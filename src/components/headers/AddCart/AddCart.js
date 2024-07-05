import React from 'react';
import './AddCart.css';

const AddCart = () => {
  return (
    <div className="add-cart-button">
      <div className="icon-container">
        <svg className="cart-icon" viewBox="0 0 24 24">
          <path d="M7 18c0 .83.67 1.5 1.5 1.5S10 18.83 10 18s-.67-1.5-1.5-1.5S7 17.17 7 18zm10 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zM8.1 13h7.45c.76 0 1.45-.43 1.79-1.12l3.24-6.88A1 1 0 0019.7 4H5.21L4.27 2H1v2h2.31l3.6 7.59L5.25 13.5c-.11.23-.18.48-.18.75 0 .83.67 1.5 1.5 1.5h12v-2H8.32c-.13 0-.25-.11-.25-.25s.12-.25.25-.25h11.08l-1.38-3H8.1l-.8-2H17V6H7l-1.57-3H1.11L8.1 13z"></path>
        </svg>
        <span className="item-count">0</span>
      </div>
      <span className="cart-text">Sepetim</span>
    </div>
  );
};

export default AddCart;
