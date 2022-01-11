// Recursion is a process of calling itself. A function that calls itself is called a recursive function.

// A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

// Once the condition is met, the function stops calling itself. This is called a base condition.

// A simple example of a recursive function would be to count down the value to 1.


// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);

/*
    4
    3
    2
    1
*/