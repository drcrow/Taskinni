import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Navbar = () => (
<header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand mb-0 h1"><img src="T.png" height="30" alt="" loading="lazy" /> Taskinni</a>
    <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only"></span></Link>
        </li>
        </ul>
    </nav>
</header>
)

function mapStateToProps(state){
    return {
        state: state
    }
}

export const ConnectedNavbar = connect(mapStateToProps)(Navbar);