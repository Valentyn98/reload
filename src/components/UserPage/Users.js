import React, {useEffect, useState} from 'react';
import {userServ} from "../../srvices/user.serv";
import User from "./User";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUser] =useState([])
    useEffect(()=>{
        userServ.getAll().then(value => setUser(value))
    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user} />)}

            <Outlet/>
        </div>
    );
};

export default Users;