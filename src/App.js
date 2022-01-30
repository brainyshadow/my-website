import './App.css';
import Home from './pages/Home';

import React from 'react'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return ( 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home"/>} />
          <Route path="home" element={<Home/>} />

        </Routes>
      </BrowserRouter >
  );
}

export default App;
