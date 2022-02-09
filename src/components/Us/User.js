import React from 'react';

const User = ({user:{id , name},showDetail}) => {

    return (
        <div>
            <div> id : {id}</div>
            <div> name : {name}</div>
            <div><button onClick={()=>showDetail(id)}>UserDetail</button></div>
        </div>
    );
};

export default User;