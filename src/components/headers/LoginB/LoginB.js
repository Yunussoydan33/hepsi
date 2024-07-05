import React from 'react';
import './LoginB.css';
import userIcon from '../../../Image/image.png'; // İcon dosyasını doğru yolda import ediyoruz

const LoginB = () => {
  return (
    <div className="login-button">
      <img src={userIcon} alt="User Icon" className="user-icon" />
      <div className="login-text">
        <span className="login-title">Giriş Yap</span>
        <span className="login-subtitle">veya üye ol</span>
      </div>
      <span className="arrow">&#9660;</span>
    </div>
  );
};

export default LoginB;
