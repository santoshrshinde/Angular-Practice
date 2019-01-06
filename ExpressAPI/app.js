var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors')
app.use(cors());
var userController = require('./Controllers/userController');
var authDecodeController = require('./Controllers/authDecodeController');
var authController = require('./Controllers/authController');
app.use('/users', userController);
app.use('/authdecode', authDecodeController);
app.use('/auth', authController);
module.exports = app;