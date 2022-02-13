import React from 'react';


const Episode = ({episode:{name,episode,air_date}}) => {
    return (
        <div>
            <div>{name}</div>
            <div>{episode}</div>
            <div>{air_date}</div>
        </div>
    );
};

export default Episode;