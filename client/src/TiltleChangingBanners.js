import React, { useState, useEffect } from 'react';
import yugio from './Image/yugio.jpg';
import yugioh5D from './Image/yugioh5D.png';
import yugiohDarkSide from './Image/yugiohDarkSide.png'
import yugiohGx from './Image/yugiohGX.png'

function TitleBanners() {
  const [seconds, setSeconds] = useState(0);
  const[image, setImage]=useState(yugio);
  const images =[yugio, yugioh5D, yugiohDarkSide, yugiohGx];

  useEffect(() => {
    const timer = setInterval(() => {
      if(seconds === images.length-1){
        setSeconds(0);
      }else{
        setSeconds(seconds+1)
      }
    }, 60000);
  }, [seconds]);

  return (
    <div className="TitleBanner">
      <img width="400px" src={images[seconds]}/>
    </div>
  );
}

export default TitleBanners;