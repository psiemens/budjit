var EmailHelpers = require('../helpers/email');

var Transaction = require('../models/transaction');
var Location = require('../models/location');

var AlertsController = {
  email: function(req) {

    var data = EmailHelpers.parse(req.body['body-plain']);

    return Location.findOrCreateBySlug(data.location)
      .then(function(location) {

        var transaction = {
          timestamp: new Date(),
          type: data.type,
          amount: data.amount,
          location: location
        };

        return Transaction.create(transaction);
      });
      
  }
};

module.exports = AlertsController;
