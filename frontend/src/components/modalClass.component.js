import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './modalClass.css';


const ModalClass = (props) => {
    return (
        <>
            <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Booking Confirmation!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div class="ui placeholder segment">
  <div class="ui icon header">
  <img src="img/car.gif" style={{ width: "50%", height: "20%" }} />
  
  </div>
  <div>
  <h3>  Your ride is just one click away!!</h3>
  
  <button class="ui primary button">Confirm</button>
  </div>
</div>
                    {/* <div class="ui placeholder segment">
                        <div class="ui two column very relaxed stackable grid">
                            <div className="ui cards">
                                <div class="col-lg-6">

                                    <div className="content">
                                      
                                        <Link to={"customer-login"} onClick={props.handleModalOpen}><h2>Confirm &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i aria-hidden="true" className="arrow right large icon"></i></h2></Link>

                                        <b><hr /></b>
                                        <h5>Your ride will be here soon!!</h5>


                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="content">
                                      
                                        <Link to="DriverLogin" onClick={props.handleModalOpen}><h2>Cancel&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i aria-hidden="true" className="arrow right large icon"></i></h2></Link>
                                        <b><hr /></b>
                                        <h5>Choose another medium of ride!!</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="ui vertical divider">
                                Or
                                    </div>
                        </div>
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleModalOpen}>
                        Cancel
                 </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalClass;

