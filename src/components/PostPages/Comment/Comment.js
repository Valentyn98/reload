import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postServ} from "../../../srvices/post.serv";

const Comment = () => {
    const [com,setSomm] = useState([])
    const {id} = useParams()
    useEffect(()=>{
        postServ.getCommByPost(id).then(value => setSomm(value))
    },[id])
    return (
        <div>
            {
                com.map(com => <div key={com.id}>{com.id} - {com.body}</div>)
            }
        </div>
    );
};

export default Comment;