const array = [1,2,3,4,5,6,7,8,9,0];

// Loop through elements we can manipulate elements like add, sub, div, mul
const newArray = array.map((number)=>{
    return number * 2;
});

console.log(newArray);