import React from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";

export default function Search(){
    
    const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]

  const handleInput = (event) => {
    setProtein(event.target.value); //변수 저장 완료
  };

  const confirm = (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();

    window.location.href = "/proteinInput";
    console.log(protein);

    axios
      .post("/api/proteinInput", {
        protein,
      })
      .then((res) => console.log("posting data", res.data))
      .catch((error) => {
        console.log("음..error occurred: ", error.response);
      });
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
          />

          {/* place holder 넣어 보기 */}
        </div>

        <div className="errorMessageWrap">올바른 시퀀스를 입력해 주세요</div>
      </div>
      <div>
        <button disabled={false} onClick={confirm} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}
