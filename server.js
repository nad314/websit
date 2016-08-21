/*jslint node: true*/
/*jslint nomen: true*/
'use strict';

var express = require('express');
var app = express();
var controller = require('./api/controller');

require('./api/config/routes.js')(express, app, controller);

app.listen(3000, function () {
    console.log('Listening to port 3000');
});