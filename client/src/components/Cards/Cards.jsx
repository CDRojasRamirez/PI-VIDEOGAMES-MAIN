import Card from "../Card/Card";
import { useState, useEffect } from 'react'
import axios from 'axios'
import style from './Cards.module.css'

const Cards = () => {

    const [ character, setCharacter ] = useState([])

    useEffect(() => {
        axios("http://localhost:3001/videogames")
        .then(res => setCharacter(res.data))
    }, [])
    
    return (
        <ul className={style.cardsGrid } >
            {character && character.map(char => {
                return <Card 

                    key={char?.ID}
                    ID = {char?.ID}
                    Image= {char?.Image}
                    Name= {char?.Name}
                    VideogameGenre= {char?.VideogameGenre}
                />
            })}
        </ul>
    );
}

export default Cards