var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');
var Twilio = require('../helpers/twilio');

// Twilio SMS Request URL
router.post('/alert/email', function(req, res) {

  console.log(req);

  // function createTransaction(data){
  //   return Transaction.create(data).then(function (object, err) {
  //     if (err) {
  //       res.send('There was an error recording the transaction.')
  //     } else {
  //       res.send(object);
  //     }
  //   });
  // }

});

module.exports = router;
