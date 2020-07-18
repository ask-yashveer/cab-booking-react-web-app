import React, { Component } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './priceList.css';
// import SweetAlert from 'sweetalert2-react';
// import swal from '@sweetalert/with-react'
import ModalClass from './modalClass.component';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import SweetAlert from 'react-bootstrap-sweetalert';

// export default class priceList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: '',
//             delete: ''
//         }
//     }

class Help extends React.Component {

    render() {
        return (
           <div>
             <br/><br/><br/><br/><br/><br/><br/>  
           <div className="row" >
                <div className="col-lg-4 offset-lg-2">
                <div className="ui card">
                    <div className="image">
                        <img src="img/payment.png" />
                    </div>
                    <div className="content">
                        <div className="header">Account and Payment Options</div>
                        <div className="description">
                            <ul>
                            <li><a><b>I can't sign in/ request a ride</b></a></li> <br/>
                            <li><a><b> Changing my Account Settings</b></a> </li><br/> 
                            <li><a><b>Payment Options</b></a></li>
                            </ul>
                            </div>
                    </div>
                   
                </div>
                </div>
                <div className="col-lg-4 offset-lg-2">
                <div className="ui card">
                    <div className="image">
                        <img src="img/signup.png" style={{height:"50%"}} />
                    </div>
                    <div className="content">
                        <div className="header">Signing Up</div>
                        <div className="description">
                            <ul>
                          <a> <li> <b>Creating a rider account</b></li></a><br/>
                            <a> <li><b>Downloading the rider app  </b></li></a><br/>
                             <a><li> <b>Signing Up to Drive</b></li></a>
                             </ul>
                             </div>
                    </div>
                    
                  
                </div>
                </div>
            </div>
            <br/><br/><br/>
            <div className="row" >
                <div className="col-lg-4 offset-lg-2">
                <div className="ui card">
                    <div className="image">
                        <img src="img/guide.png" />
                    </div>
                    <div className="content">
                        <div className="header">A Guide to Locus</div>
                        <div className="description">
                            <ul>
                            <a><li><b>Requesting a ride</b></li> </a><br/>
                            <a><li><b>Taking a ride </b></li></a><br/>
                            <a> <li><b>After my ride</b></li></a>
                            </ul>
                             </div>
                    </div>
                              </div>
                </div>
                <div className="col-lg-4 offset-lg-2">
                <div className="ui card">
                    <div className="image">
                        <img src="img/more.png" />
                    </div>
                    <div className="content">
                        <div className="header">More</div>
                        <div className="description">
                            <ul>
                            <li><a><b>Legal, Privacy and other enquiries</b></a></li> <br/>
                            <a><li><b>Using Locus for Delivery </b></li></a><br/> 
                            <a><li><b>Using Locus at the Airport</b></li></a>
                            </ul>
                            </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </div>
        ) // end of return
    } // end of render
} // end of class Help component


export default Help;
