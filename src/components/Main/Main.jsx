import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "../../assets/vite.svg";
import ChristmasList from "./ChristmasList";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Staff from "./Staff";
import ChristmasCourse from "./ChristmasCourse";
import Topic from "./Topic";
import Donations from "./Donations";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/staff" element={<Staff/>} />
        <Route path="/christmaslist" element={<ChristmasList/>} />
        <Route path="/christmascourse" element={<ChristmasCourse/>} />
        <Route path="/topic" element={<Topic/>} />
        <Route path="/donations" element={<Donations/>} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
};

export default Main;
