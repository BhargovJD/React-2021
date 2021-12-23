import './App.css';
import CounterClass from './CounterClass';
import CounterFunctional from './CounterFunctional';

function App() {
  return (
    <div className="App">
      <CounterClass/>
      <hr/>
      <CounterFunctional/>
    </div>
  );
}

export default App;
