import React from 'react'

const Room = (props) => {
    return (
        <div className="resort-card">

            <a href = "/"> 
                <img src={props.image} alt=""/>   
            </a> 

            <div className="resortContent">
                <h3>{props.title}</h3>
                <p>${props.price} per night</p>
            </div>

        </div>
    )
}

export default Room;
