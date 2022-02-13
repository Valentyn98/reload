import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/posts'>Post</Link>
            <Outlet/>
        </>
    );
};

export default Layout;