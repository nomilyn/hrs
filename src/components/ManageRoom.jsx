import React from 'react'

import { Component } from 'react'
import "../assets/css/Employee.css"
import {Link} from "react-router-dom"

class ManageRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [
                { id: 112, Type: 3, Description: "King size bed, Totally soundproofed and equipped with high tech comforts.", PersonCapacity: 3, Available: "false" },
                { id: 113, Type: 1, Description: "CN Tower facing and wide windows", PersonCapacity: 1, Available: "true" },
                { id: 114, Type:2, Description:"Luxurious Bedroom with a beautiful view", PersonCapacity:2, Available:"false" },
                { id: 115, Type:3, Description:"Superior Suite with the best bedding and ambience", PersonCapacity:2, Available:"true" }
            ]
        }
    }

    handleComp=(n)=>
    {
      this.props.handleAC(n);
    }
    renderTableData() {
        return this.state.rooms.map((room, index) => {
            const { id, Type, Description, PersonCapacity, Available } = room //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{Type}</td>
                    <td>{Description}</td>
                    <td>{PersonCapacity}</td>
                    <td>{Available}</td>
                    <td className='operation'>
                        <button onClick="">Delete</button>
                        
                        <button onClick={(event) => this.handleComp("updateRoom")} >Update</button>
                       
                    </td>
                </tr>
            )
        })
    }

    removeData = (id) => {
        //delete code
    }
    UpdateData = (id) => {

        //update code
    }

    renderTableHeader() {
        let headerElement = ['id', 'Type', 'Description', 'PersonCapacity', 'Available', 'Operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
       
        return (

            <div className="ManageRoom">
                    <h1>Manage Room</h1>
                    <Link to="/AddRoom"><a className="addRoom-btn" onClick={(event) => this.handleComp("addRoom")} >Add Room</a></Link>
                    <table id='rooms'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table></div>
                
           
        )
       
    }
}

export default ManageRoom
