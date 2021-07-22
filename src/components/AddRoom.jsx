import React from 'react'

import { Component } from 'react'
import "../assets/css/Employee.css" 

class AddRoom extends Component {
    constructor(props) {
        super(props);
    }

    handleComp=(n)=>
    {
      this.props.handleAC(n);
    }

    handleSubmit() {
        let databody = {
            "Id": this.state.Id,
            "Type": this.state.Type,
            "Description": this.state.Description,
            "PersonCapacity": this.state.PersonCapacity,
            "Available": this.state.Available
        }

        return fetch('http://localhost:5002/stored', { //used for when connecting to DB
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }

    render() {
        if (this.props.active === "addRoom")
        return (
          
                <div className="addRoomContainer">
                    <h1>Add Room</h1>
                    <form>
                        <div className="AddRoom">
                            <div className="inputs">
                                <label for="Id">Room Id</label>
                                <input type="number" name="Id" placeholder="Enter Room Id" min="201" value={this.Id} required></input>

                                <label for="Type">Room Type</label>
                                <select id="Type" name="Type">
                                    <option value="1">1-Standard Room</option>
                                    <option value="2">2-Deluxe Room</option>
                                    <option value="3">3-Suite</option>
                                </select>

                                <label for="Description">Description</label>
                                <input type="text" name="Description" placeholder="Description of Room" value={this.Description} required></input>

                                <label for="PersonCapacity">Number of Person(s)</label>
                                <input type="number" name="PersonCapacity" min="1" max='4' placeholder="Enter number of Person(s)" value={this.PersonCapacity}></input>
                            </div>
                            <p>Available</p>
                            <div className="radioButton">
                                <input type="radio" name="Available" value={this.Available} required></input>
                                <label for="True">True</label>
                                <input type="radio" name="Available" value={this.Available}></input>
                                <label for="False">False</label>
                            </div>


                            <div className="addSubmit">
                                <input type="submit" value="Submit" onClick={(event) => this.handleComp("ManageRoom")}></input>
                            </div>
                        </div>
                     

                    </form>
                </div>
            
        )
        return(
            <div></div>
        )
    }
}
export default AddRoom