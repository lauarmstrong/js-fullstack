"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var imageApi_1 = __importDefault(require("./api/imageApi"));
var routes = (0, express_1.Router)();
routes.get('/', function (req, res) {
    res.send('Main API route');
});
routes.use('/imageApi', imageApi_1.default);
exports.default = routes;
