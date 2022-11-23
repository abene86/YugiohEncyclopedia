import React, {useState, useEffect} from 'react'
import DisplayCardImage from './CardImage';
import  TitleBanners from './TiltleChangingBanners';

//it fetchs all cards name and display in a unique index list
//but instead of being word and letters
//it uses a helper component that takes in cardname  and display
//to show all the images
//A very cool feature inside here is inorder to make most out of the given space I usedd adding index
// to limit the number of cards on screen and making changing it produce new ones easier.
//I also proud to show another component above the image output called TitleBanner
//which changes andd show all the yugioh generation titles.
//for more information look at titleChangingBanner.js
function AllCardNames(){
    const[cardNames, setCardArray]=useState([]);
    const[indexStart, setStartIndex]=useState(0)
    const[indexEnd, setEndIndex]=useState(15);
    useEffect(()=>{
      fetch('/allCardNames')
      .then(res => res.json())
      .then(cardInformation => {
        setCardArray(cardInformation);
      }).catch((error) => {
        console.log(error);
      });
    }, [])
  

    function upDateIndex(){
      if(indexStart >= 0 && indexStart <=600 && indexEnd >=0 && indexEnd <=600){
        setStartIndex(indexStart+15); 
        setEndIndex(indexEnd+15);
      }
    }
    
      return (
        <div className="App">
            <div>
            <TitleBanners/>
              <ul className="cities">
              {cardNames.map((cardName, index) =>
                  index >= indexStart && index <= indexEnd ? (<li key={index}> <DisplayCardImage name={cardName} size={250}/></li>) : "")
              }
              </ul>
              <button onClick={upDateIndex}>
                Look More Cards
              </button>
            </div>
          </div>
        );    

  }

  export default AllCardNames;