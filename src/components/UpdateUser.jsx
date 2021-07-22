import React from 'react'
import { Component } from 'react'
import "../assets/css/User.css";


class UpdateUser extends Component {

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
            
    
            IdValid: false,
            FnameValid: false,
            LNameValid: false,
            MnameValid: false,
            GenderValid: false,
            AddressValid: false,
            PnumberValid: false,
            EmailValid: false,
          PasswordValid: false,
        
    
          Iderror: '',
          Fnameerror: '',
          LNameerror: '',
          Mnameerror: '',
          Gendererror: '',
          Addresserror: '',
          Pnumbererror: '',
          Emailerror: '',
          Passworderror: '',
          
    
         
    
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
   
      validateField(fieldName, value) {
        let fieldValidationErrors = {

            
            Id: this.state.Iderror,
            Fname: this.state.Fnameerror,
            LName: this.state.LNameerror,
            Mname: this.state.Mnameerror,
            Gender: this.state.Gendererror,
            Address: this.state.Addresserror,
            Pnumber: this.state.Pnumbererror,
            Email: this.state.Emailerror,
            Password: this.state.Passworderror
        };
        
        let IdValid = this.state.IdValid;
        let FnameValid = this.state.FnameValid;
        let LNameValid = this.state.LNameValid;
        let MnameValid = this.state.MnameValid;
        let GenderValid = this.state.GenderValid;
        let AddressValid = this.state.AddressValid;
        let PnumberValid = this.state.PnumberValid;
        let EmailValid = this.state.EmailValid;
        let PasswordValid = this.state.PasswordValid;

        switch (fieldName) {
            case 'Email':
                EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

                fieldValidationErrors.Email = EmailValid ? '' : ' should be valid Email';
                if (fieldValidationErrors.Email != '')
                    fieldValidationErrors.Email = "Username " + ' ' + fieldValidationErrors.email;

                break;
            case 'Password':
                PasswordValid = value.length >= 6;

                fieldValidationErrors.password = PasswordValid ? '' : ' is too short';
                if (fieldValidationErrors.Password != '')
                    fieldValidationErrors.Password = "Password " + ' ' + fieldValidationErrors.Password;
                    else
                    this.state.password=value;
                break;

           

            case 'Fname':
                FnameValid = value.length >= 1;

                fieldValidationErrors.Fname = FnameValid ? '' : ' cant be empty';
                if (fieldValidationErrors.Fname != '')
                    fieldValidationErrors.Fname = "FirstName " + ' ' + fieldValidationErrors.Fname;
                break;

            case 'LName':
                LNameValid = value.length >= 1;

                fieldValidationErrors.LName = LNameValid ? '' : ' cant be empty';
                if (fieldValidationErrors.LName != '')
                    fieldValidationErrors.LName = "Lastname " + ' ' + fieldValidationErrors.LName;

                break;
                
           

            case 'Mname':
                MnameValid = value.length >= 1;

                fieldValidationErrors.Mname = MnameValid ? '' : ' cant be empty';
                if (fieldValidationErrors.Mname != '')
                    fieldValidationErrors.Mname = "MiddleName " + ' ' + fieldValidationErrors.Mname;
                break;
            case 'phone':
                PnumberValid = value.match(/^[0-9]*$/);

                fieldValidationErrors.Pnumber = PnumberValid ? '' : 'can only be number';
                if (fieldValidationErrors.Pnumber != '')
                    fieldValidationErrors.Pnumber = "Phone Number " + ' ' + fieldValidationErrors.Pnumber;
                break;

            default:
                break;
        }
        this.setState({
            

            Iderror: fieldValidationErrors.Id,
            Fnameerror: fieldValidationErrors.Fname,
            LNameerror: fieldValidationErrors.LName,
            Mnameerror: fieldValidationErrors.Mname,
            Gendererror: fieldValidationErrors.Gender,
            Addresserror: fieldValidationErrors.Address,
            Pnumbererror: fieldValidationErrors.Pnumber,
            Emailerror: fieldValidationErrors.Email,
            Passworderror: fieldValidationErrors.Password


        });
    }

    render() {
        
        return (
            <div>

                <div className="updateUserContainer">
                    <h1>Editing Details</h1>
                    <form>
                        <div className="UserForm">
                            <div className="formData">
                                {/* hidden from user view cuz user cant edit or update his Id */}
                                <label for="Id" hidden>User Id</label>
                                <input type="hidden"  name="Id" placeholder="Enter User Id"  value={this.Id} ></input>

                                <label for="Fname">First Name</label>
                                <input type="text" name="Fname" placeholder="Enter First name" value={this.Fname} required></input>

                                <label for="Lname">Last Name</label>
                                <input type="text" name="Lname" placeholder="Enter Last name" value={this.Lname} required></input>

                                <label for="Mname">Middle Name</label>
                                <input type="text" name="Mname" placeholder="Enter Middle name" value={this.Mname}></input>
                                
{/* Gender Can not be updated */}
            
                                <label for="Address">Address</label>
                                <input type="text" name="Address" placeholder="Enter Address" value={this.Address} required></input>

                                <label for="Pnumber">Phone Number</label>
                                <input type="number" name="Pnumber" min="10" placeholder="Enter phone number" value={this.Pnumber}></input>
 
                                <label for="Email">Email</label>
                                <input type="text" name="Email" placeholder="Enter Email" value={this.Email} required></input>

                                <label for="Password">Password</label>
                                <input type="text" name="Password" placeholder="Enter Password" value={this.Password} required></input>
 
                            </div>
                            <div className="UserSubmit">
                                {/* on click saves the data to the file and shows user the msd ur info updated and back to dashboard  */}
                                <input type="submit" value="Submit"  onClick={(event) => this.handleComp("UserDashboard")}></input>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        
        )
    }
}
export default UpdateUser