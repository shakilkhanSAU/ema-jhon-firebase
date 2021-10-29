import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav className="navigation">
                <NavLink activeStyle={{
                    color: "green"
                }} to="/shop">Shop</NavLink>

                <NavLink activeStyle={{
                    color: "green"
                }} to="/review">Order Review</NavLink>
                <NavLink activeStyle={{
                    color: "green"
                }} to="/inventory">Manage Invantory</NavLink>
                <span style={{ color: 'white' }}>{user?.displayName}</span>
                {
                    user.email ?
                        <button onClick={logOut}>Log out</button>
                        :
                        <NavLink activeStyle={{
                            color: "green"
                        }} to="/login">Login</NavLink>
                }
            </nav>

        </div>
    );
};

export default Header;