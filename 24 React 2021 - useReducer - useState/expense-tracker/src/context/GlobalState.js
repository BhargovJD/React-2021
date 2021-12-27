import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState  ={
    transactions :[
        {id:1, text:'Flower',amount:-20},
        {id:1, text:'Salary',amount:300},
    ]
}

// create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider =({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={ {
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>

        );
}
