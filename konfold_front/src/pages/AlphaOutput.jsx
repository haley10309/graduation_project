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

  let blobURL = "";
  let pdbdata = "";
  let input_seq = "";


  const getDataLocalStorage = (name) => {
    var localData = localStorage.getItem(name);
    return localData;
  }

  const pdbdownload = () => {
    const file = document.createElement('a');
    const pdbblob = new Blob([pdbdata], {
      type: "chemical/x-pdb",
    });
    console.log(pdbblob)
    if (pdbblob) {
      file.href = URL.createObjectURL(pdbblob)
      //file.download = `${input_seq}.pdb`
      file.download = "predictresult.pdb"
      document.body.appendChild(file); //FireFox
      file.click();
      file.remove();
      //blobURL = URL.createObjectURL(pdbblob)
      //window.location.href = blobURL;
    }
  };


  if (localStorage.getItem('pdbData')) {
    pdbdata = getDataLocalStorage('pdbData');
    console.log(pdbdata);
    input_seq = getDataLocalStorage("input_seq");
    console.log(input_seq);
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
  
  });
  
  return (
    <div className="page">
      <div className="container">
      <div id="container-predict" className="mol-container"></div>
      <div>
      <button 
        onClick={pdbdownload}
        className = "download_PDB">
          Download PDB File
      </button>
      </div>

      <h1 className="korean-protein-expaination">{input_seq}</h1>
      </div>
    </div>
  );
}