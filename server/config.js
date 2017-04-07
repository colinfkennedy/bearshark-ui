"use strict";
var config = {
    'searchAndRescueApi': 'http://bearshark.advertising.aol.com:8081/nlp-backend/search'
};
var Config = (function () {
    function Config() {
    }
    Config.get = function (key) {
        return config[key];
    };
    return Config;
}());
exports.Config = Config;
