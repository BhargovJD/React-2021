// Hoisting is a default behaviour of javascript where all the variable and function declarations are moved on top.

a =10;
console.log(a)
var a;


nameVar='bjd';
function name() {
    console.log(nameVar);
}

name()
var nameVar;

// Variable initializations are not hoisted, only variable declarations are hoisted:

var x;
console.log(x);
x = 23;
// Outputs "undefined" since the initialization of "x" is not hoisted