// It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence.

// function simpleFunction(param1, param2, param3) => function curriedFunction(param1)(param2)(param3)

function add (a) {
    return function(b){
      return a + b;
    }
  }

  console.log(add(3)(4))