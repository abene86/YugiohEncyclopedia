import React, {useState} from 'react';
import Maxim from './Image/MaximillionPegasusMD.jpg'
import Quad from './Image/Quad.png'
import yugioh from './Image/yugiCha.png'
import AiLod from './Image/Ai-LOD.png'
import marik from './Image/yami_marik_render__legacy_of_the_duelist__by_maxiuchiha22_dbpzpj4-pre.png'
import vile from './Image/vile.png'
import muto from './Image/muto.png'
function SlideCharacter(){
    const charaImages=[Maxim, Quad, yugioh, AiLod, marik, vile, muto];
    const [index, setIndex]=useState(0);
    function handleSlider(){
        if(index === charaImages.length-1){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    return(
        <div>
            <img height="500px" src={charaImages[index]}/>
            <button onClick={handleSlider}>Play</button>
        </div>
    )
}

export default SlideCharacter;