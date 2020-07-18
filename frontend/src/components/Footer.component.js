import React, { Component } from 'react';
import { Button, Container, Grid, Header, Icon, Menu } from "semantic-ui-react";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="ui inverted vertical footer segment">
                <div className="ui container">
                    <div
                        className="ui stackable inverted divided equal height stackable grid"
                    >      <div className="four wide computer column">
                    <img className="ui small image" src="img/logo_1.png"/>
                    <div className="ui inverted link list">
                                <a className="item" href="#root"><i className="question circle outline icon"></i>Help Center</a>
                                <a className="item" href="#root"><i className="white globe icon"></i>English (International)</a>
                                <a className="item" href="#root"><i className="map marker alternate icon"></i>Pune</a>
                                {/* <img className="ui small image" src="img/playstore.png"/>
                                <img className="ui medium image" src="img/googleplay.png"/> */}
                            </div>
                </div>
                        <div className="four wide computer column">
                            <h4 className="ui inverted header">About Us</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#root">Newsroom</a>
                                <a className="item" href="#root">Investor relations</a>
                                <a className="item" href="#root">Global Citizenship</a>
                                <a className="item" href="#root">Safety</a>
                                <a className="item" href="#root">Blog</a>
                                <a className="item" href="#root">Careers</a>
                            </div>
                        </div>
                        <div className="four wide computer column">
                            <h4 className="ui inverted header">Our Products</h4>
                            <div className="ui inverted link list">
                                <a className="item" href="#root">Ride</a>
                                <a className="item" href="#root">Drive</a>
                                <a className="item" href="#root">Business</a>
                                <a className="item" href="#root">Freight</a>
                                <a className="item" href="#root">Locus Air</a>
                                <a className="item" href="#root">Advanced Technologies Group</a>
                            </div>
                        </div>
                        <div className="four wide computer column text-center">
                        <img className="ui small image" src="img/combine.png"/>
                        <br/>
                        <i className="facebook large icon"></i>
                        <i className="twitter large icon"></i>
                        <i className="linkedin large icon"></i>
                        <i className="youtube large icon"></i>
                        <i className="instagram large icon"></i>
                        </div>
                        {/* <div className="seven wide column">
                            <h4 className="ui inverted header">Footer Header</h4>
                            <p>
                                Extra space for a call to action inside the footer that could
                                help re-engage users.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}