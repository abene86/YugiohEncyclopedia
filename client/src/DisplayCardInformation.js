import React, { useState, useEffect } from 'react'
function DisplayCardInformation(props) {
    const [information, setResult] = useState(null);
    useEffect(() => {
        fetch(`/cardinformation/${props.name}`)
            .then(res => res.json())
            .then(cardInformation => {
                setResult(cardInformation)
            }).catch((error) => {
                console.log(error);
            });
    }, [information])
    if (information !== null) {
        return (
            <div>
                <ul>
                    <h1>Data About Card</h1> 
                    <li> Name Card: {information.cardName}</li>
                    <li> Atk: {information.atk}</li>
                    <li> Def: {information.def}</li>
                    <li> Attribute: {information.attribute}</li>
                    <li> Level:{information.level}</li>
                </ul>
            </div>
        );
    } else {
        return <div>"Hello"</div>
    }
}

export default DisplayCardInformation;