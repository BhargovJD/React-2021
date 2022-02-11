import { createSlice } from "@reduxjs/toolkit";

export const fetchSlice = createSlice({
    name:"FetchData",

    initialState:{
        value:{
            fetchData:false
        }
    },

    reducers:{

        fetchOn:(state, action)=>{
            state.value = action.payload
        },
    }
})

export const {fetchOn} = fetchSlice.actions;
export default fetchSlice.reducer;