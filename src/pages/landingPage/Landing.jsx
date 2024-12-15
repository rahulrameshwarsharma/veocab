import React from 'react'
import logo from '../../assets/images/logo.png';
import sideImg from '../../assets/images/coupleCar.png';
import { Link } from 'react-router-dom';
import '../../index.css';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-container form-container">
      <img className='logo-img' src={logo} alt="" />

      <div className="nav-tab">
      <div className="left-container">
        
        <div className="btnContainer">
          <Link to='/login'><button className='theme__toggle-btn'>Admin Login</button></Link>
          <Link to='/sub-admin-login'><button className='theme__plain-btn'>Sub admin login</button></Link>
        </div>

        <div className="bottom-text red-hat-text">
          Move with <br /><span> Safely</span> to your destination.
        </div>

      </div>

      <div className="right-container">
        <img className='side-img' src={sideImg} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default Landing;