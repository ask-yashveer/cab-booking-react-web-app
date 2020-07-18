//import modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/db');
const cookieParser = require('cookie-parser');
const path = require('path');
const secret = 'My Secret Key';
var distance = require('google-distance');
distance.apiKey = 'AIzaSyAtR5cH_4HKu44JNDCNmzO0rKNpEATtJV4';

const jwt = require('jsonwebtoken')
// const withAuth = require('../middleware/middleware');
//import custom modules
let Customer = require('../models/customer.model');
const withAuth = require('../middleware/middleware');
router.use(cookieParser());
//Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  },
    err => {
      console.log('Cannot connect to database' + err.stack);
    });
//Defined Routes
//Add Todo
router.post('/add', (req, res) => {
  let newUser = new Customer({
    customer_firstName: req.body.customer_firstName,
    customer_lastName: req.body.customer_lastName,
    customer_mobileNumber: req.body.customer_mobileNumber,
    customer_emailId: req.body.customer_emailId,
    customer_password: req.body.customer_password

  });
  console.log(newUser);
  //callback function from user.module.js
  Customer.addUser(newUser, (err, user) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to Register'
      });
    }
    else {
      res.json({
        success: true,
        msg: 'User is Registered'
      });
    }
  });
});

//post /api/users/login
router.post('/CustomerLogin', (req, res) => {
  customer_emailId = req.body.customer_emailId;
  customer_password = req.body.customer_password;
  //calling from user.model.js file
  console.log(customer_emailId, ' ', customer_password)
  Customer.getUsersByUserName(customer_emailId, (err, user) => {
    console.log(user)
    if (err)  
    return res.status(500)
    .json({
      error: 'Internal error please try again'
    });
    if (user == null) {
      console.log('in if ')
      return res.status(401)
        .json({
          error: 'Incorrect email or password'
        });
    }

    //calling from user.model.js file
    Customer.comparePassword(customer_password, user.customer_password,
      (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          //idle expire time is less than 10 mins
          //expiresin:604800
          const token = jwt.sign(user.toObject(),
            config.secret, { expiresIn: 1200000 })
          console.log(token);
          res.cookie('token', token, { httpOnly: true }).sendStatus(200);
          console.log(token);
          // res.json({
          //     success: true,
          //     token: 'JWT ' + token,
          //     user: {
          //         id: user._id,
          //         firstname: user.customer_firstName,
          //         email: user.customer_emailId
          //     }
          // })

        }
        // else {
        //     return res.json({
        //         success: false,
        //         msg: 'wrong Password'
        //     })
        // }
      })
  })
})//end of login post

router.get('/api/booking', withAuth, function (req, res) {
  res.send('The password is I love my job: ' + req.email);
});
router.post('/vehicles',function(req,res){
  // const origin = req.body.origin
  // const destination = req.body.destination
 

  // distance.get(origin,destination,function(req,res){
  //   if(!err)
  //   res.send(distance);
  //   console.log(distance);
  // })

  let coordinates = req.body;
  // res.send(coordinates);
  console.log(coordinates);
  distance.get(
    {
      origin: coordinates.origin,
      destination: coordinates.destination
    },
    
    function(err, data) {
      if (err) return console.log(err);
      console.log(data);
      //console.log(coordinates.origin,'',coordinates.destination);
      res.send(data).sendStatus=(200);
      // router.get().transitionTo('/vehicles');
      // res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      // console.log(token);
  });
 
  })
  //cab-booking
  router.get('/cab-booking',function(req,res){
    res.sendStatus(200);
  })
//checkToken
router.get('/checkToken', withAuth, function (req, res) {
  res.sendStatus(200);
});
module.exports = router;