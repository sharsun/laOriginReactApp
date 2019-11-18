import React from 'react';
import Nav from '../nav/index';
import logo from '../../static/img/logo.jpg';

export default function Header() {
    return (
        <header>
            <div className="navbar">
                <div className="navbarleft">
                    <img className="logo" src={logo}></img>
                </div>
                <div className="navbarright">
                   <Nav/>
                </div>              
            </div>
         </header>
    )
}
