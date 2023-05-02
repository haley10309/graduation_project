import React, { useState } from "react";

export default function AFoutput() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.nativeEvent.target.value);
  };

  const handleClick = () => {
    alert("현재 폼의 값은 ${value} 입니다");
  };

  return (
    <div>
      <select>
        <option>프로틴 시퀀스 화면</option>
      </select>
    </div>
  );
}
