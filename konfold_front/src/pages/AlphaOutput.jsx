import React, { useState } from "react";
import * as $3Dmol from '3dmol/build/3Dmol.js';
import $ from 'jquery';
import styled from 'styled-components';

export default function AlphaOutput() {
  //css 할 변수
  const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    background: #f7f7f7 ;
    max-width: 80%;
    margin: 0 auto;
    `;
  function Span({ space = 20 }){
    return (
      <span style={{ paddingRight: space }}></span>
      );
  }
//css 끝
  
  let blob = "";
  var url = "";
  let pdbdata = "";

  const getDataLocalStorage = (name) => {
    var localData = localStorage.getItem(name);
    return localData;
  }

  const pdbdownload = () => {
    //const pdbblob = pdbdata.blob();
    // if (pdbblob) {
    //   window.location.href = pdbblob;
    // }
  };


  if (localStorage.getItem('pdbData')) {
    pdbdata = getDataLocalStorage('pdbData');
    console.log(pdbdata);
  }

  // 시각화
  $(function() {
    let element = $('#container-predict');
    let config = { backgroundColor: 'white' };
    let viewer = $3Dmol.createViewer( element, config );

    viewer.addModel( pdbdata, "pdb" );                       /* load data */
    viewer.setStyle({'model': -1}, {cartoon: {color: 'spectrum'}});  /* style all atoms */
    viewer.zoomTo();                                      /* set camera */
    viewer.render();                                      /* render scene */
    viewer.zoom(0.8, 1000);                               /* slight zoom */
  
   // 시각화
  //  $(function() {
  //   let element = $('#container-predict');
  //   let config = { backgroundColor: 'orange' };
  //   let viewer = $3Dmol.createViewer( element, config );
  //   let getId = "pdb:" + "1A00";

  //   $3Dmol.download(getId, viewer, {}, function() {
  //     viewer.setStyle({'model': -1}, {"cartoon": {'color': 'spectrum'}})
  //     viewer.zoomTo();
  //     viewer.render();
  //     viewer.zoom(0.8, 2000);
  //   })
  });
  
  return (
    <div>
      <select className="visualization">
        <option value="3dmolAPI" selected>프로틴 시퀀스 화면</option>
      </select>
      <div id="container-predict" className="mol-container"></div>
      <div>
      <button 
        onClick={pdbdownload}
        className = "download_PDB">
          Download PDB File
      </button>
      </div>
      <h1 className="">
      </h1>
    </div>
  );
}