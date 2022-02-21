import React, {useEffect, useState} from 'react';
import {imgServices} from "../../services/img.services";

const PhotoByUrl = () => {

    const [flag, setFlag] = useState(null)
    const [photo, setPhoto] = useState(null)

    useEffect(()=>{
        if(flag){
            imgServices.getPhotoByUrl(flag).then(value => setPhoto(value))
        }
    },[flag])
console.log(photo)
    return (
        <div>
            <button onClick={()=>{setFlag('/cat')}}>cat</button>
            <button onClick={()=>{setFlag('/dog')}}>dog</button>
            <button onClick={()=>{setFlag('/girl')}}>girl</button>
            <button onClick={()=>{setFlag('/car')}}>car</button>
            <button onClick={()=>{
                imgServices.getPhotoByUrl(flag).then(value => setPhoto(value))
            }}>UPDATE</button>
            <div>
                <img src={photo} alt=""/>
            </div>
        </div>
    );
};

export default PhotoByUrl;