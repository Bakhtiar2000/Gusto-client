import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
            <div className="navbar bg-base-100 pe-8 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <nav tabIndex={0} className="menu menu-compact dropdown-content mt-3 px-2 py-5 shadow bg-base-100 rounded-box w-40 flex items-center">
                            <ActiveLink to='/'>Home</ActiveLink>   
                            <ActiveLink to='/contact'>Contact</ActiveLink>  
                            <ActiveLink to='/blog'>Blog</ActiveLink>
                        </nav>
                    </div>
                    <a className="title text-3xl">Gusto</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <nav className="menu menu-horizontal px-1 gap-5 flex items-center">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/contact'>Contact</ActiveLink>                                             
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </nav>
                </div>
                <div className="navbar-end">
                    <button className='btn'> <Link to='/login'>Login</Link></button>
                </div>
            </div>
    );
};

export default Header;