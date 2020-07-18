//import modules
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/db');
const cookieParser = require('cookie-parser');
const path = require('path');
const secret = 'My Secret Key';
const jwt = require('jsonwebtoken')
// const withAuth = require('../middleware/middleware');
//import custom modules
let Driver = require('../models/driver.model');
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
    //Add Todo
router.post('/add', (req, res) => {
    let newDriver = new Driver({
      driver_firstName: req.body.driver_firstName,
      driver_lastName: req.body.driver_lastName,
      driver_emailId: req.body.driver_emailId,
      driver_mobileNumber: req.body.driver_mobileNumber,
      driver_password: req.body.driver_password
  
    });
    console.log(newDriver);
    //callback function from user.module.js
    Driver.addDriver(newDriver, (err, driver) => {
      if (err) {
        res.json({
          success: false,
          msg: 'Failed to Register'
        });
      }
      else {
        res.json({
          success: true,
          msg: 'Driver is Registered'
        });
      }
    });
  });
  router.post('/driver-login', (req, res) => {
    driver_emailId = req.body.driver_emailId;
    driver_password = req.body.driver_password;
    //calling from user.model.js file
    console.log(driver_emailId, ' ', driver_password)
    Driver.getDriversByDriverName(driver_emailId, (err, driver) => {
      console.log(driver)
      if (err)  
      return res.status(500)
      .json({
        error: 'Internal error please try again'
      });
      if (driver == null) {
        console.log('in if ')
        return res.status(401)
          .json({
            error: 'Incorrect email or password'
          });
      }
  
      //calling from user.model.js file
    Driver.comparePassword(driver_password, driver.driver_password,
        (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            //idle expire time is less than 10 mins
            //expiresin:604800
            const token = jwt.sign(driver.toObject(),
              config.secret, { expiresIn: 12000000 })
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
  router.get('/driverbooking', withAuth, function (req, res) {
    res.send('The password is I love my job: ' + req.email);
  });
  //checkToken
  router.get('/checkToken', withAuth, function (req, res) {
    res.sendStatus(200);
  });
  


  module.exports = router;
  