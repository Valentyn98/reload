import React, {useEffect} from 'react';
import {useLocation, useParams} from "react-router-dom";

const UserDetails = () => {
    let {state} =  useLocation()
    console.log(state)

    return (
        <div>
            {state.username}
            {state.email}

        </div>
    );
};

export default UserDetails;