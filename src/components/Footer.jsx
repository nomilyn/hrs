import React from 'react'
import { Link } from "react-router-dom"

import '../assets/css/App.css';

import facebookImage from "../assets/img/facebook.jpg";
import instagramImage from "../assets/img/instagram.jpg";
import twitterImage from "../assets/img/twitter.jpg";
import { Component } from 'react';
import { render } from '@testing-library/react';


class Footer extends Component {
    handleComp=(n)=>
    {
      this.props.handleAC(n);
    }
    render()
    {
    
    return (
        <footer>
            <nav>
            <p>© 2021. All rights reserved.</p>
                <ul>
                    <Link to="/Terms"><li > Terms and Conditions</li></Link>
                    <Link to="/ContactUs"><li > Contact Us</li></Link>
                    <li> <a href="https://www.facebook.com"><img src = {facebookImage} alt = ""/> </a> </li>
                    <li> <a href="https://www.twitter.com"><img src = {twitterImage} alt = ""/> </a> </li>
                    <li> <a href="https://www.instagram.com"><img src = {instagramImage} alt = ""/> </a> </li>
                </ul>
            </nav>
        </footer>
    )
    }
}

export default Footer
//ContactUs,TermsandConditions,socialMedia