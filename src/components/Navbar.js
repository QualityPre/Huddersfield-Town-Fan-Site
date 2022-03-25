import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavbarStyles = styled.nav`
    margin-bottom: 3rem;
    ul {
        margin: 0.2rem 0.1rem 0 0;
        padding: 0.8rem;
        text-align: center;
        list-style: none;
        display: grid;
        grid-template-columns: 0.2fr auto 0.2fr;
        grid-gap: 2rem;
        align-items: center;
    }

    a {
        font-size: 3rem;
        text-decoration: none;
        &:hover {
            color: var(--red);
        }
    }
`;

const Navbar = () => (
    <NavbarStyles>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">Title</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </NavbarStyles>
);

export default Navbar;
