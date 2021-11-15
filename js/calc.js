/* examples

var btn = document.getElementById('ce');
var display = document.getElementById('display');

btn.addEventListener('click', function (e){
  alert('CE button');
});

display.addEventListener('keyup', function (e){
  alert(e.target.value);
});
*/

// this part sends buttons value to the display input value

/*
var btns = document.querySelectorAll('.btn');
var display = document.getElementById('display');

var handleClick = function (e) {
  var value = e.target.textContent;
  display.value = value;
}

for (var i = 0; i < btns.length; i++) {
  var btn = btns[i];

  btn.addEventListener('click', handleClick);
};
*/