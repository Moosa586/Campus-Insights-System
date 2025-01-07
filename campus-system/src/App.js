import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

import Login from "./pages/Login/Login";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Registration/Register";
// import About from "./pages/About/About";
// import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App ">
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
