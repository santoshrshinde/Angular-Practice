
var express = require('express');
var apiRoutes = express.Router(); 
var jwt = require('jsonwebtoken');
apiRoutes.use(function(req, res, next) {
  var token = req.headers.authorization; //req.body.token || req.query.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, 'iloveyoupriya', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
  } else {
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' ,
    });
  }
});
module.exports = apiRoutes;