import React, {useEffect, useState} from 'react';
import {episodeServ} from "../../services/episode.serv";
import Episode from "./Episode";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([])
    const [numberPage, setnumberPage] = useState()
    const [page,setPage] = useState(1)

    useEffect(()=>{
    episodeServ.getEpisode(page).then(value => {
        setEpisodes([...value.results])
            setnumberPage(value.info.page)
    })
    },[page])

    const forward = () => {
            setPage(page +1)
    }
    const back = () => {
            setPage(page -1)
    }
console.log(episodes)
    return (
        <div>

            <div> Rick and Morty episodes</div>
            <button onClick={forward}>Forward</button>
            <button onClick={back}>Back</button>
            {episodes.map(episode => <Episode key={episode.id} episodeInfo={episode}/>)}


        </div>
    );
};

export default Episodes;


































// https://github.com/SergeyShkolniy/Okten-sept2021-react-module/tree/add-rick-and-morty-api