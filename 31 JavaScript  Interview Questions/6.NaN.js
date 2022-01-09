// Not a number
// To check if a value is NaN, we use the isNaN() function,
// isNaN() function converts the given value to a Number type, and then equates to NaN.

isNaN("Hello")  // Returns true
isNaN(345)   // Returns false
isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number)
isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)
isNaN(false) // Returns false
isNaN(undefined) // Returns true