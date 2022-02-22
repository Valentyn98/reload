import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <ol>
                <li><Link to={'/Layout/users'}>User</Link></li>
                <li><Link to={'/Layout/posts'}>Post</Link></li>
                <li><Link to={'/Layout/comments'}>Comments</Link></li>
            </ol>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;