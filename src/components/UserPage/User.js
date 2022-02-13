import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id,name,username} = user
    return (
        <div>
            <Link to={user.id.toString()} state={user}>
                Name:{name}
                UserName:{username}</Link>
        </div>
    );
};

export default User;