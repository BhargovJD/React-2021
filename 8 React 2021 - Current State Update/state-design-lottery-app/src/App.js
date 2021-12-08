import './App.css';
import Lotteray from './Lotteray';

function App() {
  return (
    <div className="App">
      <Lotteray/>
      <Lotteray title="Mini Daily" maxNum={10} maxBalls={4}/>
    </div>
  );
}

export default App;
