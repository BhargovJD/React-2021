import A from './A';
import './App.css';
import B from './B';
import C from './C';
import React, { useReducer,useContext } from 'react';

export const CountContext = React.createContext();

const initialState= 0;

const reducer = (state, action)=>{
  switch(action){
    case 'increment':
      return state+1;
    case 'decrement':
      return state-1;
    case 'reset':
      return initialState;
    default:
      return state;

  }
}


function App() {
  const [count,dispatch]= useReducer(reducer,initialState);

  return (
    <div className="App">
      <div class="container">
  <div class="row">
    <div class="col">
    </div>
    <div class="col">
    <h1>Count : {count}</h1>

    <CountContext.Provider value={{countSate:count,countDispatch:dispatch}}>
    <A/>
    <B/>
    <C/>
    </CountContext.Provider>


    </div>
    <div class="col">
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
