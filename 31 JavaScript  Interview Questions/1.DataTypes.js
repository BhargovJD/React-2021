/*
String, Number.

Bigint: This data type is used to store numbers which are above the limitation of the Number data type.

Undefined - When a variable is declared but not assigned, it has the value of undefined and it’s type is also undefined.
*/

// To know the type of a JavaScript variable, we can use the typeof operator.

var name = "Bhargov";
console.log(name);

/* Primitive data types can store only a single value. To store multiple and complex values, non-primitive data types are used.

Object - Used to store collection of data. */

// Collection of data in key-value pairs
var emp = {
    name:"xyz",
    age:24
}

console.log(emp);
console.log(emp.age);

// Collection of data as an ordered list
var array1 = [5, "Hello", true, 4.1];
console.log(array1[0]);
