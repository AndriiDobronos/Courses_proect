import React from 'react'
import './header.styles.scss'
import {NavLink} from "react-router-dom";
import LogoCV from "./LogoCV.jsx";


export default () => {
    return (<nav className={'nav'} >
            <input type="checkbox" className={"nav__checker"} id={"nav__toggle"}/>
        <label className={"nav__toggle"} htmlFor={"nav__toggle"}>
            <span></span>
            <span></span>
            <span></span>
        </label>
            <img className={"nav-menu-logo"} src="../static/Logo/cv-products.svg" alt="logo"/>
        <ul className={'nav__list icon'}>
           <LogoCV />
          <li className={"nav__link"}><NavLink to="/">Home</NavLink></li>
          <li className={"nav__link"}><NavLink to="/resume">Resume</NavLink></li>
          <li className={"nav__link"}><NavLink to="/portfolios">Portfolios</NavLink></li>
          <li className={"nav__link"}><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>
        </nav>
        )
}


