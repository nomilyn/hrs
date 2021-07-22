import React, { Component } from 'react'
import Room from "./Room"
import HotelContext from "./HotelContext";

import image1 from "../assets/img/1.jpg";
import image2 from "../assets/img/2.jpg";
import image3 from "../assets/img/3.jpg";


class ReservationPage extends Component {
    
    render(){

    return (
       
        <section id="section-resort-list">

                <div className= "container">

                    <h1>Choose One!!!</h1>

                    <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">

                        <Room title="Standard" image={image1} price="140"/>
                        <Room title="Delux" image={image2} price="180"/>
                        <Room title="Suite" image={image3} price="230"/>
                        

                    </div>

                </div>
            </section>
   
    )
    }
}




export default ReservationPage
