var express = require('express');
var router = express.Router();

var authService = require('../services/authService'); //1. connect to service 

router.post('/signup', ( req, res ) => {
  console.log(req.body);
  
  authService.signup( req.body, ( err, data ) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      res.json(err);
    }
  });
});

router.post('/login', ( req, res ) => {
  console.log(req.body);
  
  authService.login( req, ( err, data) => {
    if(!err){
      console.log(data);
      res.json(data);
    }else{
      res.json(err);
    }
  });

  
});

module.exports = router;
