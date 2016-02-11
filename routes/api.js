var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');
var Twilio = require('../helpers/twilio');

// Twilio SMS Request URL
router.post('/twilio/sms', function(req, res, next) {
  
  // Two options:

  // 1. Create a new transaction record from the SMS body
  function createTransaction(data){
    return Transaction.create(data).then(function (object, err) {
      if (err) {
        res.send('There was an error recording the transaction.')
      } else {
        res.send(object);
      }  
    });
  }

  // 2. Respond 'YES' to confirm the RBC Alert subscription
  function confirmSubscription(){
    res.set('Content-Type', 'text/xml');
    res.send('<?xml version="1.0" encoding="UTF-8"?><Response><Message><Body>YES</Body></Message></Response>');
  }

  try {
    var transactionData = Twilio.parseSMS(req.body);
    return createTransaction(transactionData);
  }
  catch (e) {
    return confirmSubscription();
  }

});

module.exports = router;


