import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NavBar_Prediction from '/Users/hayungyoo/konfold/konfold_front/src/pages/NavBar_Prediction.js';


export default function Pred_ability() {
    const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    background: #f7f7f7 ;
    max-width: 80%;
    margin: 0 auto;
    `;
    function Span({ space = 20 }){
	return (
    	<span style={{ paddingRight: space }}></span>
    );
}

    return (
        <div className="prediction_page">
            <NavBar_Prediction/>
            
            <div className="firstImg">
      <img className="AboutImg" alt="role" src="/img/role.png" />
    </div>
        </div>
    )
}