import React, {useState, useEffect} from 'react'
import DisplayCardImage from './CardImage';
import  TitleBanners from './TiltleChangingBanners';

//it fetchs all cards and display it in a list
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