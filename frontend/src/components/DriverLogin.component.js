import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
export default class DriverLogin extends Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /> <br /><br /><br /><br /><br />
                <div className="row offset-lg-4">

                    <div className="ui inverted segment col-lg-6">
                        <form method="post" name="DriverLoginForm" autoComplete="off"
                            onSubmit={this.onSubmit} className="ui inverted form">
                            <div className="field col-lg-12">
                                <label>Email Id</label>
                                <div className="ui fluid input ">
                                    <input type="email"
                                        placeholder="Enter Your Email Id"
                                        className="form-control" name="driver_emailId"
                                        value={this.state.fields.driver_emailId}
                                        onChange={this.handleChange}
                                    />
                                    <div className={this.state.errors.driver_emailId ? 'alert alert-danger' : ''}>
                                        {this.state.errors.driver_emailId}
                                    </div>
                                </div>
                            </div>
                            <div className="field col-lg-12">
                                <label>Password</label>
                                <div className="ui fluid input ">
                                    <input type="password"
                                        placeholder="Enter your Password"
                                        name="driver_password"
                                        value={this.state.fields.driver_password}
                                        onChange={this.handleChange} />
                                    <div className={this.state.errors.driver_password ? 'alert alert-danger' : ''}>
                                        {this.state.errors.driver_password}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="field">
                                <div className="ui checkbox">
                                    <input type="checkbox" className="hidden" readonly="" tabindex="0" className="form-control" />
                                    <label>I agree to the Terms and Conditions</label>
                                </div>
                            </div> */}
                            <button type="submit" className="ui button form-control btn btn-success">Submit</button>
                        </form>
                        <br/>
                        <h4>Don't have Account?&nbsp;&nbsp;&nbsp;<Link to={"DriverSignUp"}>SignUp</Link></h4>
                    </div>

                </div>
            </div>

        )
    }

    constructor() {
        super();
        this.state = {
            fields: {
                driver_emailId: '',
                driver_password: '',
            },
            errors: {
                },
                formIsValid: true
        }
        //common handler
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        // this.handleChange=this.handleChange.bind(this);
        // this.onSubmit=this.onSubmit.bind(this);
    }


handleChange(e) {
    let fields = this.state.fields;
    // //accessing input boxes value with their names
    // //and storing in fields
    fields[e.target.name] = e.target.value;
    this.setState({
        fields: fields
    });
    //     const { value, name } = event.target;
    // this.setState({
    //   [name]: value
    // });
    //  console.log(this.state.fields);
}
onSubmit = (event) => {
    event.preventDefault();
    // fetch('/api/CustomerLogin', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    if(this.validateForm()){
    const newDriver= {
        //     // customer_firstName: this.state.customer_firstName,
        //     // customer_lastName: this.state.customer_lastName,
        //     // customer_mobileNumber: this.state.customer_mobileNumber,
        driver_emailId: this.state.fields.driver_emailId,
        driver_password: this.state.fields.driver_password
    };
    console.log(newDriver);

    //   //calling services from api
    axios.post('http://localhost:4000/api/driver/driver-login', newDriver)
        //   .then(res=>console.log(res.data));
        .then(res => {
            if (res.status === 200) {
                this.props.history.push('/booking');

            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            // console.error(err);
            alert('Error in logging, please try again');
        });
    }
    // event.preventDefault();
    // fetch('http://localhost:4000/api/customer/CustomerLogin', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       this.props.history.push('/booking');
    //     } else {
    //       const error = new Error(res.error);
    //       throw error;
    //     }
    //   })
    //   .catch(err => {
    //      console.error(err);
    //     alert('Error in logging, please try again');
    //   });
}

//validate for form fields
validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["driver_emailId"]) {
        formIsValid = false;
        errors["driver_emailId"] = "Please enter your Email-Id";
    }
    else if (typeof fields["driver_emailId"] !== "undefined") {
        //regular  expression for email validation
        //var pattern = new RegExp(/^(("[\w-\s]+")|(?)))
        //if (!pattern.test(fields["email"])){}
        if (!(fields["driver_emailId"].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
            formIsValid = false;
            errors["driver_emailId"]
                = "Please enter Valid Email-Id.";
        }
    }
    else {
        errors["driver_emailId"] = "";
    }//end of emailId Validators
    //Beginnig of password Validators
    if (!fields["driver_password"]) {
        formIsValid = false;
        errors["driver_password"] = "Please enter your Password";
    }
    else if (typeof fields["driver_password"] !== "undefined") {
        //regular  expression for email validation
        //var pattern = new RegExp(/^(("[\w-\s]+")|(?)))
        //if (!pattern.test(fields["email"])){}
        if (!(fields["driver_password"].length >= 8)) {
            formIsValid = false;
            errors["driver_password"]
                = "Password is too Short.";
        }
    }
    else {
        errors["driver_password"] = "";
    }//password validations closed
    this.setState({
        errors: errors,
        formIsValid: formIsValid
    });
    return formIsValid;

}//endof validateForm() function()
}