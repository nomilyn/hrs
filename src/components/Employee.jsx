import React,{Component} from 'react'

import "../assets/css/Employee.css"
import {Link} from "react-router-dom"




class Employee extends Component {
    constructor(props) {
        super(props);
    }
    
    handleComp=(n)=>
    {
      this.props.handleAC(n);
    }

    render() {
    
    return (
        <div className="container">
         
                <div class="card">
                    <h1>Welcome, John Doe</h1>
                    <p class="title">Email: johndoe@gmail.com</p>
                    <Link to="/ManageRoom"><a className="employee-btn" onClick={(event) => this.handleComp("ManageRoom")}>Manage Room</a></Link>
                </div>
         
        </div>
    
    )
    }
}

export default Employee;