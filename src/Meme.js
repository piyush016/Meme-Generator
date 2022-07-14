import React from "react";
import {AiFillPicture} from 'react-icons/ai';
import './style.css'

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/lbij.jpg"

    })
    const[allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event){
        const{name, value} = event.target
        setMeme( prevMeme => ({
            ...prevMeme,
            [name] : value
        }))
    }

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" placeholder="Bottom Text" className="form--input" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" onClick={getMemeImage}>Get a new template <AiFillPicture className="form--newimg"/></button>
            </div>
            <div className="meme">
                <img className="meme--img" src={meme.randomImage} alt="Click on Get a new template to get a template" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}