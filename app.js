'use strict'

const zeroButton = document.getElementById("0");
const oneButton = document.getElementById("1");
const twoButton = document.getElementById("2");
const threeButton = document.getElementById("3");
const fourButton = document.getElementById("4");
const fiveButton = document.getElementById("5");
const sixButton = document.getElementById("6");
const sevenButton = document.getElementById("7");
const eightButton = document.getElementById("8");
const nineButton = document.getElementById("9");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");
const result = document.getElementById("result");

let inputOne = 1, inputTwo = 1;
let operator;


const appendDigit = (value) => {
    console.log(value);
}

const useOperator = (operator) => {
    console.log(operator);
}

const calculateResult = () => {
    console.log(inputOne + inputTwo);
}

zeroButton.addEventListener("click", function(){appendDigit(0)});
oneButton.addEventListener("click", function(){appendDigit(1)});
twoButton.addEventListener("click", function(){appendDigit(2)});
threeButton.addEventListener("click", function(){appendDigit(3)});
fourButton.addEventListener("click", function(){appendDigit(4)});
fiveButton.addEventListener("click", function(){appendDigit(5)});
sixButton.addEventListener("click", function(){appendDigit(6)});
sevenButton.addEventListener("click", function(){appendDigit(7)});
eightButton.addEventListener("click", function(){appendDigit(8)});
nineButton.addEventListener("click", function(){appendDigit(9)});

plusButton.addEventListener("click", function(){useOperator("+")});
minusButton.addEventListener("click", function(){useOperator("-")});
multiplyButton.addEventListener("click", function(){useOperator("*")});
divideButton.addEventListener("click", function(){useOperator("/")});

equalsButton.addEventListener("click", calculateResult);