import React from 'react';
import { Link } from 'react-router-dom';
import ShoeWorld from '/Users/nadiaberry/Documents/new-ecommerce-project/assets/ShoeWorld.png';

function NavBar(){
        return (
            <nav>
                <img className="logo"
                src={ShoeWorld}
                 alt="shoeworld logo" />
                <ul className="nav-link">
                    <Link to='/homepage'>
                    <li>Homepage</li>
                    </Link>
                    <Link to="/products">
                    <li>Products</li>
                    </Link>
                    <Link to="contacts">
                    <li>Contacts</li>
                    </Link>
                </ul>
            </nav>
        )
    }



export default NavBar;