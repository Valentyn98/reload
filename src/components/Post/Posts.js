import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    const[post,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPost(value))
    },[])
    return (
        <div>
            {post.map(post => <Post   id={post.id} userId={post.userId} title={post.title} body={post.body} />)}
        </div>
    );
};

export default Posts;