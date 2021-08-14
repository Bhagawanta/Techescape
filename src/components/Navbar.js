import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../Assets/Group 1284.png'
import './Navbar.css';
export const Navbar = () => {
    return (
        <div className="App">
            <div className="Navbar">
                <div className="Navbar-logo">
                    <img src={Logo} height="55px" width="190px" alt="Navbar Logo"/>
                </div>    
                <ul className="Menu">
                    <li><Link to="/home">HOME</Link></li>
                    <li><Link to="/service">SERIVCES</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
            </div>  
            <div className="Navbar-bottom"></div>  
        </div>
    )
}
