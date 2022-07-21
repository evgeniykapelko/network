import React from 'react';
import classes from './Nav.module.css';
import {
    NavLink
  } from "react-router-dom";
const Nav = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : 'none')} to='profile'>Prfile</NavLink>
                </div>
            <div className={classes.item}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : 'none')} to='dialog'>Messages</NavLink>
                </div>
            <div className={classes.item}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : 'none')} to='news'>News</NavLink>
                </div>
            <div className={classes.item}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : 'none')} to='music'>Music</NavLink>
                </div>
            <div className={classes.item}>
                <NavLink className={(navData) => (navData.isActive ? classes.active : 'none')} to='settings'>Settings</NavLink>
                </div>
        </nav>
    )           
}

export default Nav;
