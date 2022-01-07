// "Producing code" is code that can take some time. 
const myEvent = new Promise((resolve,reject)=>{
    var name = "Bhargov";
    if(name == "Bhargov"){
        resolve(name);
    }
    else{
        reject("Name was not Bhargov, name was "+name);
    }
});

myEvent.then((name)=>{
    console.log(name);
}).catch((err)=>{
    console.log(err);
})