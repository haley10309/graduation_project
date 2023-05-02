import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function About() {
  //return <div className="WordHome">Home</div>;
  return (
    <div className="HomeImg">
      <img className="ProteinImg" src="/img/proteinImg.png" />
      <h1 className="Site-explaining">
        본 웹사이트는
        <br />
        <br />
        건국대학교 졸업 프로젝트를 위해
        <br />
        <br />
        제작되었습니다.
      </h1>
      <script>IntersectionObserver()</script>
    </div>
    // <Wrapper>
    //   <Box>
    //     <span>
    //       본 웹사이트는
    //       <br />
    //       건국대학교 졸업 프로젝트를 위해
    //       <br />
    //       제작되었습니다.
    //     </span>
    //   </Box>
    // </Wrapper>
  );
}
