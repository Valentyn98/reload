import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userServ} from "../../../srvices/user.serv";

const PostOfUser = () => {

    const {id} = useParams()
    const [post, setPost] = useState([])

    useEffect(()=>{
        userServ.getPostById(id).then(value => setPost(value))
    },[id])

    return (
        <div>

                {post.map(post => <div key={post.id}>{post.id} - {post.title}</div>)}



        </div>
    );
};

export default PostOfUser;