import React, { useState, useEffect } from 'react'
//It takes an image url through props and display it
function DisplayCardImage(props) {
    const [url, setUrl] = useState('https://images.ygoprodeck.com/images/cards/88305705.jpg');
        fetch(`Image/${props.name} `)
        .then(res => res.json())
        .then(cardInformation => {
            setUrl(cardInformation[0].image_url);
        })
   
    return (
        <div className='containerCardImage'>
            <img height={`${props.size}`} src={url} alt='card image' />
        </div>
    );
}

export default DisplayCardImage;