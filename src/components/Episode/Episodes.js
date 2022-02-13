import React, {useEffect, useState} from 'react';
import {EpisAndCharServ} from "../../services/EpisAndChar.serv";
import Episode from "./Episode";

const Episodes = () => {
    const [episode,setEpisode] = useState([])
    useEffect(()=>{
        EpisAndCharServ.getAllEpisode().then(value => setEpisode([...value.results]))
    },[])
    console.log(episode)
    return (
        <div>
             {episode && episode.map(episode => <Episode key={episode.id} episode={episode} />)}
        </div>
    );
};

export default Episodes;