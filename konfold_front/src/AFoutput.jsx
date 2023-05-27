import React, { useState } from "react";
import { useEffect } from "react";
import * as $3Dmol from '3dmol/build/3Dmol.js';
import $ from 'jquery';

export default function AFoutput() {

  const [Id, setId] = useState([]);

  

  useEffect(() => {
    // fetch("/api/Input")
    //     .then(res=> res.json())
    //     .then(res => {
    //       console.log(res);
    //       setId(res);
    //     });

        fetch("/api/Input", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json; charset=utf-8"
          },
          body : JSON.stringify(Id)
        })
        .then(res=> {
          console.log(res);
          //json 파싱전 , 상태 코드 확인 해서 res 값 초기화
        })
        .then(res=> {
          console.log(res);
          //res 값에 따른 결과 처리
          if(res == null){
            alert("등록 실패");
          }
        })
          


    const script = document.createElement("script");
    script.src = "https://3Dmol.org/build/3Dmol-min.js";
    script.async = true;
    document.body.appendChild(script);
  },[]);

  // 시각화
  $(function() {
    let element = $('#container-01');
    let config = { backgroundColor: 'orange' };
    let viewer = $3Dmol.createViewer( element, config );
    viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 10.0, color: 'green' });
    viewer.zoomTo();
    viewer.render();
    viewer.zoom(0.8, 2000);
  });
      

  return (
  <div id="container-01" className="mol-container"></div>
  );

  }