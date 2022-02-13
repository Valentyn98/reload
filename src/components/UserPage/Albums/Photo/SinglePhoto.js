import React from 'react';

const SinglePhoto = ({photo}) => {
    const {albumId,id,title,thumbnailUrl} = photo
    return (
        <div>
            {albumId}{id}{title}
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export default SinglePhoto;