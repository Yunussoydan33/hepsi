import React, { useState } from 'react';
import './Location.css';
import locationIcon from '../../../Image/image.png'; // İcon dosyasını doğru yolda import ediyoruz

const cities = [
  "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", 
  "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", 
  "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", 
  "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", 
  "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", 
  "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", 
  "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", 
  "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", 
  "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", 
  "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", 
  "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
];

const Location = () => {
  const [showCities, setShowCities] = useState(false);

  return (
    <div className="location-container">
      <div className="location-header">
        <img src={locationIcon} alt="Location Icon" className="location-icon" />
        <div className="location-text">
          <span className="location-title">Konum</span>
          <button className="location-button" onClick={() => setShowCities(!showCities)}>
            Konum Seç <span className="arrow">&#9660;</span>
          </button>
        </div>
      </div>
      {showCities && (
        <div className="city-list">
          {cities.map(city => (
            <div key={city} className="city-item">{city}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Location;
