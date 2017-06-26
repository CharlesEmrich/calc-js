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
