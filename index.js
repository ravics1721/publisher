"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var http_1 = require("http");
// import {readlink} from "fs";
// import {got} from "got";
var url = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv';
(0, http_1.get)(url).on("response", function (res) {
    console.log({ res: res });
}).on("error", function (err) {
    console.log("SomeError:", err);
});
