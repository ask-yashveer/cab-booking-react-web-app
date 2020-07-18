import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import withAuth from './components/withAuth.component';
import './App.css';
import ButtonExampleLabeledBasicShorthand from './components/button.component';
import CustomerSignUp from './components/CustomerSignUp.component';
import DriverLogin from './components/DriverLogin.component';
import CustomerLogin from './components/CustomerLogin.component';
import Home from './components/Home.component';
import Login from './components/Login.component';
import DriverSignUp from './components/DriverSignUp.component';
import Footer from './components/Footer.component';
import Help from './components/help.component';
import Navbar from './components/Navbar.component';
import Booking from './components/Booking.component';
import Products from './components/ourProducts.components';
import { MapContainer } from './components/googlemaps.component';
import DriverBooking from './components/DriverBooking.component';
import Vehicles from './components/vehicles.component';
import CabBooking from './components/CabBooking.component';
import ModalClass from './components/modalClass.component';
import priceList from './components/priceList.component';
import Driver from './components/driverList.component';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

class App extends Component {
  state = {
    modalOpen: false
  }

  handleModalOpen = () => {
    this.setState((prevState) => {
      return {
        modalOpen: !prevState.modalOpen
      }
    })
  }
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" exact component={Home} />
            {/* <Route exact path="/ourProduct" component={ourProduct} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/modalClass" component={ModalClass} /> */}
            <Route exact path="/customer-login" component={CustomerLogin} />
            <Route exact path="/DriverLogin" component={DriverLogin} />
            <Route exact path="/DriverSignUp" component={DriverSignUp} />
            <Route exact path="/CustomerSignUp" component={CustomerSignUp} />
            <Route exact path="/modalClass" component={ModalClass} />
            <Route exact path="/priceList" component={priceList} />
            {/* <Route exact path="/priceList" component={priceList} /> */}
            <Route exact path="/cab-booking" component={CabBooking} />
            <Route exact path="/booking" component={withAuth(Booking)} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/driverList" component={Driver} />
            <Route exact path="/ourProducts" component={Products} />
            
            {/* <Route exact path="/hello" component={Hello}/> */}
          </Switch>
          {/* style={{ backgroundColor: "#151e1e", color: "red",position:"fixed" }} */}

        </div>
        <div>
          
          {/* <Footer /> */}

        </div>
      </Router>

    )
  }
}
export default App;


