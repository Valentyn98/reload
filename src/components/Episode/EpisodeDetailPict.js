import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.serv";

const EpisodeDetailPict = ({characterAll}) => {

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`${characterAll}`).then(value => value.json()).then(value => setCharacter(value));
    }, [characterAll]);
    console.log(character)
    return (

        <div>
            {character && (
                <div>
                    <img src={character.image} alt={character.name}/>
                    <div><b>{character.name}</b></div>
                    <div><b>Status :</b> {character.status}</div>
                    <div><b>Species :</b> {character.species}</div>
                    <div><b>Gender :</b> {character.gender}</div>
                    <div><b>Origin :</b> {character.origin.name}</div>
                    <div><b>Location :</b> {character.location.name}</div>
                </div>
            )}
        </div>
    );
};
export default EpisodeDetailPict;