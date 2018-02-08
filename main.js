var amountDue = document.getElementById('amount-due');
var amountReceived = document.getElementById('amount-received');
var button = document.getElementById('calculate-change');
var result = document.getElementById('result');

var sale;
var payment;
var change;

var dollarsOutput = document.getElementById('dollars-output');
var quartersOutput = document.getElementById('quarters-output');
var dimesOutput = document.getElementById('dimes-output');
var nickelsOutput = document.getElementById('nickels-output');
var penniesOutput = document.getElementById('pennies-output');

function customerChange(sale, payment){
    return (payment - sale); 
}

function eventClickHandle(){
    sale = amountDue.value;
    payment = amountReceived.value;
    var change = customerChange(sale, payment).toFixed(2);
    result.innerHTML = "The customer's change is $"+ change;
    var currency = change * 100;
    var dollar = currency / 100;
    var remainder = currency % 100;
    var quarters = remainder / 25;
        remainder = remainder % 25;
    var dimes = remainder / 10;
        remainder = remainder % 10;
    var nickels = remainder / 5;
        remainder = remainder % 5;
    var pennies = remainder;
    dollarsOutput.innerHTML = Math.floor(dollar);
    quartersOutput.innerHTML = Math.floor(quarters);
    dimesOutput.innerHTML = Math.floor(dimes);
    nickelsOutput.innerHTML = Math.floor(nickels);
    penniesOutput.innerHTML = Math.round(pennies);  
}
