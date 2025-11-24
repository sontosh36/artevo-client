import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default RootLayout;