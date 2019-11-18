import React from 'react';
import '../../sass/components/header.scss';

export default function  Nav(){
    return(
        <nav className="nav">
            <ul className="nav__links">
                <li className="nav__link">About Us</li>
                <li className="nav__link">Who We Are</li>
                <li className="nav__link">What We Do</li>
                <li className="nav__link">Contact Us</li>
            </ul>
        </nav>
    )
}