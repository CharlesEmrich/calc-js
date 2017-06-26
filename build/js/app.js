(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator() {

}

Calculator.prototype.add = function (a,b) {
  return a + b;
};
Calculator.prototype.subtract = function (a,b) {
  return a - b;
};
Calculator.prototype.multiply = function (a,b) {
  return a * b;
};
Calculator.prototype.divide = function (a,b) {
  return a / b;
};



exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;

$(function() {
  $("#calculator-form").submit(function(event) {
    event.preventDefault();
    ourCalc = new Calculator();
    var operator = $("select[name=operator]").val();
    if (operator === "Add"){
      $("#result").text(
        ourCalc.add(parseInt($("#operand1").val()), parseInt($("#operand2").val()))
      );
    }
    if (operator === "Subtract"){
      $("#result").text(
        ourCalc.subtract(parseInt($("#operand1").val()), parseInt($("#operand2").val()))
      );
    }
    if (operator === "Multiply"){
      $("#result").text(
        ourCalc.multiply(parseInt($("#operand1").val()), parseInt($("#operand2").val()))
      );
    }
    if (operator === "Divide"){
      $("#result").text(
        ourCalc.divide(parseInt($("#operand1").val()), parseInt($("#operand2").val()))
      );
    }
  });
});


},{"./../js/calculator.js":1}]},{},[2]);
