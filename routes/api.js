var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');
var Twilio = require('../helpers/twilio');

// Twilio SMS Request URL
router.post('/twilio/sms', function(req, res, next) {
  return Transaction.create(Twilio.parseSMS(req.body)).then(function (object, err) {
    if (err) {
      res.send('There was an error recording the transaction.')
    } else {
      res.send(object);
    }  
  });

});

module.exports = router;
