const array = [1,2,3,4,5,6,7,8,9,0];

// loop through elements and keep some specific values

const newArray = array.filter((number)=>{
    return number < 5;
});

console.log(array);
console.log(newArray);