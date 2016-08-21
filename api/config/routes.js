/*jslint node: true*/
/*jslint nomen: true*/
'use strict';

module.exports = function (express, app, controller) {
    app.use('/page', controller.page);
    app.all('*', function (req, res) {
        return res.status(404).send('Page not found');
    });
};