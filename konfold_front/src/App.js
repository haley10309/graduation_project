import React, { Component } from 'react';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import AFoutput from "./AFoutput";
import Navbar from "./pages/NavBar";
import About from "./pages/About";
import Search from "./pages/Search";
import Home from "./pages/Home";
import HowAlpha from "./pages/Reference/HowAlpha";
import HowRoseta from "./pages/Reference/HowRoseta";
import Prediction from "./pages/Reference/Prediction";
import Pred_mech from "./pages/Reference/Pred_mech";
import Pred_skills from "./pages/Reference/Pred_skills";
import Pred_ability from "./pages/Reference/Pred_ability.jsx";
import AlphaFold from "./pages/AlphaFold";
import AlphaOutput from "./pages/AlphaOutput";

// "proxy": "http://172.31.15.171:5000",
//"proxy": "http://192.168.219.103:5000"

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
          <Route path="/AlphaFold/*" element={  <AlphaFold/> } />
          <Route path="/AlphaOutput/*" element={  <AlphaOutput/> } />
          <Route path="/About/*" element={  <About/> } />
          <Route path="/Refer/Prediction/*" element ={ <Prediction/>} />
          <Route path="/Refer/Prediction/mechanism/*" element ={ <Pred_mech/>} />
          <Route path="/Refer/Prediction/ability/*" element ={ <Pred_ability/>} />
          <Route path="/Refer/Prediction/skills/*" element ={ <Pred_skills/>} />
          <Route path="/Refer/HowAlpha/*" element ={ <HowAlpha/>} />
          <Route path="/Refer/HowRoseta/*" element ={ <HowRoseta/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );  
}

export default App;