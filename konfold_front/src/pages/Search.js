import React from "react";
import axios from 'axios'  ;
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";



export default function Search(){
    
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinName, setProteinName] = useState(""); // 저장 후 변수

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    
  const url = "/api/Input";
  const config = {"Content-Type": 'application/json'};


  useEffect (() =>{
    // get api Implement
    //const url = "http://localhost:5000/api/Input"
    fetch(url).then (response => response. json ()) . then (json => {
    console.log("jsonnnn", json)
    }).catch(e => {
    console.log("e", e)
  })
},[])

  function changeButton(){
    const UpperProtein = protein.toUpperCase();
   
   // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
    // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
    (UpperProtein.includes("B") || UpperProtein.includes("J") || UpperProtein.includes("O") || UpperProtein.includes("X") || UpperProtein.includes("Z") || UpperProtein.includes(" ") || (!isAlpha(UpperProtein))) ? setButton(true) : setButton(false)

   }


  const handleInput = (event) => {
    event.preventDefault();
    setProtein(event.target.value); //변수 저장 완료
    // const UpperProtein = protein.toUpperCase();
    // UpperProtein.includes('G' ||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
  };
  
  
   const Perform = async (event) => {
    //새로고침 막음
    // 확인 후 다음 페이지
    event.preventDefault();
    setProteinName(protein);
    let data = {
      'proteinName' : protein
  };

  fetch(url,{
    method:'POST',
    headers:{
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          console.log("response", data)
          if(response.state == 200){
            console.log("포스트 성공")
          }
        }).catch(e => {
          console.log("포스트 실패")
        })
  
   
    //  try {
    //   const response = await fetch('http://localhost:5000/api/Input',{
    //     method: 'POST',
    //     headers:{
    //       'Content-Type' : 'application/json',
    //       'Access-Control-Allow-Origin': '*'
    //     },
    //     body: JSON.stringify(data)
    //   });

    //   const result = await response.json();
    // console.log('result is: ', JSON.stringify(result, null, 4));

    //  } catch(e) {
    //   console.log("포스트 실패");
    //  }
    


    window.location.href = "/proteinInput";

    // axios.get('http://127.0.0.1:5000/api/Input',
    //   {params: { "proteinName" : protein }
    // }).then(function (response) {
    //   console.log(protein);
    //  }).catch(function (error){
    //   console.log(error);
    //  })


    //  axios.post('http://localhost:5000/api/Input',{
    //   proteinName: protein
    //  }).then(function(response){
    //   console.log("포스트 완료");
    //  }).catch(function (error){
    //   console.log("포스트 안됨");
    //  })
    // axios.post(url, data, config)
    // .then(res => {
    //   console.log("포스트 완료");
    // } ).catch(err => {
    //   console.log("포스트 안됨");
    // });
    
     
     
    
    //console.log(protein);

    
    //api post
      
    localStorage.setItem("proteinName", protein);
    //localstorage 업로드
  };

  return (
    <div className="page">
      <div className="titleprotein">단백질 시퀀스를 입력해 주세요</div>

      <div className="contentWrap">
        <div className="inputTitle">단백질 시퀀스</div>
        <div className="inputWrap">
          <input
            className="input"
            value={protein} //input으로 받은 프로틴 시퀀스
            onChange={handleInput}
            onKeyUp={changeButton}
            
          />

          {/* place holder 넣어 보기 */}
        </div>

        <div className="errorMessageWrap">올바른 시퀀스를 입력해 주세요</div>
      </div>
      <div>
        <button 
        disabled={button} 
        onClick={Perform} 
        className="bottomButton">
          확인
        </button>
      </div>
      <div className="inputTitle"> 
        단백질 3D 구조 시각화 화면입니다
      </div>
    </div>
  );
}
