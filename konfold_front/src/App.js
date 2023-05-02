import Login from "./pages/Home"
import React, { Component } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AFoutput from "./AFoutput";
import Navbar from "./pages/NavBar";
import About from "./pages/About";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Refer from "./pages/Refer";
import HowAlpha from "./pages/HowAlpha";
import HowRoseta from "./pages/HowRoseta";
import Prediction from "./pages/Prediction";


function App() {
  //console.log(window.location.pathname)
  return (
    
    <BrowserRouter>
      <div >
      <Navbar/>
        <Routes>
        
          <Route path="/" element={ <Home/> } />
          <Route path="/proteinInput/*" element={ <AFoutput/> } />
          <Route path="/Search/*" element={  <Search/> } />
          <Route path="/About/*" element={  <About/> } />
          <Route path="/Refer/*" element={  <Refer/> } />
          <Route path="/Refer/Prediction/*" element ={ <Prediction/>} />
          <Route path="/Refer/HowAlpha/*" element ={ <HowAlpha/>} />
          <Route path="/Refer/HowRoseta/*" element ={ <HowRoseta/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;