import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <ToastContainer/>
        </div>
    );
};

export default RootLayout;