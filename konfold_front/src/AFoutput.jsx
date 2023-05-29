import React, { useState } from "react";
import { useEffect } from "react";
import * as $3Dmol from '3dmol/build/3Dmol.js';
import $ from 'jquery';
import Search from "./pages/Search";


export default function AFoutput()  {
  
  useEffect(() => {
    // fetch("/api/Input")
    //     .then(res=> res.json())
    //     .then(res => {
    //       console.log(res);
    //       setId(res);
    //     });
 
    const script = document.createElement("script");
    script.src = "https://3Dmol.org/build/3Dmol-min.js";
    script.async = true;
    document.body.appendChild(script);
  },[]);

  // 시각화
  $(function() {
    let element = $('#id');
    let config = { backgroundColor: 'orange' };
    let viewer = $3Dmol.createViewer( element, config );
    let getId = "pdb:" + "1A00";

    $3Dmol.download(getId, viewer, {}, function() {
      viewer.setStyle({'model': -1}, {"cartoon": {'color': 'spectrum'}})
      viewer.zoomTo();
      viewer.render();
      viewer.zoom(0.8, 2000);
  })


    
  });
      

  return (
    <div>
      
  <div id="id" className="mol-container"></div>
  </div>
  );


  }