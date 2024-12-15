import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const DashboardRoute = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default DashboardRoute;