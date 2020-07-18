import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Login.css';

const Login = (props) => {
    
    return (
        
    //    <div className="ABC"></div>
        <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div class="ui placeholder segment">
                    <div class="ui two column very relaxed stackable grid">
                        <div className="ui cards">
                            <div class="col-lg-6">

                                <div className="content">
                                    <i aria-hidden="true" className="user outline medium icon"></i>
                                    <Link to={"customer-login"} onClick={props.handleModalOpen}><img src="img/customer.png" style={{ width: "60%" }} /></Link>

                                    <b><hr /></b>
                                    <h5>Manage your payment options, review trip history, and more.</h5>


                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="content">
                                    <i aria-hidden="true" className="car medium icon"></i>
                                    <Link to="DriverLogin" onClick={props.handleModalOpen}><img src="img/driver.png" style={{ width: "60%" }} /></Link>
                                    <b><hr /></b>
                                    <h5>Find everything you need to track your success on the road.</h5>
                                </div>
                            </div>
                        </div>
                        <div class="ui vertical divider">
                            Or
                                    </div>
                    </div>
                </div>




            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
            </Modal.Footer>
        </Modal>
      
    )
}
export default Login;