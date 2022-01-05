import './App.css';
import ProfilePage from './components/ProfilePage';
import HomePage from './components/HomePage';
import Setting from './components/Setting';
import Login from './components/Login';
import {useSelector} from 'react-redux'
import ThemeControl from './components/ThemeControl';

function App() {

  const themeColor = useSelector((state)=>state.theme.value);

  return (
    <div style={{backgroundColor: themeColor.backgroundColor, color:themeColor.textColor}}  className="App">
      <HomePage/>
      <hr></hr>
      <ProfilePage/>
      <hr></hr>
      <Setting/>
      <hr></hr>
      <Login/>
      <br></br>
      <ThemeControl/>
      <br></br>
    </div>
  );
}

export default App;
