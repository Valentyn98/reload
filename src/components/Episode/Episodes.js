import React, {useEffect, useState} from 'react';
import {episodeServ} from "../../services/episode.serv";
import Episode from "./Episode";
import css from "./Episodes.module.css"


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
        <div className={css.father}>
            <div className={css.blockInfoHead}> Rick and Morty episodes</div>
            <button  className={css.forward} onClick={forward}>Forward</button>
            <button className={css.back} onClick={back}>Back</button>
           <div className={css.blockInfo}>{episodes.map(episode => <Episode key={episode.id} episodeInfo={episode}/>)}</div>

        </div>
    );
};

export default Episodes;


































// https://github.com/SergeyShkolniy/Okten-sept2021-react-module/tree/add-rick-and-morty-api