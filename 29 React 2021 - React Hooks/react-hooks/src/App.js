import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseLayoutEffect from './components/UseLayoutEffect';
import Parent from './components/UseImperativeHandle/Parent';
import UseContext from './usecontext/UseContext';

function App() {
  return (
    <div className="App">
      <h2>All useful states</h2>
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      {/* <UseLayoutEffect/> */}
      {/* <Parent/> */}
      <UseContext/>
    </div>
  );
}

export default App;
