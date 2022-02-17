import "./App.css";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNote from "./screens/MyNote";
import Edit from "./screens/Edit";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-diary-note" element={<Create />} />
          <Route path="/diary-notes" element={<MyNote />} />
          <Route path="/diary-notes/:id" element={<Edit />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
