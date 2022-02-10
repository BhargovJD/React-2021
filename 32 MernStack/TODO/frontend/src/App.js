import './App.css';
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Todos from './components/todos/Todos';
import EditTodo from './components/todos/EditTodo';


import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';


function App() {
  const loggedUserEmail = useSelector((state)=>state.user.value)

  return (
    <div className="App">
      <Router>

        <Navbar/>

          <Routes>
            <Route path="/" element={!loggedUserEmail.userActive?<Login/>:<Todos/>} />
            <Route path="/login" element={!loggedUserEmail.userActive?<Login/>:<Todos/>} />
            <Route path="/signup/" element={!loggedUserEmail.userActive?<Signup/>:<Todos/>}/>
            <Route path="/edit/" element={<EditTodo/>} />
            {/* <Route path="*" element={<ErrorPage/>} /> */}
          </Routes>

      </Router>

    </div>
  );
}

export default App;
