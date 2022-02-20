import React from 'react';
import {Link, useLocation} from "react-router-dom";
import EpisodeDetailPict from "./EpisodeDetailPict";
import css from './EpisodesDetails.module.css'

const EpisodeDetails = () => {
    const {state} = useLocation();

    const character = state.characters;
    // console.log(character)
    return (
        <div>
            <Link to={'/'}><button className={css.button}>Episodes</button></Link>
           <div  className={css.page}> {character.map(character => <EpisodeDetailPict key={character} characterAll={character}/>)}</div>
        </div>
    );
};

export default EpisodeDetails;