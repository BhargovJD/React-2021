import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:"user",
    initialState:{value:{name:" not available",username:" not available"}},

    // functions to alter the state values
    reducers:{
        login:(state, action)=>{
            state.value = action.payload
        },

        logout:(state, action)=>{
            state.value = action.payload
        },
    }

});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;