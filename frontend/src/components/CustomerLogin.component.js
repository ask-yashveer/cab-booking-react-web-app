import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import axios from 'axios';
export default class CustomerLogin extends Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="row offset-lg-4">
                    <div className="ui inverted segment col-lg-6">
                        <form method="post" name="CustomerLoginForm" autoComplete="off"
                            onSubmit={this.onSubmit} className="ui inverted form">
                            <div className="field col-lg-12">
                                <label>Email Id</label>
                                <div className="ui fluid input ">
                                    <input type="email" placeholder="Enter your Email Id"
                                        className="form-control"
                                        name="customer_emailId"
                                        value={this.state.fields.customer_emailId}
                                        onChange={this.handleChange} />
                                    <div className={this.state.errors.customer_emailId ? 'alert alert-danger' : ''}>
                                        {this.state.errors.customer_emailId}
                                    </div>
                                </div>
                            </div>
                            <div className="field col-lg-12">
                                <label>Password</label>
                                <div className="ui fluid input ">
                                    <input type="password" placeholder="Enter your Password" className="form-control"
                                        name="customer_password"
                                        value={this.state.fields.customer_password}
                                        onChange={this.handleChange} />
                                    <div className={this.state.errors.customer_password ? 'alert alert-danger' : ''}>
                                        {this.state.errors.customer_password}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="form-control" />
                                <label>I agree to the Terms and Conditions</label>
                            </div>
                        </div> */}


                            <button className="ui button form-control btn btn-success">Submit</button>
                        </form>
                        <br/>
                        <h4>Don't have Account?&nbsp;&nbsp;&nbsp;<Link to={"CustomerSignUp"}>SignUp</Link></h4>
                    </div>
                </div>
            </div>
        )
    }
    constructor() {
        super();
        this.state = {
            fields: {
                customer_emailId: '',
                customer_password: '',
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
    //Common onchange hangler for both the text file

    // this.submitLoginForm = this.submitLoginForm.bind(this);
    //end of constructor function
    handleChange(e) {
        let fields = this.state.fields;
        // //accessing input boxes value with their names
        // //and storing in fields
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
      
    }
   
    onSubmit = (event) => {
        event.preventDefault();
     
        if (this.validateForm()) {
            const newCustomer = {
                customer_emailId: this.state.fields.customer_emailId,
                customer_password: this.state.fields.customer_password
            };
            console.log(newCustomer);

            //   //calling services from api
            axios.post('http://localhost:4000/api/customer/CustomerLogin', newCustomer)
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
                    alert('Error in logging, please try again');
                });
        }
       
    }

    //validate for form fields
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        console.log('Validating Forms')
        if (!fields["customer_emailId"]) {
            formIsValid = false;
            errors["customer_emailId"] = "Please enter your Email-Id";
            this.setState({
                errors: errors
            });
            console.log(this.state.errors);

        }
        else if (typeof fields["customer_emailId"] !== "undefined") {
            //regular  expression for email validation
            //var pattern = new RegExp(/^(("[\w-\s]+")|(?)))
            //if (!pattern.test(fields["email"])){}
            if (!(fields["customer_emailId"].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
                formIsValid = false;
                errors["customer_emailId"]
                    = "Please enter Valid Email-Id.";
            }
        }
        else {
            errors["customer_emailId"] = "";
        }//end of emailId Validators
        //Beginnig of password Validators
        if (!fields["customer_password"]) {
            formIsValid = false;
            errors["customer_password"] = "Please enter your Password";
        }
        else if (typeof fields["customer_password"] !== "undefined") {
            //regular  expression for email validation
            //var pattern = new RegExp(/^(("[\w-\s]+")|(?)))
            //if (!pattern.test(fields["email"])){}
            if (!(fields["customer_password"].length >= 8)) {
                formIsValid = false;
                errors["customer_password"]
                    = "Password is too Short.";
            }
        }
        else {
            errors["customer_password"] = "";
        }//password validations closed
        this.setState({
            errors: errors,
            formIsValid: formIsValid
        });
        return formIsValid;

    }//endof validateForm() function()
}//end of class
