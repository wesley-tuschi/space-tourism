import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination" element={<Destination />} />
      </Routes>
    </Router>
  );
}

export default App;
