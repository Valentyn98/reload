import React, {useEffect, useState} from 'react';
import {userServ} from "../../../../srvices/user.serv";
import {Outlet, useParams} from "react-router-dom";
import SinglePhoto from "./SinglePhoto";

const Photo = () => {
    const [photo,setPhoto] = useState([])
    const {photoId} = useParams();
    const params = useParams();
    console.log(params);
    useEffect(()=>{
        userServ.getPhoto(photoId).then(value => setPhoto([...value]))
    },[photoId])
    console.log(photoId)
    return (
        <div>
            {
               photo && photo.map(photo => <SinglePhoto key={photo.id} photo={photo}/>)
            }

        </div>
    );
};

export default Photo;