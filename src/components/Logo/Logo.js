import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <Link to="/">
            <img className="logo" src={logo} alt="logo" />
        </Link>
    );
};

export default Logo;