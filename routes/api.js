var express = require('express');
var router = express.Router();

var EmailHelpers = require('../helpers/email');

var Transaction = require('../models/transaction');
var Location = require('../models/location');

router.post('/alert/email', function(req, res, next) {

  var data = EmailHelpers.parse(req.body['body-plain']);

  Location.findOrCreateBySlug(data.location)
    .then(function(location) {

      var transaction = {
        timestamp: new Date(),
        type: data.type,
        amount: data.amount,
        location: location
      };

      return Transaction.create(transaction);
    })
    .then(function(object) {
      return res.json(object);
    })
    .catch(next);

});

module.exports = router;
