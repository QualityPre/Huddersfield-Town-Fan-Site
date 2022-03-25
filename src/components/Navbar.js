import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/">Title of site/or logo</Link>
            </li>
        </ul>
    </nav>
);

export default Navbar;