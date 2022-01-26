import Login from "./components/Login";
import Main from "./components/Main";
import Settings from "./components/Settings";
import Signup from "./components/Signup";
import SinglePost from "./components/SinglePost";
import Topbar from "./components/Topbar";
import Upload from "./components/Upload";
import {BrowserRouter as Router, Routes, Route, Link, }  from 'react-router-dom'


function App() {

  const user = true
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
            <Route path="/post-detail" element={<SinglePost/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="/signup" element={user ? <Main/>:<Signup/>} />

            <Route path="/settings" element={<Settings/>} />
            {/* <Route path="*" element={<ErrorPage/>} /> */}
          </Routes>


      </Router>
    </div>
  );
}

export default App;
