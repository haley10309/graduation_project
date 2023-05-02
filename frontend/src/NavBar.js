import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
        <a href="/" className="site-title">
            Konfold
        </a>
        <ul>
            <li className="active">
                <a href="/Search">Search</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li >
                <a href="/Refer">Reference</a>
            </li>
        </ul>
    </nav>
    );
};

export default Navbar;