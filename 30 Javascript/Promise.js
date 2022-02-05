// Promise
// const axios =  require("axios")
// const data = axios.get('https://jsonplaceholder.typicode.com/todos/1')

//   data.then((res)=>{
//       console.log(res.data)
//   }).catch((err)=>{
//       console.log(err)
//   }).finally(()=>{
//       console.log("Last line...")
//   })

//   async wait
const axios =  require("axios")

const fetchData = async () =>{
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        console.log(data.data)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("Last log")
    }
}

fetchData()




