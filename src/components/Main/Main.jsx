import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import ChristmasList from "./ChristmasList";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Staff from "./Staff";

const Main = () => {
  return (
    <main>
      <div>
        <h3>Feliz Navidad!</h3>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Routes>
        <Route path="/" element={<ChristmasList/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/christmaslist" element={<ChristmasList/>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
