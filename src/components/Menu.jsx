import React from 'react'
import { Component } from 'react'
import '../assets/css/App.css';
import {Link} from "react-router-dom"

class Menu extends Component {

    handleComp=(n)=>
    {
      this.props.handleAC(n);
    }
    render() {
        if(this.props.user=="Employee")
        return (
            <div >

               


                <Link to="/"><li>Home</li></Link>
                <Link to="/ReservationPage"><li>Reservation</li></Link>
                <Link to="/Employee"><li>Report</li></Link>
                <Link to="/Employee"><li>Account</li></Link>

                <Link to="/AboutUs"><li >About Us</li></Link> 
                <Link to="/"> <li >Logout</li> </Link> 
                

            </div>
        )
        else if(this.props.user=="Customer")
        return (
            <div >
           

                <Link to="/"><li>Home</li></Link>
                <Link to="/ReservationPage"><li>Reservation</li></Link>
                <Link to="/UserDashboard"><li>Booking History</li></Link>
                <Link to="/UserDashboard"><li>Account</li></Link>

                <Link to="/AboutUs"><li >About Us</li></Link> 
                <Link to="/"> <li >Logout</li> </Link> 

                

            </div>
        )
        else
        return (
            <div >
                <Link to="/"><li>Home</li></Link>
                <Link to="/ReservationPage"><li>Reservation</li></Link>

                <Link to="/AboutUs"><li >About Us</li></Link> 
                <Link to="/LoginPage"> <li >Login/SignUp</li> </Link> 

                

            </div>
        )

    }
}

export default Menu
