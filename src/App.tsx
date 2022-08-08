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
        <div className="contain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>

        <h1>Hello World!!!</h1>
        <h3>(from Khoa Le)</h3>
      </BrowserRouter>
    </div>
  );
}

export default App;
