import React, { useState, useEffect } from 'react'
//It take the cardName and fetchs it and display its image
function DisplayCardImage(props) {
    const [url, setUrl] = useState('https://images.ygoprodeck.com/images/cards/88305705.jpg');
        fetch(`Image/${props.name} `)
        .then(res => res.json())
        .then(cardInformation => {
            setUrl(cardInformation[0].image_url);
        }).catch((error) => {
            console.log(error);
        });
   
    return (
        <div className='containerCardImage'>
            <img height={`${props.size}`} src={url} alt='card image' />
        </div>
    );
}

export default DisplayCardImage;