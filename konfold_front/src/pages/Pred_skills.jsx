import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import NavBar_Prediction from '/Users/hayungyoo/konfold/konfold_front/src/pages/NavBar_Prediction.js';


export default function Pred_skills() {
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
        <h1 className="refer-title">
        단백질 구조 예측 AI
        </h1>
        <h1 className="title-N1">
        3. 주요 기술
      </h1>
      <h1 className="title-N1">
      CNN(합성곱 신경망, Convolutional Neural Networks, ConvNet)
      </h1>

      <h1 className="korean-protein-expaination">
      <Span /><Span />
      Image를 분류하기 위해 1989년 Yann LeCun의 논문에서 고안된 알고리즘으로 Fully Connected Layer만으로 구성된 신경망의 한계를 보완한다. Image는 수많은 픽셀로 이루어져 있는 Matrix이며 픽셀은 0~255 사이의 숫자로 표현된다. 이러한 matrix를 일자로 쭉 펼쳐 실수로 구성된 vector를 input으로 하여 딥러닝 모델을 만들 수 있다.
       </h1>
       <div>
        <img className="process_img" alt="role" src="/img/cnnLayer.png" />
      </div>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      하지만 이 경우 하나의 픽셀에 해당하는 feature의 수가 많아지며, hidden node의 layer가 많아질수록 학습될 파라미터가 몇배로 늘어나게 된다. 결국 모델의 사이즈가 커져 학습시간의 효율성이 떨어진다. 또한 matrix를 vector로 변환하는 과정에서 이미지의 공간정보가 유실된다. 따라서 기하학적 특징(topology)를 학습하지 않게 되며 다양한 변형이 존재하는 이미지의 학습을 위해서는 충분히 많은 데이터가 필요해진다. CNN은 이를 보완하여 Classification(분류)단계 이전에 feature extraction(특징추출) 단계를 각 레이어의 입출력 데이터의 형상, 즉 2D 공간 정보를 유지한 채 이미지를 학습하는 모델이다.
       </h1>
       <div>
        <img className="process_img" alt="role" src="/img/featureExtraction.png" />
      </div>

      <h1 className="title-N1">
      1. Convolution Layer
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      이미지의 특징을 추출(feature extraction)하는 layer로, 합성곱 연산을 사용한다.
       </h1>
       <div>
        <img className="process_img" alt="role" src="/img/convolutionLayer.png" />
      </div>

      <h1 className="title-N1">
      2. Pooling Layer
      </h1>
      <h1 className="korean-protein-expaination">
      <Span /><Span />
      이미지 matrix의 크기를 줄이면서 주요 feature를 강조하는 layer이다. 학습 데이터의 크기를 줄이면서 학습 데이터가 이미지의 특징을 충분히 반영할 수 있도록 한다. 대부분의 CNN에서는 최댓값을 선택하는 Max Pooling을 사용한다. 인간이 이미지를 볼 때, 시신경에 들어온 신호 중 강한 신호만 살아남고 나머지는 무시한다는 사실을 반영한 것이다.
       </h1>
       <div>
        <img className="process_img" alt="role" src="/img/poolingLayer.png" />
      </div>





    </div>
)
}