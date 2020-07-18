 //Import mongoose schemma
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
// //create object of mongoose schema
const Schema = mongoose.Schema;

//Define Schema
let DriverSchema = new Schema({
    driver_firstName:{
        type:String
    },
    driver_lastName:{
        type:String
    },
    driver_emailId:{
        type:String,required: true, unique: true 
    },
    driver_mobileNumber:{
        type:String
    },
    driver_password:{
        type:String,required: true
    }
},
{
    collection:'drivers'
});

 const Driver = module.exports = mongoose.model('Driver',DriverSchema);
module.exports.addDriver = function (newDriver,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newDriver.driver_password,salt,(err,hash)=>{
            //  if(err) throw err;

            newDriver.driver_password = hash;
            newDriver.save(callback);
        })
    })
}//end of addUser() function
//GetUserByName
module.exports.getDriversByDriverName = 
    function(driver_emailId,callback){
        const query = { driver_emailId: driver_emailId};
        Driver.findOne(query,callback);
    }//end of getUserByUserName() function
//user.compare password() function exported from here
module.exports.comparePassword = 
    function(driver_password, hash,callback){
        bcrypt.compare(driver_password,hash,
            (err, isMatch) =>{
                if(err) throw err;
                callback(null,isMatch);
            });
    }//end ofcomparePassword() function
//User.getUsersById()
module.exports.getDriversById = function (id,callback){
    Driver.findById(id,callback);
}


