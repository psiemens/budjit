var router = require('express').Router();
var connect = require('./helpers/connectRoutes');

// Application controllers
var Dashboard = require('./controllers/Dashboard');
var Alerts = require('./controllers/Alerts');
var Accounts = require('./controllers/Accounts');

var routes = [
  // Homepage
  ['get',  '/',                          Dashboard.index, 'index'],

  // API Routes
  ['post', '/api/alerts/email',          Alerts.email],
  ['get',  '/api/accounts/:id/balance',  Accounts.balance]
];

module.exports = connect(routes, router);
