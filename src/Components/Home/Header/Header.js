import React from 'react';
import MainSec from './MainSec/MainSec';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <section style={{marginBottom: "30px"}}>
        <div className="headerSec mb-2">
            <Navbar></Navbar>
            <MainSec></MainSec>
        </div>
        </section>
    );
};

export default Header;