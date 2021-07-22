import React from 'react'
import Menu from './Menu';
import { Link } from "react-router-dom"
import '../assets/css/App.css';

import logoImage from "../assets/img/logo.jpg";

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li> <img src={logoImage} alt="" height="70" width="10" /></li>

                        <li><Menu user={props.user} handleAC={props.handleAC} /></li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header

/*
 */
//<li> <Menu user={props.user} handleAC={props.handleAC} /> </li>