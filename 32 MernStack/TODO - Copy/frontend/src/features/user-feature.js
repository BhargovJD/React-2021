import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"User",

    initialState:{
        value:{
            currentUserEmail:"",
            userActive:false
        }
    },

    reducers:{

        login:(state, action)=>{
            state.value = action.payload
        },

        logout:(state, action)=>{
            state.value = action.payload
        }
    }
})

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;