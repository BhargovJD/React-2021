import './App.css';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';


function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>
      {/* TinderCards */}
      <TinderCards/>
      {/* Buttons */}

      {/*Swipe Buttons */}
      <SwipeButton/>

    </div>
  );
}

export default App;
