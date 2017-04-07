"use strict";
var express = require("express");
var router_1 = require("./router");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var app = express();
var BearSharkApp = (function () {
    function BearSharkApp() {
    }
    BearSharkApp.prototype.run = function () {
        app.use(bodyParser.json());
        app.use('/', express.static('dist/ui'));
        app.use('/bear-shark', express.static('dist/ui/bearshark.html'));
        app.use('/node_modules/', express.static('node_modules'));
        app.use('/app/', express.static('app'));
        app.use('/api/', new router_1.AppRouter().getRouter());
        app.use(morgan('dev'));
        console.log('Starting application on port 8080.');
        app.listen(8080);
    };
    ;
    return BearSharkApp;
}());
exports.BearSharkApp = BearSharkApp;
