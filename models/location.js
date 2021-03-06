var Location;

var db        = require('mongoose');
var Promise   = require('bluebird');

var locationSchema = new db.Schema({
  slug:       { type: String, required: true },
  name:       { type: String, required: false },
  category:   { type: String, required: false }
});


// Static functions

locationSchema.statics.findOrCreateBySlug = function(slug) {
  return Location.findOne({slug: slug})
    .then(function(transaction) {
      if (transaction) {
        return transaction;
      } else {
        return Location.create({slug: slug});
      }
    });
};

// Methods

locationSchema.methods.getName = function() {
  return this.name || this.slug;
};

var Model = db.model('Location', locationSchema);
module.exports = Location = Promise.promisifyAll(Model);
