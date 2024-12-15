import React from 'react'
import {Navbar} from '../components/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import {Sidebar} from '../components/Sidebar.jsx';
const DashboardRoute = () => {
  return (
    <>
      
            <Navbar />

            <div style={{ display: 'flex', }}>
                <Sidebar />

                <div style={{ flex: 1, marginLeft: '20px', padding: '20px' }}>
                    <Outlet />
                </div>
            </div>
    </>
  )
}

export default DashboardRoute;