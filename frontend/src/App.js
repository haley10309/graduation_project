import Login from "./pages/Home"
import React, { Component } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AFoutput from "./AFoutput";
import NavBar from "./NavBar";
import About from "./pages/About";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Refer from "./pages/Refer";


function App() {
  console.log(window.location.pathname)
  return (
    
    <BrowserRouter>
      <div >
      <NavBar/>
        <Routes>
        
          <Route path="/" element={ <Home/> } />
          <Route path="/proteinInput/*" element={ <AFoutput/> } />
          <Route path="/Search/*" element={  <Search/> } />
          <Route path="/About/*" element={  <About/> } />
          <Route path="/Refer/*" element={  <Refer/> } />
        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;