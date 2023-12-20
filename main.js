"use strict";
// let's start a mini calculator project;
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
var n1 = parseInt(prompt("enter the first number :"));
var n2 = parseInt(prompt("enter the second number :"));
var operator = prompt("select the correct operator (+ , - , * , /) : ");
if (operator == "+") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 + n2));
}
else if (operator == "-") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 - n2));
}
else if (operator == "*") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 * n2));
}
else if (operator == "/") {
    console.log("the answer of ".concat(n1, " ").concat(operator, " ").concat(n2, " = ").concat(n1 / n2));
}
else {
    "select the correct operator";
}
;
