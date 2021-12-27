import './App.css';
import Child from './Child';
import {createContext,useState} from 'react';
import Other from './Other';

export const GlobalInfo = createContext();

function App() {

  const [color, setColor] = useState('green');
  const [day, setDay]=useState('Day');

  const getDay = (data)=>{
    console.log(data);
    setDay(data);

  }


  return (

    <GlobalInfo.Provider value={{textColor:color, getDay:getDay}}>

      <div className="App">

      <h1>App Component and {day}</h1>
      <Child/>
      <Other/>

      </div>

    </GlobalInfo.Provider>

  );
}

export default App;
