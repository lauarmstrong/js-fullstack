"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import csvtojson from 'csvtojson';
var index_1 = __importDefault(require("./routes/index"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = (0, express_1.default)();
var port = 3001;
// app.get("/", (req, res) => {
//   res.send("Hello there.");
// });
app.use('/api', logger_1.default, index_1.default);
app.listen(port, function () {
    console.log("Server started at localhost: ".concat(port));
});
exports.default = app;
