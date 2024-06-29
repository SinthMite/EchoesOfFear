import React from "react";
import gong from '../assets/gong.mp3'
export default function StarterPage(){

    function enteringEffect(){
        const audio = new Audio(gong)
        audio.play()
    }
    return(
        <div>
            <div className='title'>
            <h1>ECHOES OF FEAR</h1>
            </div>
            <div>
            <button onClick={enteringEffect}>
                Enter Your Realm
            </button>
            </div>    
        </div>
    )
}