import React, { useState , Component} from "react";
import { useEffect } from "react";
import * as $3Dmol from '3dmol/build/3Dmol.js';
import $ from 'jquery';
import Search from "./pages/Search";
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";



export default function AFoutput() {
  const [Protein_input, setProtein_input] = useState("");
  const [loading, setLoading] = useState(null);
  const [ptid, setPtid] = useState("");
  const script = document.createElement("script");
  script.src = "https://3Dmol.org/build/3Dmol-min.js";
  script.async = true;
  document.body.appendChild(script);

  useEffect(() => {
    const fetchData = async () => {
      const proteinId = getDataLocalStorage("proteinId");
      console.log(proteinId);
      setPtid(proteinId);
      setLoading(false);

      let element = $('#id');
      let config = { backgroundColor: 'white' };
      let viewer = $3Dmol.createViewer(element, config);
      let getId = "pdb:" + proteinId;

      $3Dmol.download(getId, viewer, {}, function () {
        viewer.setStyle({ 'model': -1 }, { "cartoon": { 'color': 'spectrum' } });
        viewer.zoomTo();
        viewer.render();
        viewer.zoom(0.8, 2000);
      });
    };

    fetchData();
  }, []);

  const getDataLocalStorage = (name) => {
    var localData = localStorage.getItem(name);
    return localData;
  }

  return (
    <div className="page">
      <div className="container">
        <div id="id" className="mol-container"></div>
        <h1 className="korean-protein-expaination"></h1>
        <button>Download File</button>
      </div>
    </div>
  );
}
