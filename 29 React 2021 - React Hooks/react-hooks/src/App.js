import logo from './logo.svg';
import './App.css';
import UseState from './components/UseState';
import UseReducer from './components/UseReducer';
import UseEffect from './components/UseEffect';
import UseRef from './components/UseRef';
import UseLayoutEffect from './components/UseLayoutEffect';

function App() {
  return (
    <div className="App">
      <h2>All useful states</h2>
      {/* <UseState/> */}
      {/* <UseReducer/> */}
      {/* <UseEffect/> */}
      {/* <UseRef/> */}
      <UseLayoutEffect/>
    </div>
  );
}

export default App;
