// A callback is a function that will be executed after another function gets executed.

function operationDiv(sum){
    var ans = sum/2
    console.log(ans);
}

function calculate (num1,num2,operation){
    var sum = num1+num2;
    operation(sum);
}

calculate(4,4,operationDiv);

// The calculate function takes 3 arguments, first number, second number, and the operation that is to be performed on their sum (callback) .