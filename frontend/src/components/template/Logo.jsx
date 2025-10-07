import './Logo.css';
import React from 'react';
import logo from '../../assets/img/logo.png';

const Logo = props => (
    <aside className="logo">
        <a href='/' className='logo'>
            <img src={logo} alt="logo" />
        </a>
    </aside>
);

export default Logo;