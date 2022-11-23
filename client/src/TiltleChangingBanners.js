import React, { useState, useEffect } from 'react';
import yugio from './Image/yugio.jpg';
import yugioh5D from './Image/yugioh5D.png';
import yugiohDarkSide from './Image/yugiohDarkSide.png'
import yugiohGx from './Image/yugiohGX.png'

function TitleBanners() {
  const [seconds, setSeconds] = useState(1);
  const[image, setImage]=useState(yugiohGx);
  const images =[yugio, yugioh5D, yugiohDarkSide, yugiohGx];

  return (
    <div className="App">
      <img width="350px" src={image}/>
    </div>
  );
}

export default TitleBanners;