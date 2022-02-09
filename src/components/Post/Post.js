import React from 'react';

const Post = ({id,title,body}) => {
    return (
        <div>
            {id}
            {title}
            {body}
        </div>
    );
};

export default Post;