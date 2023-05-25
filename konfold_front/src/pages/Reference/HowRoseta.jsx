import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function HowRoseta() {
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
      
      <h1 className="refer-title">
        사용법
        </h1>
        <h1 className="title-N1">
       2. RoseTTAFold
      </h1>
      <h1 className="title-N1">
        (1) RoseTTAFold(.git) cloning
      </h1>
      <h1 className="korean-protein-expaination">
      git(프로그래밍 코드 버전 관리 프로그램) 설치	
       </h1>
       <div className="code_page">
       $ which git		//git 설치여부 확인
        <Span></Span>
        $ sudo apt install git	//git 설치
       </div>
       
       <h1 className="korean-protein-expaination">
       AlphaFold 클로닝
       </h1>
       <div className="code_page">
       $ mkdir /[filename]
       <Span></Span>
       $ cd /[filename]		//RoseTTAFold.git를 저장하고자 하는 폴더에 접속
       <Span></Span>
       $ git clone https://github.com/RosettaCommons/RoseTTAFold.git
       </div>
       <h1 className="title-N1">
        (2) Conda environment
      </h1>
      <h1 className="korean-protein-expaination">
      miniconda 설치
       </h1>
       <div className="code_page">
       $ wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh	
       <Span></Span>$ sh Miniconda3-latest-Linux-x86_64.sh
       </div>

       <h1 className="korean-protein-expaination">
       가상 환경 설정
       </h1>
       <div className="code_page">
       // RoseTTAFold
       <Span></Span>$ conda env create -f RoseTTAFold-linux.yml	// 가상환경 구축
       <Span></Span>$ conda activate RoseTTAFold	//가상환경 활성화
       <Span></Span>(RoseTTAFold) $ conda deactivate	//가상환경 비활성화

       <Span></Span>// folding
       <Span></Span>$ conda env create -f folding-linux.yml
       <Span></Span>$ conda activate folding
       <Span></Span>(folding) $ conda deactivate
       </div>
       <h1 className="title-N1">
        (3) Database & Tool
      </h1>
      <h1 className="korean-protein-expaination">
      RoseTTAFold가 클로닝 된 폴더로 접속
       </h1>
       <div className="code_page">
       $ cd /[filename]/RoseTTAFold
       </div>
       <h1 className="korean-protein-expaination">
       database를 다운로드
       </h1>
       <div className="code_page">
       // Uniref30
       <Span></Span>$ wget http://wwwuser.gwdg.de/~compbiol/uniclust/2020_06/UniRef30_2020_06_hhsuite.tar.gz
       <Span></Span>$ mkdir -p UniRef30_2020_06
       <Span></Span>$ tar xfz UniRef30_2020_06_hhsuite.tar.gz -C ./UniRef30_2020_06

       <Span></Span>// BFD
       <Span></Span>$ wget https://bfd.mmseqs.com/bfd_metaclust_clu_complete_id30_c90_final_seq.sorted_opt.tar.gz
       <Span></Span>$ mkdir -p bfd
       <Span></Span>$ tar xfz bfd_metaclust_clu_complete_id30_c90_final_seq.sorted_opt.tar.gz -C ./bfd

       <Span></Span>// structure templates
       <Span></Span>$ wget https://files.ipd.uw.edu/pub/RoseTTAFold/pdb100_2021Mar03.tar.gz
       <Span></Span>$ tar xfz pdb100_2021Mar03.tar.gz
       </div>

       <h1 className="korean-protein-expaination">
       신경망 가중치 도구 다운로드
       </h1>
       <div className="code_page">
       $ wget https://files.ipd.uw.edu/pub/RoseTTAFold/weights.tar.gz
       <Span></Span>$ tar xfz weights.tar.gz
       </div>

       <h1 className="korean-protein-expaination">
       Third-party 도구 다운로드
       </h1>
       <div className="code_page">
       $ ./install_dependencies
       </div>


       <h1 className="title-N1">
        (4) PyRosetta
      </h1>

       <h1 className="korean-protein-expaination">
       라이선스 획득(https://els2.comotion.uw.edu/product/pyrosetta)
       </h1>
       <h1 className="korean-protein-expaination">
       사용자가 대학에 재학 또는 재직하는 것으로 가정하고 academic license를 받아 설치
       </h1>
       <h1 className="korean-protein-expaination">
       파이로제타 설치 (folding 가상환경)
       </h1>
       <div className="code_page">
       $ conda activate folding
       <Span></Span>$ wget --http-user= --http-password= https://graylab.jhu.edu/download/PyRosetta4/archive/release/PyRosetta4.Release.python37.ubuntu/PyRosetta4.Release.python37.ubuntu.release-314.tar.bz2
       <Span></Span>$ tar vjxf PyRosetta4.Release.python37.ubuntu.release-314.tar.bz2
       <Span></Span>$ cd PyRosetta4.Release.python37.ubuntu.release-314/
       <Span></Span>$ cd setup && sudo /home//miniconda3/envs/folding/bin/python3 setup.py install
       </div>
       
       <h1 className="title-N1">
        (5) RoseTTAfold 실행
      </h1>
      <div className="code_page">
      $ cd /[filename]/RoseTTAFold		// RoseTTAFold가 클로닝 된 폴더로 접속
      <Span></Span>$ mkdir /[filename]/RoseTTAFold/input	// input파일이 저장될 폴더 생성

      <Span></Span>$ cd input
      <Span></Span>$ ../run_pyrosetta_ver.sh [INPUT.fasta] .
      <Span></Span>$ nohup ../run_pyrosetta_ver.sh input.fa . 2 여기&1 &	// 백그라운드 실행
      <Span></Span>
      </div>


      <h1 className="korean-protein-expaination">
      <Span></Span>*여기* 는 곧 태그 오른쪽 키를 의미함
        </h1>

        <h1 className="title-N1">
        참고
      </h1>

        <h1 className="korean-protein-expaination">
        “RoseTTAFold open-source code”, https://github.com/RosettaCommons/RoseTTAFold
        </h1>
        <h1 className="korean-protein-expaination">
        “2021-Accurate prediction of protein structures and interactions using a three-track neural network”, https://www.science.org/doi/10.1126/science.abj8754
        </h1>
        <h1 className="korean-protein-expaination">
        “구글인력/컴퓨팅 없이 알파폴드2 재현한 로제타폴드, 어떻게 가능했나?”(Ai타임스기사),
https://www.aitimes.com/news/articleView.html?idxno=140110
        </h1>
        <h1 className="korean-protein-expaination">
        “[초심자를 위한 생물학+정보학] 로제타폴드의 설치와 사용”,
https://www.ibric.org/myboard/read.php?id=339786&Board=news&rtpath=main
        </h1>
        <h1 className="korean-protein-expaination">
        CNN
        </h1>
        <h1 className="korean-protein-expaination">
        <Span></Span>“1989-Backpropagation applied to handwritten zip code recognition”
        </h1>
        <h1 className="korean-protein-expaination">
        <Span></Span>“2003-Hierarchical Neural Networks for Image Interpretation”
        </h1>
        <h1 className="korean-protein-expaination">
        <Span></Span>“2003-Best Practices for Convolutional Neural Networks Applied to Visual Document Analysis”
        </h1>
        <h1 className="korean-protein-expaination">
        “Convolutional Neural Network(CNN)”,
https://sonsnotation.blogspot.com/2020/11/7-convolutional-neural-networkcnn.html
        </h1>
        <h1 className="korean-protein-expaination">
        “CNN 설명”,
https://rubber-tree.tistory.com/entry/%EB%94%A5%EB%9F%AC%EB%8B%9D-%EB%AA%A8%EB%8D%B8-CNN-Convolutional-Neural-Network-%EC%84%A4%EB%AA%85
        </h1>
        <h1 className="korean-protein-expaination">
        “합성곱신경망”, https://excelsior-cjh.tistory.com/79
        </h1>
        <h1 className="korean-protein-expaination">
        “CNN, Convolutional Neural Network 요약”, http://taewan.kim/post/cnn/
        </h1>
       



    </div>
  );
}