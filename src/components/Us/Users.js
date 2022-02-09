import React, {useEffect, useState} from 'react';

import User from "./User";
import userServices from "../../Services/user.serv";
import Details from "../De/Details";
import Posts from "../Post/Posts";
import Post from "../Post/Post";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [status, setStatus] = useState(false)
    useEffect(()=>{
        userServices.getAll().then(value => setUsers(value))
    },[])

    const showDetail = (id) => {
        userServices.getById(id).then(value => setUser(value))
    }

    const showPost = (status) =>{
        setStatus(status)
    }
    return (
        <div>
            {users.map(value =>
                <User key={value.id} user={value} showDetail={showDetail}/>)
            }

            <div>
                {user &&
                    <div>
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.phone}</div>
                        <button onClick={()=> {showPost(true)}}>showPost</button>
                        <button onClick={()=> {showPost(false)}}>HidePost</button>
                    </div>
                }
                {
                    status && <Posts id={user.id}/>
                }
            </div>
        </div>
    );
};
export default Users;