import React from 'react';
import './Navbar.css';
import menu from '../../../../images/menu.png';
import logo from '../../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <div className="container mb-2">
            <nav className="navbar navbar-expand-lg  nav-font">
                <button className="navbar-toggler bgMenu w-40 btn-dark p-2 pl-3 pr-3 ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <img style={{ width: "25px" }} src={menu} alt="" />
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    
                        <img style={{ width: "100px" }} src={logo} alt=""/>
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-3 p-1">
                            <a className="nav-link text-dark">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#carousel">Our Portfolio</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#service">Our Service</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#review">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link text-dark" href="#footer">Contact Us</a>
                        </li>
                      <div className="resLogBtn"><button className="nav-item btn px-4 h-75 btnLogin">Sign In</button></div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;