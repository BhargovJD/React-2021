let DUMMY_USERS = [
    {
        id:'u1',
        name:'Max',
        email:"m@gmail.com",
        password:"12345"
    },

    {
        id:'u1',
        name:'Lama',
        email:"l@gmail.com",
        password:"12345"
    },

    {
        id:'u3',
        name:'Dev',
        email:"d@gmail.com",
        password:"12345"
    },
]
// .............................................................
const getUsers = (req,res)=>{
    res.json({users: DUMMY_USERS})

}

// ..............................................
const signup = (req,res)=>{
    const {id,name,email,password} = req.body;

    if(id,name,email,password === ""){
        return res.json({message:"All fields are required"})
    }

    const hasUser = DUMMY_USERS.find(u=>u.email === email)
    if(hasUser){
        // invalid user input so 422
        res.status(422).json({message:"Email already exist!"})
    }

    const createdUser = {
        id:id,
        name:name,
        email:email,
        password:password
    }

    DUMMY_USERS.push(createdUser)
    // Created new data so 200
    res.status(201).json({new_users: DUMMY_USERS})
}

// ...........................................................
const login = (req,res)=>{
    const {email, password} = req.body;

    const identifiedUser = DUMMY_USERS.find(u=>u.email === email)
    if(!identifiedUser || identifiedUser.password !== password ){
        // operation so 401
        res.status(401).json({message : "Wrong credentials"})
    }
    else{
        res.status(200).json({message: "Logged in"})
    }
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;