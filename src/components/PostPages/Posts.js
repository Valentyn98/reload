import React, {useEffect, useState} from 'react';
import {postServ} from "../../srvices/post.serv";
import {Outlet, useLocation} from "react-router-dom";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        postServ.getAll().then(value => setPosts([...value]))/// +++++++++++
    },[])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export default Posts;