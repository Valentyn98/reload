import React, {useEffect, useState} from 'react';
import User from "../components/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [user,setUser] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => setUser([...value]))
},[])
    return (
        <div>
            {
                user.map(value => <User key ={value.id} item={value}/>)
            }
            <Outlet/>
        </div>
    );
};

export default Users;