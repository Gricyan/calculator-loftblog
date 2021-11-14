// var declaration section

var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.getElementById('decimal'),
    ce = document.getElementById('ce'),
    c = document.getElementById('c'),
    result = document.getElementById('result');
    howWorkBtn = document.getElementById('howWorkBtn');

// console.log(numbers);
// console.log(operations);
// console.log(decimalBtn);
// console.log(ce);
// console.log(c);
// console.log(result);
// console.log(howWorkBtn);

// Event handlers section

for (var i=0; i<numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener('click', numberPress); // numberPress() will call the function, without () it works only on click
};

for (var i=0; i<operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener('click', operation);
};

decimalBtn.addEventListener('click', decimal);

ce.addEventListener('click', function (e) {
  console.log(e.target.id);
  console.log('Click on CE button');
});

c.addEventListener('click', function (e) {
  console.log('Click on C button');
});

result.addEventListener('click', function (e) {
  console.log('Click on result button');
});

howWorkBtn.addEventListener('click', howWork);

// functions section

function numberPress(number) {
  console.log('Click btn number');
};

function operation() {
  console.log('Click on operation button');
};

function decimal() {
  console.log('Click on Decimal button');
};

function clear() {

};

function howWork() {
  console.log('Click on button How it works?');
};