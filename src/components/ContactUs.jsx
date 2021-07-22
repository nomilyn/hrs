import React from 'react'

import Header from "../components/Header";
import Footer from "../components/Footer";

import mapImage from "../assets/img/map.jpg";
import '../assets/css/App.css';

const ContactUs = (props) => {
   
    return (
       
            <div className = "contact-us">
                <h3>Contact Us</h3>
                <table className = "table-contact-us">
                    <tr>
                        <td><h4>Office Location</h4></td>
                        <td colspan="2" rowspan="8"><img src = {mapImage} alt = "" height = "100%" width = "100%"/> </td>
                    </tr>
                    <tr>
                        <td>QuadSquad Building</td>
                    </tr>
                    <tr>
                        <td>500 King Avenue, Unit 555</td>
                    </tr>
                    <tr>
                        <td>Toronto, Ontario</td>
                    </tr>
                    <tr>
                        <td>M1N2R3</td>
                    </tr>
                    <tr>
                        <td> </td>
                    </tr>
                    <tr>
                        <td><h4>General Inquiry</h4></td>
                    </tr>
                    <tr>
                        <td>Email: infoquadsquad@gmail.com</td>
                    </tr>
                </table>
</div>

    )
}

export default ContactUs
 