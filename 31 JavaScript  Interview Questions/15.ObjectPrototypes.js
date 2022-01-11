// All javascript objects inherit properties from a prototype(class).

// A prototype is a blueprint(class) of an object. Prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object.

var arr = [];
arr.push(2);

console.log(arr); // Outputs [2]

// In the code above, as one can see, we have not defined any property or method called push on the array “arr” but the javascript engine does not throw an error.