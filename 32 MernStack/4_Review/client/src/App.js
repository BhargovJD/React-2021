import './App.css';
import Users from './pages/Users';
import {BrowserRouter as Router, Routes,Route }  from 'react-router-dom'
import NewPlace from './pages/NewPlace';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Users/>}  />
          <Route path="/places/new" element={<NewPlace/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
