var express = require('express');
var router = express.Router();

var Transaction = require('../models/transaction');

/* GET home page. */
router.get('/', function(req, res, next) {
  return Transaction.findAsync({}).then(function(results){
    return res.render('index', { transactions: results});
  });
});

module.exports = router;
