import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {userServ} from "../../../srvices/user.serv";
import Albsolo from "./Albsolo";

const Albums = () => {
    const {id} = useParams()
    const [alb,setAlb] = useState([])
    useEffect(()=>{
        userServ.getAlbById(id).then(value => setAlb(value))
    },[id])
    return (
        <div>
            {alb && alb.map(alb => <Albsolo key={alb.id} alb={alb}/>)}
            <div>
                <Outlet/>
            </div>
            </div>
    );
};

export default Albums;