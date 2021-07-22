import React from 'react'
import "../assets/css/User.css";
import { useState } from 'react';
import { Component } from "react";
import UpdateUser from './UpdateUser'
import {Link} from "react-router-dom"



class UserDashboard extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            
            Id: '',
            Fname: '',
            LName: '',
            Mname: '',
            Gender: '',
            Address: '',
            Pnumber: '',
            Email: '',
            Password: '',
    
        }
      }
      handleComp=(n)=>
      {
        this.props.handleAC(n);
      }
    
      handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
      }
    render() {
       
        return (
            <div>

                <div className="UserContainer">
                    <h1> Welcome User </h1>
                    <form>
                        <div className="UserForm">
                            <div className="formData">
                                <label for="Id" hidden>User Id</label>
                                <input type="hidden" name="Id" placeholder="1010"  value={this.Id} readonly ></input>

                                <label for="Fname">First Name</label>
                                <input type="text" name="Fname" placeholder="Jonh" value={this.Fname} readonly="true"></input>

                                <label for="Lname">Last Name</label>
                                <input type="text" name="Lname" placeholder="Snow" value={this.Lname} readonly="true"></input>

                                <label for="Mname">Middle Name</label>
                                <input type="text" name="Mname" placeholder="-" value={this.Mname} readonly="true"></input>
                                

                                <label for="Gender">Gender</label>
                                <select id="Gender" name="Gender" disabled="true">
                                    <option value="1" selected="True">Male</option>
                                    <option value="2">Female</option>
                                    <option value="3">Wish Not To Disclose</option>
                                </select>
                                {/* <p>Gender</p>
                                 <div className="radioButton">
                                <input type="radio" name="Male" value={this.Male} required> Male</input>
                                <input type="radio" name="Female" value={this.Female}> Female</input>
                                <input type="radio" name="NotToDisclose" value={this.NotToDisclose}> Wish Not to Disclose</input>
                                     </div> */}

                                <label for="Address">Address</label>
                                <input type="text" name="Address" placeholder="36-Middlefield Road,Ontario" value={this.Address} readonly="true"></input>

                                <label for="Pnumber">Phone Number</label>
                                <input type="number" name="Pnumber" min="10" placeholder="416-890-6878" value={this.Pnumber}readonly="true"></input>
 
                                <label for="Email">Email</label>
                                <input type="text" name="Email" placeholder="john.snow@gmail.com" value={this.Email} readonly="true" ></input>

                                <label for="Password">Password</label>
                                <input type="text" name="Password" placeholder="##@@$%%%#" value={this.Password} readonly="true" ></input>
 
                            </div>
                           
                            <div className="UserSubmit">
                            <Link to="/UpdateUser"><input type="submit" value="Edit/Update" onClick={(event) => this.handleComp("UpdateUser")}></input></Link>
                            </div>
                          
                        </div>

                    </form>
                </div>
            </div>
       
        )
    }
}

export default UserDashboard
