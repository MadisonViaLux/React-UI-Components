import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import './App.css';

const App = () => {
  return (
    <div className='appContainer'>
      <div>
        <ImageThumbnail />
      </div>

      <div className='notImgSide'>
        <HeaderContainer />
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
