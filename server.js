/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, regexp: true, sloppy: true */
/*global require, process*/

var debug = require('debug')('handle');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
    console.log("Express server listening on port %d in %s mode", app.get("port"), app.settings.env);
});
