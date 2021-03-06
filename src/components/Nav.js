import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Hot Now</Link>
                </li>
                <li><Link to="/pizzas">Pizzas</Link></li>
            <li>
                <Link to="/">
                LOGO
                </Link>
            </li>
            <li>
                <Link to="/slicemasters">
                    Slicemasters
                </Link>
            </li>
            <li>
                <Link to="/order">
                Orders</Link>
            </li>
            </ul>
        </nav>
    )
}
