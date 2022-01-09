// Higher Order Functions
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

function name(fun){
    fun();
}

name(function(){
    console.log("bhargov...");
})

function name2(){
    return function(){
        return "Hacker";
    }
}

var x = name2();
console.log(x());