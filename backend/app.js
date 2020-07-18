//import Modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const app =express();

//importing custom routes
var passport = require('passport');
//associating passport object with passport jwt strategy
var myPassportService = 
require('./config/passport').customerPassport(passport);
var myDriverService = 
require('./config/passport').driverPassport(passport);
const customerRoutes = require('./routes/customer.routes');
const driverRoutes = require('./routes/driver.routes');
const PORT = 4000;

//registering middleware for request-response pipeline
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//enabling passport authentication for routes
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname));
app.use(cors());
app.use('/api/customer',customerRoutes);
app.use('/api/driver',driverRoutes);

app.listen(PORT,()=>{
    console.log("The server is running on PORT:" +PORT);
});