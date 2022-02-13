import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Albsolo = ({alb}) => {
    const {userId,id,title} =alb
    return (
        <div>
            <div>
                <div>userId: {userId}</div>
                <div>id : {id}</div>
                <div>title: {title}</div>
            </div>
            <Link to={`${id}/photos`}>Photo</Link>
        </div>
    );
};
export default Albsolo;