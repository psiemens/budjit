var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');

// Twilio SMS Request URL
router.post('/twilio/sms', function(req, res, next) {

  var data = {
    timestamp: new Date(),
    amount: 1,
    location: 'McDonalds'
  }; 

  // Transaction.create(data).then(function (err, small) {
  //   if (err) return handleError(err);

  // });

  return res.send(true);

});

module.exports = router;
