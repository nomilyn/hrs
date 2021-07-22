import React, { Component } from "react";
import "../assets/css/SearchMenu.css";

class SearchMenu extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            Type: '',
            Capacity: '',
            Price: '',
            Minprice: '',
            Maxprice: '',

            TypeValid: false,
            CapacityValid: false,
            PriceValid: false,
            MinpriceValid: false,
            MaxpriceValid: false,
    


    TypeError: '',
    CapacityError: '',
    PriceError: '',
    MinpriceError: '',
    MaxpriceError: '',

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
    if (this.props.active == "SearchMenu")
    return (
        <div>

            <div className="searchContainer">
                <h1>Search </h1>
                <form>
                    <div className="SearchMenu">
                        <div className="formData">
                            {/* Hidden label n field for id to pass the user searched data */}
                            <label for="Id" hidden>Search  Id
                            <input type="hidden" name="Id" placeholder="1010"  value={this.Id} ></input></label>

                            <label for="Type">Room Type</label>
                            <select id="Type" name="Type">
                                <option value="1" selected="True">Dulex</option>
                                <option value="2">Standard</option>
                                <option value="3">Executive</option>
                            </select>
                            <label for="capacity">Room Capacity</label>
                            <select id="capacity" name="capacity">
                                <option value="1" selected="True">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
         
                            <label for="minprice">Min price</label>
                            <input type="number" name="minprice" min="100"  placeholder="100" value={this.minprice}></input>
                            <label for="maxprice">Max price</label>
                            <input type="number" name="maxprice"   placeholder="250" value={this.maxprice}></input>
                        </div>
                        
                        <div className="SearchMenuSubmit">
                            {/* On click sends to the filtered rooms according to the search of user */}
                            <input type="submit" value="Find Rooms" onClick={(event) => this.handleComp("RoomList")}></input>
                        </div>
                       
                    </div>

                </form>
            </div>
        </div>
    );

    return (
      <div></div>
    )
}
}
export default SearchMenu

       

