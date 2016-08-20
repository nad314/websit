/*jslint node: true*/
/*jslint nomen: true*/
'use strict';

var express = require('express');
var app = express();
var path = require("path");

app.get("/", function (req, res) {
    return res.sendFile(path.join(__dirname, "public/page/", "index.html"));
});

app.listen(3000, function () {
    console.log('Listening to port 3000');
});
