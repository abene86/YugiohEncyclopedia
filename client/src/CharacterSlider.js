import React, { useState } from 'react';
import Maxim from './Image/MaximillionPegasusMD.jpg'
import yugioh from './Image/yugiCha.png'
import marik from './Image/yami_marik_render__legacy_of_the_duelist__by_maxiuchiha22_dbpzpj4-pre.png'
import muto from './Image/muto.png'
//It is a fun feature I came up with where user can change and reveal different character
//From the yugioh universe and they can peronlize to include you unique dialogue input ontop of the characters.
//Use handleSlider to take button click feedback to change the picture
//Also use handleChangeDialogue to take input from user and update the dialogue to include a line
function SlideCharacter() {
    const charaImages = [Maxim, yugioh, marik, muto];
    const DialogTree = [
        "Ladies and gents, the Toon Summoned Skull!",
        "The heart of the Game is in my Card. I will never lose to You.",
        "I have all the Egyptian God Cards. You will never beat me.",
        "It not about always winning but being one with your card. I summon Kurbo."
    ]
    const [index, setIndex] = useState(0);
    const [userInput, setUserInput]=useState("")
    const [dialogue, setDialogue]=useState("");
    function handleSlider() {
        if (index === charaImages.length - 1) {
            setIndex(0)
            setDialogue("");
        } else {
            setIndex(index + 1)
            setDialogue("");
        }
    }
    function handleChangeDialoge(){
        setDialogue(userInput)
    }

    return (
        <div>
            <h1>CHARACTERS</h1>
            <img height="350px" src={charaImages[index]} />.
            <h3>"{DialogTree[index]}{dialogue}"</h3>
            <div className='personalizeDialoge'>
                <button onClick={handleSlider}>Change Character</button>
                <input type="text" placeholder='Enter your dialogue' onChange={e => setUserInput(e.target.value)}></input>
                <button onClick={handleChangeDialoge}>Personalize dialogue</button>
            </div>
        </div>
    )
}
export default SlideCharacter;