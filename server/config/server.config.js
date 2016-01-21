/**
 * Created by Valentino on 13.12.2015..
 */
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var path = require('path');

module.exports = function(app){
    app.use(favicon(path.join(app.get('views'), 'favicon.ico')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};