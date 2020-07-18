import React, { Component } from 'react';
import { Button, Container, Grid, Icon, Header, Menu, Segment } from 'semantic-ui-react';

export default class Driver extends React.Component {
    render() {
        return (
            <div className="row">
<br/><br/><br/><br/><br/>

<div class="ui card">
  <div class="image">
    <img src="images/driver.png" />
  </div>
  <div class="content">
    <div class="header">Matthew</div>
    <div class="meta"><span class="date">Joined in 2015</span></div>
    <div class="description">
        Source: Pune <br/>
        Destination: Mumbai<br/>
        Price: Rs. 10,000 /-
    </div>
  </div>
  <div class="extra content">
    <a>
      <i aria-hidden="true" class="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
            </div>
        )
    }
}