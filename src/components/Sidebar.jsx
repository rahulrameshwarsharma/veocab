import React from 'react'
import { NavLink } from 'react-router-dom'

import Dashboard from '../assets/svgs/Dashboard.svg'
import DriversList from '../assets/svgs/DriversList.svg'
import HostsList from '../assets/svgs/HostsList.svg'
import UsersList from '../assets/svgs/UsersList.svg'

export const Sidebar = () => {
    return (
        <div className="sidebar">

            <NavLink to="/dashboard" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={Dashboard} alt="Dashboard" className="sidebar__link__img" /> <span>Dashboard</span>
                </div>

            </NavLink>

            <NavLink to="/dashboard/userlist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={UsersList} alt="User List" className="sidebar__link__img" /> <span>User List</span>
                </div>
            </NavLink>

            <NavLink to="/dashboard/homelist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={HostsList} alt="Home List" className="sidebar__link__img" /> <span>Hosts List</span>
                </div>
            </NavLink>

            
            <NavLink to="/dashboard/driverlist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Driver List</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/allCars" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>All cars</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/allBookings" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>All Bookings</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/transactionList" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Transaction List</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/hostVerification" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Host Verification</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/referralHistory" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Referral Hostory</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/queries" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Queries</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/coupons" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Coupons</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/banners" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Banners</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/services" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Services</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/goal" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Goal</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/ReferralLevel" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Referral Level</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/terms" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Terms & Conditions</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/notification" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Push Notification</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/driverlist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Share & Taxes</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/driverlist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Payout Management</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/driverlist" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Payment methods</span>
                </div>
            </NavLink>

            <NavLink to="/dashboard/livechat" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Live chat</span>
                </div>
            </NavLink>
            


            <NavLink to="/dashboard/faqs" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>FAQs</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/livechat" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Contact support</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/livechat" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Sub admin</span>
                </div>
            </NavLink>
            
            <NavLink to="/dashboard/earnings" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Earnings</span>
                </div>
            </NavLink>

            <div style={{marginTop: 50}}></div>
            
            <NavLink to="/logout" className="sidebar__link" >
                <div className="sidebar__container">
                    <img src={DriversList} alt="Driver List" className="sidebar__link__img" /> <span>Logout</span>
                </div>
            </NavLink>
            
            
        </div>
    )
}
