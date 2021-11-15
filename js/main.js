// var declaration section

var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    clearBtns = document.querySelectorAll('.clear_btn'),
//  ce = document.getElementById('ce'),    
//  c = document.getElementById('c'),    
    decimalBtn = document.getElementById('decimal'),    
    resultBtn = document.getElementById('result');
    howWorkBtn = document.getElementById('howWorkBtn'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0, // number currently on display
    MemoryNewNumber = false, // to find out if the entered number is new or not
    MemoryPendingOperation = '',
    operationsList = document.getElementById('operationsList'),
    liList = true; 

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
//number.addEventListener('click', numberPress); // numberPress() will call the function, without () it works only on click
  number.addEventListener('click', function(e) {
    numberPress(e.target.textContent);
  });
};

for (var i=0; i<operations.length; i++) {
  var operationBtn = operations[i];
//operationBtn.addEventListener('click', operation); if put operation function inside like this, there no access to the function event element (e)
  operationBtn.addEventListener('click', function(e) { // here is access to the function event element
//  console.log(e); event element properties to get access to textContent
    operation(e.target.textContent);
  });
};

for (var i=0; i<clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener('click', function (e) {
//  console.log(e.target.id);
//  console.log('Click on CE or C button');
    clear(e.target.id);    
  });
};

/*
ce.addEventListener('click', function (e) {
  console.log(e.target.id);
  console.log('Click on CE button');
});

c.addEventListener('click', function (e) {
  console.log('Click on C button');
});
*/

decimalBtn.addEventListener('click', decimal);

resultBtn.addEventListener('click', result);

howWorkBtn.addEventListener('click', howWork);

///////////////////////////////////////////////////////// functions section

function numberPress(number) {
  if (MemoryNewNumber) {
      display.value = number; // if the number is new replace current to new
      MemoryNewNumber = false; // again replace to false 
  } else {
      if (display.value === '0') {
        display.value = number; // replace default value 0 to entered number
    } else {
        display.value += number; // += means add right next entered number
    };
  };
  
  console.log('Click btn number ' + number);
};

function operation(op) { // op is an operation
  var localOperationMemory = display.value;

  if (MemoryNewNumber && MemoryPendingOperation !== '=') {
    display.value = MemoryCurrentNumber;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === '+') {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '-') {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '*') {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === '/') {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    };

    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  };

  console.log('Click on operation button ' + op);
};

function decimal() {
  var localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = '0.'
    MemoryNewNumber = false; // again replace to false 
  } else {
    if (localDecimalMemory.indexOf('.') === -1 ) {
        localDecimalMemory += '.';
    };

    display.value = localDecimalMemory;
    
  };

  console.log('Click on Decimal button');
};

function clear(id) {
  if (id === 'ce') {
      display.value = '0';
      MemoryNewNumber = true;
  } else if (id === 'c') {
      display.value = '0';
      MemoryNewNumber = true;
      MemoryCurrentNumber = 0;
      MemoryPendingOperation = ''; 
  }

  console.log('Click on button ' + id + '!');
};

function howWork() {
  if (liList){
    for (var i=0; i<operations.length; i++){
        var newLi = document.createElement('li');
        var operationText = operations[i].value;
        newLi.innerText = operationText;
        operationsList.appendChild(newLi);
        liList = false;
    };
    liList = false;
  };

  console.log('Click on button How it works?');
};

// function result() {
//  console.log('Click on Result button');
//};