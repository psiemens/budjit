var express = require('express');
var router = express.Router();

var R = require('ramda');

var vagueTime = require('vague-time');

var Transaction = require('../models/transaction');

function vagueTimestamp(transaction) {
  transaction.vagueTimestamp = vagueTime.get({to: transaction.timestamp});
  return transaction;
}

router.get('/', function(req, res, next) {
  Transaction.find({})
    .populate('location')
    .then(function(transactions) {
      transactions = R.map(vagueTimestamp, transactions);
      res.render('index', { transactions: transactions});
    });
});

module.exports = router;
