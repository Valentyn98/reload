import React from 'react';

const Post = (props) => {
    const {id,userId,title,body} = props
    return (
        <div>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default Post;