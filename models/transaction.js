var Transaction;

var db        = require('mongoose');
var Promise   = require('bluebird');

var transactionSchema = new db.Schema({
  timestamp:  { type: Date, required: true },
  type:       { type: String, required: true },
  amount:     { type: Number, required: true },
  location:   {
    type: db.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  }
});

var Model = db.model('Transaction', transactionSchema);
module.exports = Transaction = Promise.promisifyAll(Model);
