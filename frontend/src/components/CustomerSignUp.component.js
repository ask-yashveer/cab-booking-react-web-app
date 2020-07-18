import React, { Component } from 'react'
import axios from 'axios';

export default class CustomerSignUp extends Component {
    render() {
        return (
            <div>
                <br /><br /><br /><br /><br />

                <div className="row offset-lg-4">
                    <div className="text-center col-lg-6">
                        <img src="img/logo_1.png" width="50%" style={{ backgroundColor: 'black' }} />
                        <h3 className="text-center"><b>Sign Up To Ride</b></h3>
                        <h4 className="text-center">Reliable Rides in Minutes</h4>

                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <div className="row offset-lg-1">
                            <div className="ui centered card col-lg-12">
                                <div className="content">
                                    <form className="ui form" name="CustomerSignUpForm" autoComplete="off" onSubmit={this.onSubmit}>
                                        {/* <div className="equal width fields"> */}
                                            <div className="field">
                                                <label>First name (required)</label>
                                                <div className="ui fluid input">
                                                    <input
                                                        type="text"
                                                        id="form-subcomponent-shorthand-input-first-name"
                                                        placeholder="First name" className="form-control" value={this.state.fields.customer_firstName}
                                                        onChange={this.handleChange}
                                                        name="customer_firstName"
                                                    />
                                                    <div className={this.state.errors.customer_firstName ? 'alert alert-danger' : ''}>
                                                        {this.state.errors.customer_firstName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Last name (required)</label>
                                                <div className="ui fluid input">
                                                    <input
                                                        type="text"
                                                        id="form-subcomponent-shorthand-input-last-name"
                                                        placeholder="Last name"
                                                        className="form-control" value={this.state.fields.customer_lastName}
                                                        onChange={this.handleChange}
                                                        name="customer_lastName"
                                                    />
                                                    <div className={this.state.errors.customer_lastName ? 'alert alert-danger' : ''}>
                                                        {this.state.errors.customer_lastName}
                                                    </div>
                                                </div>
                                            </div>
                                        
                                        <div className="field">
                                            <label>Enter your Mobile Number (required)</label>
                                            <div className="ui right icon input">
                                                <input maxLength="10" placeholder="Enter your Mobile Number" className="form-control" value={this.state.fields.customer_mobileNumber}
                                                    onChange={this.handleChange} 
                                                    name="customer_mobileNumber"/>

                                                <i aria-hidden="true" className="mobile alternate icon"></i>
                                                <div className={this.state.errors.customer_mobileNumber ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.customer_mobileNumber}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">

                                            <label>Enter your Email Id (required)</label>
                                            <div className="ui right icon input">
                                                <input placeholder="Enter your Email Id" className="form-control" value={this.state.fields.customer_emailId}
                                                    onChange={this.handleChange}
                                                    name="customer_emailId" />
                                                <i aria-hidden="true" className="envelope icon"></i>
                                                <div className={this.state.errors.customer_emailId ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.customer_emailId}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Enter a Password (required)</label>
                                            <div className="ui right icon input">
                                                <input type="password" placeholder="Enter a Password" className="form-control" value={this.state.fields.customer_password}
                                                    onChange={this.handleChange}
                                                    name="customer_password"  />
                                                <i aria-hidden="true" className="lock icon"></i>
                                                <div className={this.state.errors.customer_password ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.customer_password}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ui two buttons">
                                            <button className="ui green basic button" type="submit">Sign Up</button> &nbsp;&nbsp;
                                <button className="ui red basic button" onClick={this.clearForm} type="button">Decline</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                customer_firstName: '',
                customer_lastName: '',
                customer_mobileNumber: '',
                customer_emailId: '',
                customer_password: '',
            },
            errors: {},
            formIsValid: true
        }
        ////binding text box onChanges events
        this.handleChange = this.handleChange.bind(this);
        // this.onChangeCustomerLastName = this.onChangeCustomerLastName.bind(this);
        // this.onChangeCustomerEmailId = this.onChangeCustomerEmailId.bind(this);
        // this.onChangeCustomerMobileNumber = this.onChangeCustomerMobileNumber.bind(this);
        // this.onChangeCustomerPassword = this.onChangeCustomerPassword.bind(this);

        //binding on submit event
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);

        //defining initial state
        // this.state = {
        //     customer_firstName: '',
        //     customer_lastName: '',
        //     customer_emailId: '',
        //     customer_mobileNumber: '',
        //     customer_password: ''
        // }
    } //end of constructor
    //changing intial state
    // onChangeCustomerFirstName(e) {
    //     this.setState({
    //         customer_firstName: e.target.value
    //     })
    // }
    // onChangeCustomerLastName(e) {
    //     this.setState({
    //         customer_lastName: e.target.value
    //     })
    // }
    // onChangeCustomerEmailId(e) {
    //     this.setState({
    //         customer_emailId: e.target.value
    //     })
    // }
    // onChangeCustomerMobileNumber(e) {
    //     this.setState({
    //         customer_mobileNumber: e.target.value
    //     })
    // }
    // onChangeCustomerPassword(e) {
    //     this.setState({
    //         customer_password: e.target.value
    //     })
    // }

    handleChange(e){
        let fields = this.state.fields;
        // //accessing input boxes value with their names
        // //and storing in fields
        fields[e.target.name] = e.target.value;
        this.setState({
            fields: fields
        });
        console.log(this.state.fields);
    }
    clear() {
        this.setState({
            customer_firstName: '',
            customer_lastName: '',
            customer_mobileNumber: '',
            customer_password: '',
            customer_emailId: ''
        })
    }
    //clearing from fields
    clearForm(e) {
        e.preventDefault();
        this.clear();
    }
    onSubmit(e) {
        e.preventDefault();

        
        console.log(`Form Submmitted:`);
        console.log(`Customer FirstName: ${this.state.fields.customer_firstName}`);
        console.log(`Customer LastName: ${this.state.fields.customer_lastName}`);
        console.log(`Customer Email Id: ${this.state.fields.customer_emailId}`);
        console.log(`Customer Mobile: ${this.state.fields.customer_mobileNumber}`);

        if(this.validateForm()){
        const newCustomer = {
            customer_firstName: this.state.fields.customer_firstName,
            customer_lastName: this.state.fields.customer_lastName,
            customer_mobileNumber: this.state.fields.customer_mobileNumber,
            customer_emailId: this.state.fields.customer_emailId,
            customer_password: this.state.fields.customer_password
        };
        // calling services from api
        axios.post('http://localhost:4000/api/customer/add', newCustomer)
            .then(res => console.log(res.data));

        this.clear();
        //redirecting to home component
        this.props.history.push('/customer-login');

    }
}
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["customer_firstName"]) {
            formIsValid = false;
            errors["customer_firstName"] = "Cannot be empty";
        }
        else if (typeof fields["customer_firstName"] !== "undefined") {
            // alert('not undefined')
            if (!fields["customer_firstName"].match(/^[A-Z][a-z]+$/)) {
                formIsValid = false;
                errors["customer_firstName"] = "Should start with capital letter";
            }
        }

        if (!fields["customer_lastName"]) {
            formIsValid = false;
            errors["customer_lastName"] = "Cannot be empty";
        }

        else if (typeof fields["customer_lastName"] !== "undefined") {
            if (!fields["customer_lastName"].match(/^[A-Z][a-z]+$/)) {
                formIsValid = false;
                errors["customer_lastName"] = "Should start with capital letter";
            }
        }

        if (!fields["customer_mobileNumber"]) {
            formIsValid = false;
            errors["customer_mobileNumber"] = "Cannot be empty";
        }

        else if (typeof fields["customer_mobileNumber"] !== "undefined") {
            if (!fields["customer_mobileNumber"].match(/^\d{10}$/)) {
                formIsValid = false;
                errors["customer_mobileNumber"] = "Should have only 10 digits";
            }
        }


        if (!fields["customer_emailId"]) {
            formIsValid = false;
            errors["customer_emailId"] = "Please enter your Email-Id";
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
                    = "Password should have minimum 8 digits";
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

    }
}
