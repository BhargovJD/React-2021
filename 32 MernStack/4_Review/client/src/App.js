import './App.css';
import Users from './pages/Users';
import {BrowserRouter as Router, Routes,Route }  from 'react-router-dom'
import NewPlace from './pages/NewPlace';
import Navigation from './components/Navigation';
import UserPlace from './pages/UserPlace';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Users/>}  />
          <Route path="/places/new" element={<NewPlace/>}  />
          <Route path="/:userId/places" element={<UserPlace/>}  />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
