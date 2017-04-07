"use strict";
var express = require("express");
var searchAndRescueController_1 = require("./controllers/searchAndRescueController");
var AppRouter = (function () {
    function AppRouter() {
        this.router = express.Router();
        this.searchAndRescueController = new searchAndRescueController_1.SearchAndRescueController();
        this.configure();
    }
    AppRouter.prototype.configure = function () {
        this.router.post('/search', this.searchAndRescueController.search);
    };
    AppRouter.prototype.getRouter = function () {
        return this.router;
    };
    return AppRouter;
}());
exports.AppRouter = AppRouter;
