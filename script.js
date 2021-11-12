// Cycles

// while cycle /////////////////////////////////////////////////

console.log('// while cycle');

digit = 1;

while (digit <= 10) {
  console.log(digit + ' ok!');
  digit = digit + 1;
};

console.log(digit + ' is more than 10!');

// do...while cycle /////////////////////////////////////////////

console.log('// do...while cycle');

digit_1 = 10;

do {
  console.log('cycle makes first round anyway');
  digit_1 = digit_1 + 1; // add iteration
} while (digit_1 < 10);

console.log(digit_1 + ' is more than 10!');

// for //////////////////////////////////////////////////////////

console.log('// for cycle');

var arr = [1,4,6,3,10];

for(i=0, sum=0; i<=arr.length; i++) {
  sum += arr[i];
  console.log(sum);
};

console.log(sum); // it`s not working. why?

// cycle with break ////////////////////////////////////////

console.log('// for cycle with break');

var arr = [1,4,6,3,10];

for(i=0, sum=0; i<=arr.length; i++) {
    if(arr[i] === 3){
      break; // sum until 3
    }
  sum += arr[i];
  console.log(sum);
};

// cycle with continue //////////////////////////////////////

console.log('// for cycle with continue');

var arr = [1,4,6,3,10];

for(i=0, sum=0; i<=arr.length; i++) {
    if(arr[i] === 3 || arr[i] === 10){
      continue; // everything except 3 and 10
    }
  sum += arr[i];
  console.log(sum);
};