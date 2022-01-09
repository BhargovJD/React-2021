// Difference between “ == “ and “ === “ operators.

/*

Both are comparison operators. The difference between both the operators is that,“==” is used to compare values whereas, “ === “ is used to compare both value and types.

*/

var x = 3;
var y = "3";
console.log(x==y); // Returns true since the value of both x and y is the same
console.log(x===y); // Returns false since the typeof x is "number" and typeof y is "string"
