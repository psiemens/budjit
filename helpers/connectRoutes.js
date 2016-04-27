var Promise = require('bluebird');

// Wrapper function to handle promises returned from controllers
function makeRequest(callback, template) {
  return function(req, res, next) {
    Promise.resolve(callback(req))
      .then(function(data) {
        if (!!template) {
          res.render(template, data);
        } else {
          res.send(data);
        }
      })
      .catch(next);
  };
}

module.exports = function(routes, router) {
  for (var i = 0; i < routes.length; i++) {
    var route = routes[i],
        method = route[0],
        pattern = route[1],
        callback = route[2],
        template = route[3];

    router[method](pattern, makeRequest(callback, template));
  }

  return router;
};
