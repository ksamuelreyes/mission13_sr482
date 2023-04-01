import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './NavBar';

const Layout = () => {
  return (
    <>
      <div></div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
