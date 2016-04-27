var R = require('ramda');

var vagueTime = require('vague-time');

var Transaction = require('../models/transaction');

function vagueTimestamp(transaction) {
  transaction.vagueTimestamp = vagueTime.get({to: transaction.timestamp});
  return transaction;
}

var DashboardController = {
  index: function(req) {
    return Transaction.find({})
      .populate('location')
      .then(function(transactions) {
        transactions = R.map(vagueTimestamp, transactions);
        return { transactions: transactions };
      });
  }
};

module.exports = DashboardController;
