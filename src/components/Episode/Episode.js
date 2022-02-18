import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({episodeInfo}) => {
   const {id,name,air_date,episode} = episodeInfo
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>air_date: {air_date}</div>
            <div>episode: {episode}</div>
            <Link to={'/episodeDetails'} state={episodeInfo}>Episode Details</Link>
        </div>
    );
};

export default Episode;