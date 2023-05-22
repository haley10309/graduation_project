import React, { useState } from 'react';

const NavBar_Prediction = () => {
    function Span({ space = 20 }){
        return (
            <span style={{ paddingRight: space }}></span>
        );
    }
    return (

        <nav className="prediction_nav">
            <Span></Span>
           <li>
            <a href="/Refer/Prediction/*" className="pred_menu">
                1. 단백질 구조 예측 AI의 의의
            </a>
          </li>

          <li>
            <a href="/Refer/Prediction/mechanism/*" className="pred_menu">
                2. 단백질 구조 예측 AI 메커니즘
            </a>
          </li>

          <li>
            <a href="/Refer/Prediction/skills/*" className="pred_menu">
                3. 주요 기술
            </a>
          </li>

          <li>
            <a href="/Refer/Prediction/ability/*" className="pred_menu">
                4. 성능확인
            </a>
          </li>
          <Span></Span>
        </nav>
    )
}
export default NavBar_Prediction;