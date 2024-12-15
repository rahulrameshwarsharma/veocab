import React from 'react'
import Logo from '../assets/svgs/Logo.svg';
import Search from '../assets/svgs/Search.svg'
import Settings from '../assets/svgs/Settings.svg'
import Notifications from '../assets/svgs/Notifications.svg'
import AdminProfile from '../assets/svgs/AdminProfile.svg'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className='container nav__container' >
            {/* For logo only */}
            <div className='nav__container__left'>
                <Link to="/" className='nav__logo'>
                    <img src={Logo} alt="Logo" />
                </Link>
            </div>

            {/* For other details */}
            <div className='nav__container__right' >
                {/* search */}
                <div className='nav__container__search'>

                    <img src={Search} alt='Search' />
                    <input
                        className="nav__search"
                        type="text"
                        placeholder="Search here"
                    />
                </div>

                {/* icons */}
                <div className='nav__container__links'>
                    <NavLink to="/s" className="icon">
                        <img src={Settings} alt="Settings" />

                    </NavLink>
                    <NavLink to="/not" className="icon">
                        <img src={Notifications} alt="Notifications" />

                    </NavLink>
                    <NavLink to="/ad" className="icon">
                        <img src={AdminProfile} alt="AdminProfile" />

                    </NavLink>
                </div>
            </div>

        </nav>
    )
}
