//Import mongoose schemma
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;
//create object of mongoose schema
const Schema = mongoose.Schema;

//Define Schema
let CustomerSchema = new Schema({
    customer_firstName:{
        type:String
    },
    customer_lastName:{
        type:String
    },
    customer_emailId:{
        type:String,required: true, unique: true 
    },
    customer_mobileNumber:{
        type:String
    },
    customer_password:{
        type:String,required: true
    }
},
{
    collection:'customers'
});
const Customer = module.exports = mongoose.model('Customer',CustomerSchema);
module.exports.addUser = function (newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.customer_password,salt,(err,hash)=>{
            //  if(err) throw err;

            newUser.customer_password = hash;
            newUser.save(callback);
        })
    })
}//end of addUser() function
//GetUserByName
module.exports.getUsersByUserName = 
    function(customer_emailId,callback){
        const query = { customer_emailId: customer_emailId};
        console.log(customer_emailId)
        Customer.findOne(query,callback);
    }//end of getUserByUserName() 
    
//user.compare password() function exported from here
module.exports.comparePassword = 
    function(customer_password, hash,callback){
        console.log(customer_password)
        bcrypt.compare(customer_password,hash,
            (err, isMatch) =>{
                if(err) throw err;
                callback(null,isMatch);
            });
    }//end ofcomparePassword() function
//User.getUsersById()
module.exports.getUsersById = function (id,callback){
    Customer.findById(id,callback);
}


