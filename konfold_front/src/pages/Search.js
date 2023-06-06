import React from "react";
import axios from 'axios'  ;
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


export default function Search(){
  
  
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinSearchID, setProteinSearchID] = useState("") // 저장 후 변수
  

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    
  const url = "/api/Input";
  const config = {"Content-Type": 'application/json'};

  const [loading, setLoading] = useState(false);

  //로딩 화면
  

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
  };

  // button 클릭
  const confirm = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    
    try {
      const searchResult = await post(protein);
      
      console.log("proteinSearchID_test:", searchResult);
      localStorage.setItem("proteinId", searchResult['proteinId']);
      localStorage.setItem("proteinSeq", protein);
      
      setLoading(false);
      window.location.href = "/proteinInput";
    } catch (error) {
      console.log("데이터 가져오기 실패:", error);
      setLoading(false);
    }
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
