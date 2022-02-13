import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {userServ} from "../../srvices/user.serv";

const UserDet = () => {
    const {id} = useParams()
    const {state} = useLocation()
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(state){
            setUser(state)
            return
        }
        userServ.getUserId(id).then(value => setUser({...value}))
    },[id])
    return (
        <div>
            {
                user && <div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                </div>
            }
            <Link to={'posts'}><button>Show Post</button></Link>
            <Link to={'albums'}><button>Show Albums</button></Link>
            <Outlet/>
        </div>
    );
};

export default UserDet;