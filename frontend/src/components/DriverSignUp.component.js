import React, { Component } from 'react';
import axios from 'axios';

export default class DriverSignUp extends Component {
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
                                    <form className="ui form" name="DriverSignUpForm" autoComplete="off" onSubmit={this.onSubmit}>
                                        {/* <div className="equal width fields"> */}
                                            <div className="field">
                                                <label>First name (required)</label>
                                                <div className="ui fluid input">
                                                    <input
                                                        type="text"
                                                        id="form-subcomponent-shorthand-input-first-name"
                                                        placeholder="First name" className="form-control"
                                                        value={this.state.fields.driver_firstName}
                                                        onChange={this.handleChange}
                                                        name="driver_firstName" />
                                                    <div className={this.state.errors.driver_firstName ? 'alert alert-danger' : ''}>
                                                        {this.state.errors.driver_firstName}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label>Last name (required)</label>
                                                <div className="ui fluid input">
                                                    <input
                                                        type="text"
                                                        id="form-subcomponent-shorthand-input-last-name"
                                                        placeholder="Last name" className="form-control"
                                                        value={this.state.fields.driver_lastName}
                                                        onChange={this.handleChange}
                                                        name="driver_lastName" />
                                                    <div className={this.state.errors.driver_lastName ? 'alert alert-danger' : ''}>
                                                        {this.state.errors.driver_lastName}
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                        <div className="field">
                                            <label>Enter your Mobile Number (required)</label>
                                            <div className="ui right icon input">
                                                <input placeholder="Enter your Mobile Number" className="form-control" maxLength="10"
                                                    value={this.state.fields.driver_mobileNumber}
                                                    onChange={this.handleChange}
                                                    name="driver_mobileNumber" />
                                                <i aria-hidden="true" className="mobile alternate icon"></i>
                                                <div className={this.state.errors.driver_mobileNumber ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.driver_mobileNumber}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">

                                            <label>Enter your Email Id (required)</label>
                                            <div className="ui right icon input">
                                                <input placeholder="Enter your Email Id" className="form-control"
                                                    value={this.state.fields.driver_emailId}
                                                    onChange={this.handleChange}
                                                    name="driver_emailId" />
                                                <i aria-hidden="true" className="envelope icon"></i>
                                                <div className={this.state.errors.driver_emailId ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.driver_emailId}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label>Enter a Password (required)</label>
                                            <div className="ui right icon input">
                                                <input type="password" placeholder="Enter a Password" className="form-control"
                                                    value={this.state.fields.driver_password}
                                                    onChange={this.handleChange}
                                                    name="driver_password" />
                                                <i aria-hidden="true" className="lock icon"></i>
                                                <div className={this.state.errors.driver_password ? 'alert alert-danger' : ''}>
                                                    {this.state.errors.driver_password}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ui two buttons">
                                            <button className="ui green basic button form-control" type="submit">Sign Up</button> &nbsp;&nbsp;
                                <button className="ui red basic button form-control" onClick={this.clearForm} type="reset">Decline</button>
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
                driver_firstName: '',
                driver_lastName: '',
                driver_mobileNumber: '',
                driver_emailId: '',
                driver_password: '',
            },
            errors: {},
            formIsValid: true
        }
        ////binding text box onChanges events
        this.handleChange = this.handleChange.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }
    handleChange(e) {
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
            driver_firstName: '',
            driver_lastName: '',
            driver_mobileNumber: '',
            driver_emailId: '',
            driver_password: '',
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
        console.log(`Driver FirstName: ${this.state.fields.driver_firstName}`);
        console.log(`Driver LastName: ${this.state.fields.driver_lastName}`);
        console.log(`Driver Email Id: ${this.state.fields.driver_emailId}`);
        console.log(`Driver Mobile: ${this.state.fields.driver_mobileNumber}`);

        if (this.validateForm()) {
            const newDriver = {
                driver_firstName: this.state.fields.driver_firstName,
                driver_lastName: this.state.fields.driver_lastName,
                driver_mobileNumber: this.state.fields.driver_mobileNumber,
                driver_emailId: this.state.fields.driver_emailId,
                driver_password: this.state.fields.driver_password
            };
            // calling services from api
            axios.post('http://localhost:4000/api/driver/add', newDriver)
                .then(res => console.log(res.data));

            this.clear();
            //redirecting to home component
            this.props.history.push('/DriverLogin');

        }
    }
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["driver_firstName"]) {
            formIsValid = false;
            errors["driver_firstName"] = "Cannot be empty";
        }
        else if (typeof fields["driver_firstName"] !== "undefined") {
            // alert('not undefined')
            if (!fields["driver_firstName"].match(/^[A-Z][a-z]+$/)) {
                formIsValid = false;
                errors["driver_firstName"] = "Should start with capital letter";
            }
        }

        if (!fields["driver_lastName"]) {
            formIsValid = false;
            errors["driver_lastName"] = "Cannot be empty";
        }

        else if (typeof fields["driver_lastName"] !== "undefined") {
            if (!fields["driver_lastName"].match(/^[A-Z][a-z]+$/)) {
                formIsValid = false;
                errors["driver_lastName"] = "Should start with capital letter";
            }
        }

        if (!fields["driver_mobileNumber"]) {
            formIsValid = false;
            errors["driver_mobileNumber"] = "Cannot be empty";
        }

        else if (typeof fields["driver_mobileNumber"] !== "undefined") {
            if (!fields["driver_mobileNumber"].match(/^\d{10}$/)) {
                formIsValid = false;
                errors["driver_mobileNumber"] = "Should have only 10 digits";
            }
        }


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
                    = "Password should have minimum 8 digits";
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

    }
}
