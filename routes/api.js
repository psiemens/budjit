var express = require('express');
var router = express.Router();

var EmailHelpers = require('../helpers/email');
var Transaction = require('../models/transaction');

router.post('/alert/email', function(req, res) {

  var data = EmailHelpers.parse(req.body['body-plain']);

  return Transaction.create(data).then(function (object, err) {
    if (err) {
      res.send('There was an error recording the transaction.')
    } else {
      res.send(object);
    }
  });

});

module.exports = router;
