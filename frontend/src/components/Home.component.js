import React, { Component } from 'react';
import { Button, Container, Grid, Header, Icon, Menu, Segment,Step } from "semantic-ui-react";
import Footer from './Footer.component';
import Video from './video.component';
import './home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <div className="ui fixed borderless huge menu">
                    <div className="ui container grid">
                        <div className="computer only row">

                            <a className="header item"><img className="ui small image" src="img/logo_1.png" /></a>
                            <a className=" item">Our Products</a>
                            <a className="item">Our Company</a>
                            <a className="item">Safety</a>
                            <a className="item">Help</a>
                            <div className="right menu">
                                <div className="item">
                                    <div className="ui basic icon toggle button">
                                        <i className="white globe icon">&nbsp;EN</i>
                                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <div className="ui basic icon toggle button">
                                        <i className="white user outline icon">&nbsp;Login</i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="tablet mobile only row">
                            <a className="header item"> Project Name</a>
                            <div className="right menu">
                                <a className="menu item">
                                    <div className="ui basic icon toggle button">
                                        <i className="yellow globe icon"></i>
                                    </div>
                                </a>
                            </div>
                            <div className="ui vertical accordion borderless fluid menu">
                                <div className="item">
                                    <div className="ui icon input">
                                        <input type="text" placeholder="Search..." />
                                        <i className="search link icon"></i>
                                    </div>
                                </div>
                                <a className="active item"> Home</a>
                                <a className="item"> About</a>
                                <a className="item"> Contact</a>
                                <div className="item">
                                    <div className="title">
                                        Dropdown<i className="dropdown icon"></i>
                                    </div>
                                    <div className="content">
                                        <div className="item">
                                            Action
                                        </div>
                                        <div className="item active">
                                            Another action
                                        </div>
                                        <div className="item">
                                            Something else here
                                        </div>
                                        <div className="ui divider"></div>

                                        <div className="header item">
                                            Navbar header
                                        </div>

                                        <div className="item">
                                            Seperated link
                                        </div>
                                        <div className="item">
                                            One more seperated link
                                        </div>
                                    </div>
                                </div>
                                <div className="ui divider"></div>
                                <a className="item" href="#">Default</a>
                                <a className="item" href="#">Static top</a>
                                <a className="active item" href="#">Fixed top</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 offset-xl-1 offset-lg-1 offset-md-1">
                            <img src="" alt="" height="150" width></img>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-7">
                            <div className="row align-items-center h-100">
                                <div className="col">
                                    <h4 className="display-4"></h4>
                                    <p className="lead"></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   <br /><br /><br /> */}
                {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> */}
                {/* <div className="ui menu" style={{ backgroundColor: "black", height: "100%" }}>
                    <img src="img/logo_1.png" style={{ width: "10%" }} />
                    <a className="item" style={{ color: "white", height: "100%" }}><br />Our Products</a>
                    <a className="item " style={{ color: "white", height: "100%" }}><br />Our Company</a>
                    <a className="item left" style={{ color: "white", height: "100%" }}><br />Help</a>
                    <a>
                        <br/>
                        <a className="ui basic icon toggle button item left">
                            <i className="white globe icon">&nbsp;EN</i>
                        </a>
                                    <a className="ui basic icon toggle button item left">
                            <i className="white user outline icon">&nbsp;Login</i>
                        </a>
                    </a>
                </div> */}
                
                {/* <div> */}
{/*                
                <div className="Image">
                <br/><br/><br/><br/><br/><br/>
                <div class="ui inverted segment container">
  <div class="ui three item inverted secondary menu">
    <a class="item">Home</a>
    <a class="item">Messages</a>
    <a class="item">Friends</a>
  </div>
</div> */}
                {/* <div className="ui raised horizontal segments container">
  <div className="ui segment">Left</div>
  <div className="ui segment">Middle</div>
  <div className="ui segment">Right</div>
</div> */}
{/* <div class="ui four item menu">
  <div class="item">Home</div>
  <div role="listbox" aria-expanded="false" class="ui pointing dropdown link item" tabindex="0">
    <div class="text" role="alert" aria-live="polite" aria-atomic="true">Shopping</div>
    <i aria-hidden="true" class="dropdown icon"></i>
    <div class="menu transition">
      <div class="header">Categories</div>
      <div role="option" class="item">
        <div role="listbox" aria-expanded="false" class="ui dropdown" tabindex="0">
          <div class="text" role="alert" aria-live="polite" aria-atomic="true">Clothing</div>
          <i aria-hidden="true" class="dropdown icon"></i>
          <div class="menu transition">
            <div class="header">Mens</div>
            <div role="option" class="item">Shirts</div>
            <div role="option" class="item">Pants</div>
            <div role="option" class="item">Jeans</div>
            <div role="option" class="item">Shoes</div>
            <div class="divider"></div>
            <div class="header">Womens</div>
            <div role="option" class="item">Dresses</div>
            <div role="option" class="item">Shoes</div>
            <div role="option" class="item">Bags</div>
          </div>
        </div>
      </div>
      <div role="option" class="item">Home Goods</div>
      <div role="option" class="item">Bedroom</div>
      <div class="divider"></div>
      <div class="header">Order</div>
      <div role="option" class="item">Status</div>
      <div role="option" class="item">Cancellations</div>
    </div>
  </div>
  <div class="item">Forums</div>
  <div class="item">Contact Us</div>
</div> */}
{/* <br/><br/><br/>
</div> */}
     {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/>             */}
              

                {/* </div> */}
                <br /><br /><br /> <br /><br />
                
                <div className="ui center aligned container">
                    <h1>A Cab for Every Occasion!</h1>
                    <p className="lead">Locus offers city taxis, inter-city cabs, and local cabs at hourly packages</p>
                </div>
                <br /><br />
                <div className="ui three cards container" style={{ width: '100%' }}>
                    <div className="ui card" style={{ width: "30%", height: "10%" }}>
                        <div className="image"><img src="img/c2copy.jpg" style={{ height: "70%" }} /></div>
                        <div className="content">
                            <div className="header">CITY TAXI</div>
                            <div className="description">The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as Rs.6/km, yoou can choose from a wide range of options! You can also opt to do your bit for the environment with Locus Share!</div>
                        </div>
                        <div className="content">
                            <a>
                                <i aria-hidden="true" className="snowflake big icon"></i>
                                AC Cabs
    </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a>
                                <i aria-hidden="true" className="money big icon"></i>&nbsp;
                                Pocket Friendly
    </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a>
                                <i aria-hidden="true" className="cc amazon pay big icon"></i>
                                Cashless
    </a>
                        </div>
                    </div>
                    <div className="ui card" style={{ width: "30%", height: "10%" }}>
                        <div className="image"><img src="img/c6copy.jpg" /></div>
                        <div className="content">
                            <div className="header">OUTSTATION</div>
                            <div className="description">Ride out of town at affordable one-way and round-trip fares with Locus's Intercity Travel Service. Choose from a range of AC Cabs driven by top partners, available in 1 hour or book upto 7 days in advance. We have you covered across India with presence in 90+ cities with over 500 one-way routes.</div>
                        </div>
                        <div className="content">
                            <a>
                                <i aria-hidden="true" className="map marker alternate big icon"></i>
                                One-Way Trip
    </a> &nbsp;&nbsp;&nbsp;
    <a>
                                <i aria-hidden="true" className="mobile alternate big icon"></i>
                                Bookings
    </a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a>
                                <i aria-hidden="true" className="car big icon"></i>
                                Safe Rides
    </a>
                        </div>
                    </div>
                    <div className="ui card" style={{ width: "30%", height: "10%" }}>
                        <div className="image"><img src="img/c1.jpg" /></div>
                        <div className="content">
                            <div className="header">RENTALS</div>
                            <div className="description">With Locus Rentals you get a cab at your disposal. So be it a day long business meeting, a shopping trip with your friends or just a day out in a new city, we have you covered. Packages start at 1 hour and can be extended upto 12 hours!</div>
                            <br />
                        </div>
                        <div className=" content">
                            <div className="content">
                                <a>
                                    <i aria-hidden="true" className="hourglass half big icon"></i>
                                    Hourly Packages
    </a>
                                <a>
                                    <i aria-hidden="true" className="shekel sign big icon"></i>
                                    Multiple Stops    </a>
                                <a>
                                    <i aria-hidden="true" className="user secret big icon"></i>
                                    Partners
    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />

                <Video />

                <br /><br />
                <div className="ui center aligned container">
                    <h1>Why ride with Locus?</h1>
                    <p className="lead">The best way to travel to your destination</p>
                </div>
                <br /><br />
                <div className="ui placeholder segment fluid container">
                    <div className="ui stackable four column grid" style={{ paddingLeft: "5%", paddingTop: "5%" }}>
                        <div className="row">
                            <div className="col-lg-2">
                                <img src="img/t1.jpg" style={{ width: "100%" }} />

                            </div>
                            <div className="col-lg-4" >
                                <h3>Cabs for every pocket</h3>
                                <p className="lead text-justified">From Sedans and SUVs to Luxury cars for special occasions, we have cabs to suit every pocket</p>
                            </div>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="col-lg-2">
                                <img src="img/t2.png" style={{ width: "100%" }} />
                            </div>
                            <div className="col-lg-4">
                                <h3>Secure and Safer Rides</h3>
                                <p className="lead text-justified">Verified drivers, an emergency alert button, and live ride tracking are some of the features that we have in place to ensure you a safe travel experience.</p>
                            </div>
                        </div>
                        <div className="row aligned">
                            <div className="col-lg-2">
                                <img src="img/t3.jpg" style={{ width: "100%" }} />

                            </div>
                            <div className="col-lg-4" >
                                <h3>Locus Select</h3>
                                <p className="lead text-justified">A membership program with Locus that lets you ride a Prime Sedan at Mini fares, book cabs without peak pricing and has zero wait time</p>
                            </div>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="col-lg-2">
                                <img src="img/t4.jpg" style={{ width: "100%" }} />
                            </div>
                            <div className="col-lg-4">
                                <h3>In Cab Entertainment</h3>
                                <p className="lead text-justified">Play music, watch videos and a lot more with Locus Play! Also stay connected even if you are travelling through poor network areas with our free wifi facility.</p>

                            </div>


                        </div>
                        <div className="row">
                            <div className="col-lg-2">
                                <img src="img/t5.jpg" style={{ width: "100%" }} />

                            </div>
                            <div className="col-lg-4" >
                                <h3>Share and Express</h3>
                                <p className="lead text-justified">To travel with the lowest fares choose Locus Share. For a faster travel experience we have Share Express on some fixed routes with zero deviations. Choose your ride and zoom away!</p>
                            </div>

                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div className="col-lg-2">
                                <img src="img/t6.jpg" style={{ width: "100%" }} />
                            </div>
                            <div className="col-lg-4">
                                <h3>Cashless Rides</h3>
                                <p className="lead text-justified">Now go cashless and travel easy. Simply recharge your Locus money or add your credit/debit card to enjoy hassle free payments.</p>

                            </div>


                        </div>

                    </div>
                </div>
                <br /><br />
                <div className="ui center aligned container">
                    <h1>Setting 20+ cities in motion</h1>
                    <p className="lead">The widest variety of rides to choose from</p>
                </div>
                <br /><br />

                <Carousel  centerMode centerSlidePercentage={30} infiniteLoop autoPlay transitionTime={1500} showThumbs={false}>
                <img src="img/cc1.jpg" style={{width:"200px", backgroundColor: "white"}}/>
                <img src="img/cc2.png"  style={{width:"200px", backgroundColor: "white"}} />
                
                <img src="img/cc4.png"  style={{width:"200px"}}/>
                <img src="img/cc5.png"  style={{width:"200px"}}/>
                <img src="img/cc6.png"  style={{width:"200px"}}/>
                <img src="img/cc7.png"  style={{width:"200px"}}/>
                <img src="img/cc8.png"  style={{width:"200px"}}/>
                <img src="img/cc9.png"  style={{width:"200px"}}/>
                
                {/* <div className="ui two column grid contain  er ">
                
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui black ribbon label">
                                <i aria-hidden="true" className="hotel icon"></i>
                                Share
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui black ribbon label">
                                <i aria-hidden="true" className="hotel icon"></i>
                                Mini
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui black ribbon label">
                                <i aria-hidden="true" className="hotel icon"></i>
                                Micro
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui black ribbon label">
                                <i aria-hidden="true" className="hotel icon"></i>
                                Sedan
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui blue ribbon label">
                                <i aria-hidden="true" className="spoon icon"></i>
                                Prime SUV
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui blue ribbon label">
                                <i aria-hidden="true" className="spoon icon"></i>
                                Luxury
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid image">
                            <a className="ui blue ribbon label">
                                <i aria-hidden="true" className="spoon icon"></i>
                                Auto Rickshaw
      </a>
                            <img src="img/c2copy.jpg" />
                        </div>
                    </div>

                </div> */}
                </Carousel>
                <br /> <br /><br />
                <div class="ui unstackable three huge steps fluid container" style={{ boxShadow: "5px 5px 5px rgba(0.8, 68, 68, 68)"}}>
  <div class="step">
    <i aria-hidden="true" class="map marker alternate icon"></i>
    <div class="content">
      <h2>Destination</h2>
      <p>Choose your destination!</p>
      {/* <div class="description">Choose your shipping options</div> */}
    </div>
  </div>
  <div class="step">
    <i aria-hidden="true" class="car icon"></i>
    <div class="content">
    <h2>Ride</h2>
      <p>Select your ride options!</p>
      {/* <div class="description">Enter billing information</div> */}
    </div>
  </div>
  <div class="step">
    <i aria-hidden="true" class="info circle icon"></i>
    <div class="content">
    <h2>Booking</h2>
      <p>Confirm your booking!</p>
      {/* <div class="description">Verify order details</div> */}
    </div>
  </div>
</div>
                <br /> <br /> <br />
                <Footer />
            </div >


        )
    }
}