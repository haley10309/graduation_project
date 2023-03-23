import React, { useState } from "react";

export default function Login() {
  const [protein, setProtein] = useState("");

  return (
    <div className="page">
      <div className="titleprotein">단백질 시퀀스를 입력해 주세요</div>

      <div className="contentWrap">
        <div className="inputTitle">단백질 시퀀스</div>
        <div className="inputWrap">
          <input
            className="input"
            value={protein} //input으로 받은 프로틴 시퀀스
            onChange={(e) => setProtein(e.target.value)}
          />
          {/* place holder 넣어 보기 */}
        </div>

        <div className="errorMessageWrap">올바른 시퀀스를 입력해 주세요</div>
      </div>
      <div>
        <button disabled={true} className="bottomButton">
          확인
        </button>
      </div>
    </div>
  );
}
