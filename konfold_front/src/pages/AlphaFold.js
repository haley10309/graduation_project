import React from "react";
import axios from "axios";
import { useState } from "react";

export default function AlphaFold(){
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [proteinName, setProteinName] = useState("") // 저장 후 변수
  const [pdb_predict, setPDBPredict] = useState(null) // response 변수

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    
    

 // 알맞은 시퀀스 입력시 Button 켜짐
 function changeButton(){
  const UpperProtein = protein.toUpperCase();
 
 // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
  // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
  (UpperProtein.includes("B") || UpperProtein.includes("J") || UpperProtein.includes("O") || UpperProtein.includes("X") || UpperProtein.includes("Z") || UpperProtein.includes(" ") || (!isAlpha(UpperProtein))) ? setButton(true) : setButton(false)

}

// 입력된 변수 저장
const handleInput = (event) => {
  event.preventDefault();
  setProtein(event.target.value); //변수 저장 완료
  // const UpperProtein = protein.toUpperCase();
  // UpperProtein.includes('G' ||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
};
  
  
// prediction request
const post = (seq) => {
  //Promise로 fetch를 감싼다
  return new Promise((resolve, reject) => {
    fetch("/konfold/alphafold2", {
            method : "POST",  //메소드 지정
            headers : {       //데이터 타입 지정
                "Content-Type":"application/json; charset=utf-8"
            },
            body: JSON.stringify({proteinName:seq}) //데이터 JSON문자열화 후 body에 저장
        })
        .then(res=>{  //리턴값이 있으면 리턴값에 맞는 req지정
            console.log("fetchtest1:",res)
            const blob = res.blob();
            return blob
        })
        .then(blob=> { //리턴값에 대한 처리
            console.log("fetchtest2:",blob);
            //res 값에 따른 결과 처리       
            if(blob == null){
              console.log("데이터 가져오기 실패");
            }
            resolve(URL.createObjectURL(blob));
            //localStorage.setItem('pdb_protein', res);
            //console.log(pdb_predict);
        });
    });
  };

  // button 클릭
  const confirm = async (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();
    // 확인 된 input저장
    setProteinName(protein);

    // output저장
    setPDBPredict(await post(proteinName));
    console.log("result_test:", pdb_predict);

    // 시각화 창
    //window.location.href = "/AlphaOutput";
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
        알파폴드 체험 화면입니다
      </div>
    </div>
  );
}
