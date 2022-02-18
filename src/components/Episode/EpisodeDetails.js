import React from 'react';
import {useLocation} from "react-router-dom";
import EpisodeDetailPict from "./EpisodeDetailPict";

const EpisodeDetails = () => {
    const {state} = useLocation();
    const character = state.characters;
    return (
        <div>
            {character.map(character => <EpisodeDetailPict key={character} character={character}/>)}
        </div>
    );
};

export default EpisodeDetails;