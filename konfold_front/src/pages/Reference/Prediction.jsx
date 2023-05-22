import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NavBar_Prediction from './NavBar_Prediction.js';

export default function Prediction() {
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
      {/* prediction 안에 메뉴 */}
      <NavBar_Prediction/>

        {/* 정식 본문 시작 */}
      <h1 className="refer-title">
        단백질 구조 예측 AI
      </h1>
      <h1 className="title-N1">
        1. 단백질 구조 예측 AI의 의의
      </h1>
      <h1 className="title-N1">
        1-1. 단백질
      </h1>
      <h1 className="english-protein-explaination">
      <Span /><Span />
      Proteins are large biomolecules and macromolecules that comprise one or more long chains of amino acid residues.(Wikipedia “Protein”)
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      단백질은 아미노산으로 구성된 생체 고분자로서, 펩타이드 결합에 의해 길게 연결된 폴리펩타이드(polypeptide) 사슬을 말한다.
      </h1>
      
      
      <Wrap >
      <div>
        <img className="peptide_img" alt="role" src="/img/peptide_bond.jpeg" />
      </div>
      <div>
        <img className="amino_img" alt="role" src="/img/amino_acid_residue.png" />
      </div>
      </Wrap>
      <br />
      <Wrap>
      <hi className="img_title">
          그림 1 펩타이드 결합  
          
        </hi>
        <Span /><Span />
        <hi className="img_title">
        
            그림 2 amino acid residue
        </hi>
        </Wrap>
        <h1 className="protein_kind">
        <Span /><Span />
        단백질은 생명체의 몸을 구성하는 기본물질이자 세포 차원에서 이루어지는 거의 모든 생명 활동에 관여하는 매개체이다. 사람의 유전자는 생명 활동의 명령을 내리고 그것의 수행자로서 단백질을 만들어낸다. 따라서 인체 내엔 생화학 반응을 조절, 매개하는 효소단백질, 성장 및 생체 대사를 촉진하는 호르몬 단백질, 면역 조절 및 반응을 매개하는 면역단백질, 암 발병을 억제하는 암억제인자, 항체 단백질 등 다양한 종류와 기능을 가진 단백질들이 있다. 
        </h1>
        <h1 className="title-N1">
        1-2. 단백질 구조 예측
        </h1>
        <h1 className="korean-protein-expaination">
      <Span /><Span />
      단백질은 각각의 기능에 알맞은 다양한 3차원 구조를 가지고 있으며, 단백질의 아미노산 서열이 이를 결정한다. 아미노산의 유형(type)과 수(number)에 따라 사슬이 비틀리고 구부러지며 열역학적으로 가장 안정한 구조(high Energy-efficiency)를 이루게 되며 때때로 규칙에서 벗어난 단백질 구조가 존재하기도 한다. 즉, 인체는 20가지의 아미노산으로 수만~수십억가지의 다양한 단백질을 만들 수 있다.
      </h1>
      <div>
        <img className="process_img" alt="role" src="/img/protein_process.png" />
      </div>
      <Wrap>
      <h1 className="img_title">
        그림 3 단백질의 형성과정
      </h1>
      </Wrap>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      단백질 구조에 이상이 생기면 질병이 발생한다. 이러한 사실은 ‘신약 개발 및 질병치료’에 있어 단백질의 구조를 규명하는 것이 큰 의의를 가지고 있음을 내포한다. 따라서 지금까지 여러 국가와 기업에서 단백질의 구조를 밝히는 실험과 연구에 막대한 비용과 시간이 투자되어왔다.
일반적으로 단백질 구조, 즉 단백질 접힘을 예측하는 방법은 엑스선 결정학(x-ray crystallography)이나 극저온 현미경(cryo-EM, 원자수준의 정밀관찰이 가능한 현미경)을 활용한다. 그러나 이 방법은 비용과 시간(수개월~수년)이 많이 소요되며 성공확률도 매우 희박하다. 따라서 딥 러닝 알고리즘 (Deep Learning algorism)을 이용한 단백질 구조 예측 AI인 AlphaFold와 RosettaFold가 개발되었으며 실질적 사용을 위한 연구가 지속되고 있다.
      </h1>
      
    </div>
    
    
  );
}