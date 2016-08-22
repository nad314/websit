/*jslint node: true*/
/*jslint nomen: true*/
/*jslint es5: true*/
'use strict';

var path = require("path");

module.exports = function (express, app, controller) {
    app.use('/page', controller.page);
    app.use('/css', express.static(path.join(__dirname, "../../public/css")));
    app.all('*', function (req, res) {
        return res.status(404).send('Page not found');
    });
};