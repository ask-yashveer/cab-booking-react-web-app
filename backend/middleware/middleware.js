const jwt = require('jsonwebtoken');
// const secret = 'mysecretsshhh';
const secret = 'My Secret Key';
// const token = jwt.sign();
const withAuth = function(req, res, next) {
  const token = 
  req.body.token ||
  req.query.token ||
  req.headers['x-access-token'] ||
  req.cookies.token;
console.log(token);
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.customer_emailId = decoded.customer_emailId;
        // console.log(data);
        next();
      }
      console.log(secret);
    });
  }
}

module.exports = withAuth;