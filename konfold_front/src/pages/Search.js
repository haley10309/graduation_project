import React from "react";
import axios from 'axios'  ;
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";


export default function Search(){
  
  
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinSearchID, setProteinSearchID] = useState("") // 저장 후 변수
  

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    
  const url = "/api/Input";
  const config = {"Content-Type": 'application/json'};
  



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
  
  
<<<<<<< HEAD
   const Perform = async (event) => {
    //새로고침 막음
    // 확인 후 다음 페이지
    event.preventDefault();
    setProteinName(protein);
    let data = {
      'proteinName' : proteinName
  };
  const [yep, setYep] = useState("");
  setYep("얍");
   

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
  
   
     try {
      const response = await fetch('http://localhost:5000/api/Input',{
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
    console.log('result is: ', JSON.stringify(result, null, 4));

     } catch(e) {
      console.log("가져오기 실패");
     }
    
=======
>>>>>>> f3bad72c5c76049bb1b34b84bfc1aca8830b11e2




<<<<<<< HEAD
    
    // axios.post(url, data, config)
    // .then(res => {
    //   console.log("포스트 완료");
    // } ).catch(err => {
    //   console.log("포스트 안됨");
    // });
    
     
     
    
    //console.log(protein);

    
    //api post
      
    localStorage.setItem("얍이름", yep);
    //localstorage 업로드
=======

    
    //api post

    // prediction request
const post = (seq) => {
  //Promise로 fetch를 감싼다
  return new Promise((resolve, reject) => {
    fetch("/api/Input", {
            method : "POST",  //메소드 지정
            headers : {       //데이터 타입 지정
                "Content-Type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({proteinName:seq}) //데이터 JSON문자열화 후 body에 저장
        })
        .then(res=>{  //리턴값이 있으면 리턴값에 맞는 req지정
            console.log("search_fetch_check:",res)
            return res.json();
        })
        .then(res=> { //리턴값에 대한 처리
            console.log("server_return_fetch:",res);
            //res 값에 따른 결과 처리       
            if(res == null){
              console.log("데이터 가져오기 실패");
            }
            setProteinSearchID(res);
            resolve(res);
           
            // localStorage.setItem('pdb_protein', res);
            //console.log(pdb_predict);
        });
    });
>>>>>>> f3bad72c5c76049bb1b34b84bfc1aca8830b11e2
  };

  // button 클릭
  const confirm = async (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();
    // output저장
   await post(protein);
   console.log("proteinSearchID_test: ", proteinSearchID);
   console.log("proteinSeq_test: ", protein);

   localStorage.setItem("proteinId", proteinSearchID['proteinId']);
   localStorage.setItem("proteinSeq", protein);
   window.location.href = "/proteinInput";

   

  };
  






      
    // localStorage.setItem("searchProteinId", protein);
    //localstorage 업로드
  

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
        onClick={confirm} 
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
