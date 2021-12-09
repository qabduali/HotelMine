import React, {Component} from "react";
import '../css/Form.css'

class Form extends Component {
    constructor( props ){
        super( props )

        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            phoneNumber : "",
            password : "",
        }
        
        this.handleSubmit = this.handleSubmit.bind( this )
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    phonehandler = (event) => {
        this.setState({
            phoneNumber: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName} Registered Successfully!`)
        console.log(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            password: "",
        })
        event.preventDefault()
    }

    render(){
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    
                    <h3>Registration</h3>
                    <label>First Name* : </label><input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name" required/><br/>
                    <label>Last Name* : </label><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name" required/><br/>
                    <label>Email* : </label><input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email" required/><br/>
                    <label>Phone Number* : </label><input type="tel" value={this.state.phoneNumber} onChange={this.phonehandler} placeholder="Phone Number" required/><br/>
                    <label>Password* : </label><input type="password" value={this.state.password} onChange={this.passwordhandler} pattern = "[A-Za-z\d]{8,}" placeholder="Password" required/><br/>

                    <div className="form-inputs">
                        <label htmlFor="fname" className="form-label">
                            First Name* : 
                            <input className="form-input" type="text" name="fname" value={this.state.firstName} onChange={this.firsthandler} placeholder="First Name..." required/>
                        </label>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="lname" className="form-label">
                            Last Name* : 
                            <input className="form-input" type="text" name="fname" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name..." required/>
                        </label>
                    </div>

                    <br/>
                    <label>Last Name* : </label><input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last Name..." required/><br/>
                    <label>Email* : </label><input type="email" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." required/><br/>
                    <label>Phone Number* : </label><input type="tel" value={this.state.phoneNumber} onChange={this.phonehandler} placeholder="Phone Number..." required/><br/>
                    <label>Password* : </label><input type="password" value={this.state.password} onChange={this.passwordhandler} pattern = "[A-Za-z\d]{8,}" placeholder="Password..." required/><br/>
                    <input type="submit" value="Submit" />
                    
                    
                </form>
            </div>
        )
    }
}

export default Form