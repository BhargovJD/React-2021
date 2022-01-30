import './App.css';
import { useCallback, useState } from 'react';
import Users from './pages/Users';
import {BrowserRouter as Router, Routes,Route }  from 'react-router-dom'
import NewPlace from './pages/NewPlace';
import Navigation from './components/Navigation';
import UserPlace from './pages/UserPlace';
import UpdatePlace from './pages/UpdatePlace';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthContext } from './context/authContext';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  },[]);

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  },[]);


  return (
    <div className="App">
      <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:login,logout:logout}}>
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Users/>}  />
          <Route path="/places/new" element={<NewPlace/>}  />
          <Route path="/:userId/places" element={<UserPlace/>}  />
          <Route path="/places/:placeId" element={<UpdatePlace/>}  />

          <Route path="/login" element={<LoginPage/>}  />

          <Route path="/signup" element={<SignupPage/>}  />

          {/* <Route path="/logout" element={<SignupPage/>}  /> */}

        </Routes>
      </Router>

      </AuthContext.Provider>
    </div>
  );
}

export default App;
