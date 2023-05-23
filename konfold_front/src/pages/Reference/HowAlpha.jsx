import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function HowAlpha() {
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
        1. AlphaFold2 (Ubuntu 22.04)
      </h1>
      <h1 className="title-N1">
        (1) AlphaFold(.git) cloning
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
       $ cd /[filename]		//AlphaFold2 git를 저장하고자 하는 폴더에 접속
       <Span></Span>
       $ git clone https://github.com/deepmind/alphafold.git

       </div>
       <h1 className="title-N1">
        (2) Database
      </h1>
      <h1 className="korean-protein-expaination">
      Aria2(다중서버 명령 줄 다운로드 유틸리티) 설치
       </h1>
       <div className="code_page">
       $ which aria2c		//aria2 설치여부 확인
       <Span></Span>
       $ sudo apt install aria2	//aria2 설치
       </div>
       <h1 className="korean-protein-expaination">
       Alphafold/scripts 속 파일을 불러와 database를 다운로드(코드 수정 시 선택적으로 다운로드 가능)
       </h1>
       <div className="code_page">
       $ cd /[filename]/alphafold	 //alphafold가 클로닝된 폴더로 접속
       <Span></Span>
       //alphafold와 다른 폴더에 저장하는 것이 좋음
       <Span></Span>
       //reduced_dbs는 용량 작은 버전
       <Span></Span>
       $ sudo scripts/download_all_data.sh /[filename]/db/ reduced_dbs

       </div>
       <h1 className="title-N1">
        (3) Docker
      </h1>
      <div className="code_page">
      //docker repository를 사용할 수 있게 필수 패키지 설치
      <Span></Span>
      $ sudo apt install apt-transport-https ca-certifiates curl gnupg lsb-release	
      <Span></Span>
      //docker와 암호화 통신을 위한 GPG keyrings 추가
      <Span></Span>
      $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dreamor -o /usr/share/keyrings/docker-archive-keyring.gpg
      <Span></Span>
      //설치할 시스템에 해당하는 docker repository를 추가 후 apt update
      <Span></Span>
      $echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list 여기 /dev/null
      <Span></Span>
      $ sudo apt update
      <Span></Span>
      //docker-ce, docker-ce-cli, containerd.io 설치
      <Span></Span>
      $ sudo apt install docker-ce docker-ce-cli containerd.io
      <Span></Span>
      //docker 설치 확인 (docker의 hello-world 실행)
      <Span></Span>
      $ sudo docker run hello-world
      <Span></Span>
      $ sudo apt update	//설치 가능한 도구들의 목록을 갱신

       </div>
       <h1 className="korean-protein-expaination">
       (참고) apt list
       </h1>
       <h1 className="korean-protein-expaination">
       Apt list에 기록된 저장소(repository)들이 apt update 시 자동으로 업데이트 된다.
       </h1>
       <h1 className="korean-protein-expaination">
       /etc/apt/sources.list에서 확인 가능하며, vi 편집기 (vi/etc/apt/sources.list)로 편집가능하다.
       </h1>
       <h1 className="korean-protein-expaination">
       docker를 사용할 수 있는 사용자(현재 컴퓨터의 사용자 계정)를 추가
       </h1>
       <div className="code_page">
       $ sudo groupadd docker			//사용자 그룹에 docker 추가
       <Span></Span>
       $ sudo usermod -aG docker $USER	//현재 사용자 계정을 docker 사용자 그룹에 추가
       <Span></Span>
       $ newgrp docker			//계정 로그아웃 후 재로그인
       <Span></Span>
       //일반 사용자로서 도커 사용가능여부 확인 (docker의 hello-world 실행)
       <Span></Span>
       $ docker run hello-world

       </div>
       <h1 className="title-N1">
        (4) 그래픽 처리 장치 (GPU) 드라이버 구성
      </h1>
      <h1 className="korean-protein-expaination">
      GPU 사용 가능 여부 확인 (GPU 목록이 표시되지 않은 경우 다음의 과정을 따른다.)
       </h1>
       <div className="code_page">
       $ docker run --gpus all nvidia/cuda:11.5.2-base-ubuntu20.04 nvidia-smi
       </div>
       <h1 className="korean-protein-expaination">
       사용가능한 GPU 확인
       </h1>
       <div className="code_page">
       $ sudo update-pciids
       <Span></Span>$ lspci | grep VGA
      <Span></Span>예시 결과: [Geforce RTX 3070 Ti Laptop GPU]
       </div>
       <h1 className="korean-protein-expaination">
       GPU에 알맞은 nvidia driver 설치
       </h1>
       <div className="code_page">
       //설치가능한 드라이버 확인 
       <Span></Span>$ ubuntu-drivers devices
       <Span></Span>//(방법1)원하는 버전 수동설치 
       <Span></Span>$ sudo apt install nvidia-driver-525
       <Span></Span>//(방법2)드라이버직접다운(nvidia 웹페이지에서 파일 다운로드)
       <Span></Span>$ sudo sh NVIDIA-Linux-x86_64-525.105.17.run 
       <Span></Span>$ which nvidia-smi	// nvidia driver 설치여부 확인
       <Span></Span>$ nvidia-smi		// 설치된 nvidia GPU 확인
       </div>
       <h1 className="korean-protein-expaination">
       GPU 사용을 위한 nvidia container toolkit 설치
       </h1>
       <div className="code_page">
       $ distribution=$(. /etc/os-release;echo $ID$VERSION_ID)
       <Span></Span>$ curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add – 
       <Span></Span>$ curl -s -L https://nvidia.github.io/nvidia-docker/ubuntu22.04/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
       <Span></Span>$ sudo apt update
       <Span></Span>$ sudo apt -y install nvidia-container-toolkit
       <Span></Span>$ sudo systemctl restart docker
       <Span></Span>$ docker run --gpus all nvidia/cuda:11.5.2-base-ubuntu20.04 nvidia-smi
       </div>
       <h1 className="korean-protein-expaination">
       GPU 사용을 위한 nvidia container toolkit 설치
       </h1>
       <Wrap >
      <div>
        <img className="peptide_img" alt="role" src="/img/HowAlpha_nvidia_gpu.png" />
      </div>
      <div>
        <img className="amino_img" alt="role" src="/img/HowAlpha_nvidia_container.png" />
      </div>
      </Wrap>
      <Wrap>
      <hi className="img_title">
      그림 15 nvidia GPU 확인
      </hi>
      <Span /><Span />
      <hi className="img_title">
         그림 16 nvidia container 확인
         </hi>
         </Wrap>

      <h1 className="title-N1">
        (4) Alphafold docker 이미지 생성
      </h1>
      <h1 className="korean-protein-expaination">
      Dockerfile 코드를 실행하여 도커 이미지 생성 (alphafold 파일에 접속한 후 실행)       
      </h1>
      <div className="code_page">
      $ cd [filename]/alphafold		//alphafold가 클로닝된 폴더로 접속
      <Span /><Span />$ docker build -f docker/Dockerfile -t alphafold .
      <Span /><Span />//python 환경과의 충돌 방지를 위한 python 가상환경 생성 (이미지의 요구사항을 맞춤)
      <Span /><Span />$ sudo apt install python3-pip	//pip3가 없는 경우 미리 설치
      <Span /><Span />$ pip3 install -r docker/requirements.tx
      </div>
      <h1 className="title-N1">
        (5) Alphafold 실행
      </h1>
      <div className="code_page">
      $python3 docker/run_docker.py 
      <Span /><Span />--fasta_paths=input/[INPUT.fasta]	//input파일의 경로입력: alphafold 내에 존재해야 한다.
      <Span /><Span />--max_template_date=2023-04-30	
      <Span /><Span />--data_dir=/[filename]/db/	//database파일의 경로입력
      <Span /><Span />--model_preset=monomer	//model
      <Span /><Span />--db_preset=reduced_dbs 	//database		
      <Span /><Span />--output_dir=/[filename]/output/	//output파일의 경로입력
      </div>
      <h1 className="title-N1">
        참고
      </h1>
      <h1 className="korean-protein-expaination">
      “AlphaFoldv2 open-source code”, https://github.com/deepmind/alphafold
      </h1>
      <h1 className="korean-protein-expaination">
      “2021-Highly accurate protein structure prediction with AlphaFold”,
https://www.nature.com/articles/s41586-021-03819-2
      </h1>
      <h1 className="korean-protein-expaination">
      “2021-Supplementary information for: Highly accurate protein structure prediction with AlphaFold”,
https://www.uvio.bio/alphafold-architecture/AlphaFold-Supplementary-Information.pdf
      </h1>
      <h1 className="korean-protein-expaination">
      “2022-AlphaFold Protein Structure Database: massively expanding the structural coverage of protein-sequence space with high-accuracy models”,
https://academic.oup.com/nar/article/50/D1/D439/6430488?login=false
      </h1>
      <h1 className="korean-protein-expaination">
      “AlphaFold webpage(DeepMind)”, 
https://www.deepmind.com/research/highlighted-research/alphafold
      </h1>
      <h1 className="korean-protein-expaination">
      “[Review] AlphaFold2”, https://ocxanc.tistory.com/51
      </h1>
      <h1 className="korean-protein-expaination">
      “알파폴드2모델분석”, https://taehojo.github.io/alphafold/alphafold2.html
      </h1>
      <h1 className="korean-protein-expaination">
      “Alphfafold2 논문리뷰1[성능]”, https://happyhaelee.tistory.com/m/96
      </h1>
      <h1 className="korean-protein-expaination">
      “Alphfafold2 논문리뷰2[입력부분]”, https://happyhaelee.tistory.com/m/98
      </h1>
      <h1 className="korean-protein-expaination">
      “Alphfafold2 논문리뷰4[Evoformer-pair representation]”, https://happyhaelee.tistory.com/m/99
      </h1>
      <h1 className="korean-protein-expaination">
      “[초심자를 위한 생물학+정보학] 알파폴드의 설치와 사용: 깃, 도커, 그리고 엔비디아”,
https://www.ibric.org/myboard/read.php?Board=news&id=337509 
      </h1>

    </div>
  );
}