import React from 'react';
import './App.css';
import reklamImage from './Image/Reklam.png';
import logo from './Image/logo.png';
import playstationImage from './Image/Playstation.webp';
import Line from './components/line/Line';
import SearchBar from './components/headers/SearchBar/SearchBar';
import Location from './components/headers/Location/Location';
import LoginB from './components/headers/LoginB/LoginB';
import AddCart from './components/headers/AddCart/AddCart';
import TopOrder from './components/headers/TopOrder/TopOrder';
import Categories from './components/Middle/Categories/Categories';
import MiniCategories from './components/Middle/MiniCategories/MiniCategories';
import PriceCard from './components/Middle/RıghtInfo/PriceCard/PriceCard';
function App() {
  return (
    <div className="App">
      <img src={reklamImage} alt="Reklam" className="fixed-image" />
      <div style={{ marginTop: '300px' }}>
        <Line />
      </div>
      <SearchBar />
      <img src={logo} alt="Logo" className="logo-image" />
      <img src={playstationImage} alt="Playstation 5" className="playstation-image" />
      <TopOrder />
      <Categories />
      <MiniCategories />
      <Location />
      <LoginB />
      <AddCart />

      {/* #F5F5F5 renginde yeni alan, genişliği manuel olarak belirlenebilir */}
      <div 
        className="f5f5f5-area" 
        style={{ width: '35%', margin: '0 auto' }} // Burada genişliği manuel olarak belirleyebilirsiniz
      >
        {/* Card bileşenleri burada yer alacak */}
      <PriceCard/>
      </div>
    </div>
  );
}

export default App;
