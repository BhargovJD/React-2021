import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
    name:"theme",
    initialState:{value:{backgroundColor:"white",textColor:"black",txt:""}},

    // functions to alter the state values
    reducers:{
        changeTheme:(state, action)=>{
            state.value = action.payload
        },

    }

});

export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;