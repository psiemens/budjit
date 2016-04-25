var express = require('express');
var router = express.Router();

var EmailHelpers = require('../helpers/email');
var Transaction = require('../models/transaction');

router.post('/alert/email', function(req, res, next) {

  var data = EmailHelpers.parse(req.body['body-plain']);

  Transaction.create(data)
    .then(function(object) {
      return res.json(object);
    })
    .catch(next);
});

module.exports = router;
