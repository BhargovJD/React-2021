import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import { AuthContextProvider } from './context/auth-context';

function App() {
  return (
    <AuthContextProvider>
    <Router>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
