import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";





export default function Search(){
  
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinName, setProteinName] = useState(""); // 저장 후 변수
  const [Id, setId] = useState([]);

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    
    

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
  
  
   const confirm = async (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();
    setProteinName(protein);
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> f18f8f95587abae747ac7748abed4e21a12d88da
>>>>>>> c51d062e (새로 커밋)
    

    //window.location.href = "/proteinInput";

    // const result = await axios.get('http://127.0.0.1:5000/api/Input');
    // this.recordCount = result.headers["x-totalrecordcount"];

    // axios.get('http://127.0.0.1:5000/api/Input',
    //   {params: { "proteinName" : protein }
    // }).then(function (response) {
    //   console.log(protein);
    //  }).catch(function (error){
    //   console.log(error);
    //  })


     
<<<<<<< HEAD
=======
<<<<<<< HEAD
         await axios.post('/api/Input',{//input 을 서버에 전달하는 코드
          proteinName: protein
        }).then(function(response){
          console.log("포스트 완료");

=======
>>>>>>> c51d062e (새로 커밋)
         await axios.post('/api/Input',{
          proteinName: protein
        }).then(function(response){
          console.log("포스트 완료");
<<<<<<< HEAD
=======
>>>>>>> f18f8f95587abae747ac7748abed4e21a12d88da
>>>>>>> c51d062e (새로 커밋)
        }).catch(function (error){
          console.log(error);
        })
     
<<<<<<< HEAD
         fetch("/api/Input", {
=======
<<<<<<< HEAD
         fetch("/api/Input", {//output 받는 코드
=======
         fetch("/api/Input", {
>>>>>>> f18f8f95587abae747ac7748abed4e21a12d88da
>>>>>>> c51d062e (새로 커밋)
          method : "POST",
          headers : {
            "Content-Type" : "application/json; charset=utf-8"
          }
        }).then(res=> {
          console.log(res+"res 데이터 그대로")
          let hand = JSON.stringify(res);
          console.log( hand + "얍1");
          //json 파싱전 , 상태 코드 확인 해서 res 값 초기화
        }).then(res=> {
          let hand = JSON.stringify(res);
          console.log( hand + "얍2");
          console.log(res + "얍3");
          setId(res);
          //res 값에 따른 결과 처리
          if(res == null){
            console.log("가공 데이터 가져오기 실패");
          }
        })

        window.location.href = "/proteinInput";
    
    //console.log(protein);

    
    //api post
      
    localStorage.setItem('proteinName', protein);
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
