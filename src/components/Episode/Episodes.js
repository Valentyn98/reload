import React, {useEffect, useState} from 'react';
import {episodeServ} from "../../services/episode.serv";
import Episode from "./Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    useEffect(()=>{
    episodeServ.getEpisode().then(value => setEpisodes([...value.results]))
    },[])
console.log(episodes)
    return (
        <div>
            {episodes.map(episode => <Episode key={episode.id} episodeInfo={episode}/>)}
        </div>
    );
};

export default Episodes;