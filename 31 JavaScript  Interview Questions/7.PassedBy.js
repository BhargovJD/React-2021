// https://dmitripavlutin.com/value-vs-reference-javascript/

/*
JavaScript provides 2 categories of data types: primitives and objects.

The simple rule of passing by value is that all primitive values in JavaScript are passed by value. Simple as that.

Passing by value means that every time you assign a value to a variable, a copy of that value is created. Every single time.


*/

var a =1;
var b =2;

b=b+1;
console.log(a);
console.log(b);

// The first statement let a = 1 defines a variable a initialized with the number 1.

// The second statement let b = a defines another variable b and initializes it with the value of a variable — which is passing by value. Simpler, a copy of the number 1 is assigned to b.

// Later, b = b + 2 increases by 2 and becomes 3. b variable changes, and this change doesn't affect the value of a.

// References
// When creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.

let x = [1];
let y = x;
y.push(2);
console.log(x); // [1, 2]
console.log(y); // [1, 2]

/*

In JavaScript primitive types are passed around as values: meaning that each time a value is assigned, a copy of that value is created.

On the other side objects (including plain objects, array, functions, class instances) are references. If you modify the object, then all variables that reference that object are going to see the change.

The comparison operator distinguishes comparing values and references. 2 variables holding references are equal only if they reference exactly the same object, but 2 variables holding values are equal if they simply have 2 same values no matter where the value originates: from a variable, literal, etc.

*/