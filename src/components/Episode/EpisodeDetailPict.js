import React, {useEffect, useState} from 'react';
import {axiosService} from "../../services/axios.serv";

const EpisodeDetailPict = ({character}) => {

const {char,setChar} = useState(null)
    useEffect(()=>{
        axiosService.getEpisode()
    },[])
    return (
        <div>
                <div >
                    <img src={image} alt={name}/>
                    {/*<div><b>{character.name}</b></div>*/}
                    {/*<div><b>Status :</b> {character.status}</div>*/}
                    {/*<div><b>Species :</b> {character.species}</div>*/}
                    {/*/!*<div><b>Gender :</b> {character.gender}</div>*!/*/}
                    {/*<div><b>Origin :</b> {character.origin.name}</div>*/}
                    {/*<div><b>Location :</b> {character.location.name}</div>*/}
                </div>

        </div>
    );
};
export default EpisodeDetailPict;