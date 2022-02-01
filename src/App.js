import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Resume from "./pages/Resume"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route
          path="resume"
          element={
           <Resume/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
