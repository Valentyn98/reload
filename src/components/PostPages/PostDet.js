import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {postServ} from "../../srvices/post.serv";

const PostDet = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        if(state){
            setPost(state)
            return
        }
        postServ.getPostByID(id).then(value=> setPost(value))
    },[id])
    return (
        <div>
            {
                post && (
                    <div>
                        <div>id : {post.id}</div>
                        <div>userId : {post.userId}</div>
                        <div>body : {post.body}</div>
                        <div>title : {post.title}</div>
                    </div>
                )
            }

            <Link to={'comments'}><button>comments</button></Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDet;