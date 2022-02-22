import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Posts = () => {
    const [post,setPost] = useState([])
    let {id} = useParams()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
            .then(value => value.json())
            .then(value => setPost(value))
    },[id])
    return (
        <div>
            {
                post.map(value => <div key={value.id}>
                    {value.title}
                </div>)
            }
        </div>
    );
};

export default Posts;