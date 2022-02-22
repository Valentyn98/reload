import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const User = (props) => {
    let {item} = props
    let {name,id} = item
    let navigate = useNavigate()
    return (
        <div>
            {id}{name} <Link to={id.toString()} state={item}>UserDet</Link>

            <button onClick={()=>{
                navigate(`${id}/posts`)
            }} >PostsUser</button>
        </div>
    );
};

export default User;