import React from "react";
import {AiFillPicture} from 'react-icons/ai';

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage(){
        const memesArray= memesData.data.memesData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input"/>
                <input type="text" placeholder="Bottom Text" className="form--input"/>
                <button className="form--button" onClick={getMemeImage}>Get a new template <AiFillPicture className="form--newimg"/></button>
            </div>
            <img src={memeImage} />
        </main>
    )
}