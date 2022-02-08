import './App.css';
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Todos from './components/todos/Todos';


function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar/>

          <Routes>
            <Route path="/" element={<Todos/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup/" element={<Signup/>} />
            {/* <Route path="*" element={<ErrorPage/>} /> */}
          </Routes>

      </Router>

    </div>
  );
}

export default App;
