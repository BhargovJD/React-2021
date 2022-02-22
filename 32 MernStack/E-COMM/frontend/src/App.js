// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import PageNotFound from "./components/PageNotFound";
import Cart from "./components/Cart";
import Login from "./components/Login";
import SIgnup from "./components/SIgnup";
import Profile from "./components/Profile";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const loginReducer = useSelector((state) => state.loginReducer);
  const { loading, error, userInfo } = loginReducer;
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SIgnup />} />
          <Route path="/profile" element={userInfo ? <Profile /> : <Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
