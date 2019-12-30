import React from 'react';
import { NavLink } from 'react-router-dom';

import { useWindowDimensions } from '../../hooks';

import './index.css';

const Navbar = ({ title }) => {
  const [ windowDimensions ] = useWindowDimensions();
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">{title}</NavLink>
      </div>
      {windowDimensions.innerWidth > 600 ? (
        <ul className="nav-elements">
          <li className="nav-link">
            <NavLink to="/auth">Login & Signup</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/events">Events</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/bookings">Bookings</NavLink>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
