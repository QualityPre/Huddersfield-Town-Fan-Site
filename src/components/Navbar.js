/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'gatsby';

const Navbar = () => (
    <nav className="navbar mb-12 shadow-lg text-netural-content  ">
        <div className="md:container mx-auto flex justify-around">
            <div className="px-2 mx-2">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <FaBars />
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Home</a>
            </div>

            <p> HTAFC Players</p>
            <div className="hidden lg:block pr-40 ">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;
