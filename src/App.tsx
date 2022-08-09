import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="page-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
