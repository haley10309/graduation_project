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
import Pred_mech from "./pages/Pred_mech";
import Pred_skills from "./pages/Pred_skills";
import Pred_ability from "./pages/Pred_ability";


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