import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import { ToastContainer } from 'react-toastify';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default RootLayout;