import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext()

export const AuthContextProvider = ({childern}) => {
    const [user, setUser] = useState(null)

    const loginUser  = async({username,password})=>{
        try{
            const res  = await axios.post('http://localhost:8000/api/auth/register',{username,password})

            const user = await res.json()
            console.log(user)

        }
        catch(err){
            console.log(err)
        }
    }

    return <AuthContext.Provider value={{loginUser}}>{childern}</AuthContext.Provider>
}