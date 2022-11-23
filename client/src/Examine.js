import React, { useState } from 'react'
import DisplayCardImage from './CardImage'
import DisplayCardInformation from './DisplayCardInformation.js';

//Examine allows the users to search  for a card name and like the name implies examine or look 
// What the card looks like and its informations using helper component Image to Display
function Examine() {
    const [userInput, setUserInput] = useState("Bystial Baldrake");
    const [prevUserInput, setPreviousInput] = useState("Bystial Baldrake");
    const [needdisplay, setDisplay] = useState(false)
    function handleOnClick() {
        setDisplay(true)
    }
    if (needdisplay) {
        return (
            <div className='SearchSpace'>
                <div className='searchBar'>
                    <input name="text" type="text" placeholder="card name..." onChange={(event) => {
                        setPreviousInput(userInput);
                        setUserInput(event.target.value);
                        setDisplay(false);
                    }} />
                    <button onClick={handleOnClick}>Examine Card</button>
                    <div className='OutPut'>
                    <DisplayCardImage name={userInput} size={400} />
                    <DisplayCardInformation name={userInput}/>
                </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='SearchSpace'>
                <div className='searchBar'>
                    <input name="text" type="text" placeholder="card name..." onChange={(event) => {
                        setPreviousInput(userInput);
                        setUserInput(event.target.value);
                        setDisplay(false);
                    }} />
                    <button onClick={handleOnClick}>Examine Card</button>
                    <div className='OutPut'>
                        <DisplayCardImage name={prevUserInput} size={400} />
                        <DisplayCardInformation name={prevUserInput}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Examine;