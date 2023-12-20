// let's start a mini calculator project;

var prompt = require('prompt-sync')();

let n1 : number = parseInt(prompt("enter the first number :"));

let n2 : number = parseInt(prompt("enter the second number :"));

let operator = prompt("select the correct operator (+ , - , * , /) : ");

if (operator == "+"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1+n2}`);
}
else if (operator == "-"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1-n2}`);
}
else if (operator == "*"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1*n2}`);
}
else if (operator == "/"){
    console.log(`the answer of ${n1} ${operator} ${n2} = ${n1/n2}`);
}
else{"select the correct operator"};

export{}