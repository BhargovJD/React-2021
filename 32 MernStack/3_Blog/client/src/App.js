import Login from "./components/Login";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import SinglePost from "./components/SinglePost";
import Topbar from "./components/Topbar";
import Upload from "./components/Upload";
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'
import { Context,useContext } from './context/Context';

import {useSelector} from 'react-redux'



function App() {
  const user = useSelector((state)=>state.user.value);

  const loggedin = {user}
  return (
    <div className="App">
      <Router>
      <Topbar/>
      {/* <SinglePost/> */}
      {/* <Upload/> */}
      {/* <Settings/> */}
      {/* <Login/> */}
      {/* <Signup/> */}

      <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/post-detail/:id" element={<SinglePost/>} />
            <Route path="/login" element={loggedin?<Main/>:<Login/>} />

            <Route path="/signup" element={<Signup/>} />

            <Route path="/settings" element={<Settings/>} />
            {/* <Route path="*" element={<ErrorPage/>} /> */}
          </Routes>


      </Router>
    </div>
  );
}

export default App;
