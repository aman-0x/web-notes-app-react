import React from 'react';
import { NavLink } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
import './Header.css';

const Header = () => (
  <div className="header-navbar">
    <NavLink
    //   activeclassname="navbar__link--active"
    //   className="navbar__link"
      className={(state) => state.isActive ? "navbar__link navbar__link--active" : "navbar__link"}
      to="/"
    >
      Home
    </NavLink>
    <NavLink
    //   activeclassname="navbar__link--active"
    //   className="navbar__link"
      className={(state) => state.isActive ? "navbar__link navbar__link--active" : "navbar__link"}
      to="/notes"
    >
      Notes
    </NavLink>
    <NavLink
    //   activeclassname="navbar__link--active"
    //   className="navbar__link"
      className={(state) => state.isActive ? "navbar__link navbar__link--active" : "navbar__link"}
      to="/about"
    >
      About
    </NavLink>
  </div>
);

export default Header;