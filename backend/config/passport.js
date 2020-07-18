const Customer = require('../models/customer.model');
const Driver = require('../models/driver.model');
const config = require('../config/db');

customerPassport = function(passport){
    var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {}
    opts.jwtFromRequest = 
        ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,
    (jwt_payload,done)=>{
        Customer.getUsersById(jwt_payload._id,(err,user)=>{
            if(err) return done(err,false);
            if(user) return done(null,user);
            else return done(null,false);
        })
    }))
}

driverPassport = function(passport){
    var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
    var opts = {}
    opts.jwtFromRequest = 
        ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,
    (jwt_payload,done)=>{
        Driver.getUsersById(jwt_payload._id,(err,driver)=>{
            if(err) return done(err,false);
            if(driver) return done(null,driver);
            else return done(null,false);
        })
    }))
}

module.exports = {
    driverPassport: driverPassport,
    customerPassport: customerPassport
}