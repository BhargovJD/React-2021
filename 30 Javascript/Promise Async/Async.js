// https://jsonplaceholder.typicode.com/users
// const axios = require("axios");

// const data = axios.get("https://jsonplaceholder.typicode.com/users");

// data.then((res)=>{
//     console.log(res.data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise resolve!");
// })

// or
const axios = require("axios");

const fetchData =  async()=>{
    try {
        const data = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Finally");
    }
}

fetchData();

