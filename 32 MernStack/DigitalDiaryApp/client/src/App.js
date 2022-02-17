import "./App.css";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNote from "./screens/MyNote";
import Edit from "./screens/Edit";
import Create from "./components/Create";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search)

  return (
    <div className="App">
      <Router>
        <Header setSearch={setSearch} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-diary-note" element={<Create />} />
          <Route path="/diary-notes" element={<MyNote search={search} />} />
          <Route path="/diary-notes/:id" element={<Edit />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
