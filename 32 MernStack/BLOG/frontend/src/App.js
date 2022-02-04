import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import DetailView from './components/DetailView';
import CreatePost from './components/CreatePost';
import Edit from './components/Edit';

function App() {
  return (
    <div>
      <Router>

        <Navbar/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<CreatePost/>} />
            <Route path="/blog-detail/:id" element={<DetailView/>} />
            <Route path="/edit/:id" element={<Edit/>} />
          </Routes>

     </Router>
    </div>
  );
}

export default App;
