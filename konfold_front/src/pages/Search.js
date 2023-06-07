import React from "react";
import axios from 'axios'  ;
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';




export default function Search() {
  const [protein, setProtein] = useState("");
  const [proteinSearchID, setProteinSearchID] = useState("");
  const [button, setButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const isButtonDisabled = !isChecked1 && !isChecked2 && !isChecked3;


  const isAlpha = str => /^[a-zA-Z]*$/.test(str);

  const changeButton = () => {
    const upperProtein = protein.toUpperCase();
    (upperProtein.includes("B") || upperProtein.includes("J") || upperProtein.includes("O") || upperProtein.includes("X") || upperProtein.includes("Z") || upperProtein.includes(" ") || (!isAlpha(upperProtein))) ? setButton(true) : setButton(false)
    
  };
  const changeButtonFalse = () => {
    setButton(false);
  }

  const handleInput = (event) => {
    event.preventDefault();
    setProtein(event.target.value);
  };

  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
    if(!isChecked1){
      if((isChecked3||isChecked2)){
        setProtein("");
        changeButtonFalse();
      }else{
      setProtein("VLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTAVAHVDDMPNAL ");
      changeButton();
      }
    } else {
      setProtein("");
      changeButtonFalse();
    }
  };
  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
    if(!isChecked2){
      if((isChecked3||isChecked1)){
        setProtein("");
        changeButtonFalse();
      }else{
      setProtein("GSGHMDKKYSIGLAIGTNSVGWAVITDEYKVPSKKFKVLGNTDRHSIKKNLIGALLFDSGETAEATRLKRTARRRYTRRKNRILYLQEIFSNEMAKVDDSFFHRLEESFLVEEDKKHERHPIFGNIVDEVAYHEKYPTIYHLRKKLVDSTDKADLRLIYLALAHMIKFRGHFLIEGDLNPDNSDVDKLFIQLVQTYNQLFEENPINASGVDAKAILSARLSKSRRLENLIAQLPGEKKNGLFGNLIALSLGLTPNFKSNFDLAEDAKLQLSKDTYDDDLDNLLAQIGDQYADLFLAAKNLSDAILLSDILRVNTEITKAPLSASMIKRYDEHHQDLTLLKALVRQQLPEKYKEIFFDQSKNGYAGYIDGGASQEEFYKFIKPILEKMDGTEELLVKLNREDLLRKQRTFDNGSIPHQIHLGELHAILRRQEDFYPFLKDNREKIEKILTFRIPYYVGPLARGNSRFAWMTRKSEETITPWNFEEVVDKGASAQSFIERMTNFDKNLPNEKVLPKHSLLYEYFTVYNELTKVKYVTEGMRKPAFLSGEQKKAIVDLLFKTNRKVTVKQLKEDYFKKIEEFDSVEISGVEDRFNASLGTYHDLLKIIKDKDFLDNEENEDILEDIVLTLTLFEDREMIEERLKTYAHLFDDKVMKQLKRRRYTGWGRLSRKLINGIRDKQSGKTILDFLKSDGFANRNFMQLIHDDSLTFKEDIQKAQVSGQGDSLHEHIANLAGSPAIKKGILQTVKVVDELVKVMGRHKPENIVIEMARENQTTQKGQKNSRERMKRIEEGIKELGSQILKEHPVENTQLQNEKLYLYYLQNGRDMYVDQELDINRLSDYDVDAIVPQSFLKDDSIDNKVLTRSDKNRGKSDNVPSEEVVKKMKNYWRQLLNAKLITQRKFDNLTKAERGGLSELDKAGFIKRQLVETRQITKHVAQILDSRMNTKYDENDKLIREVKVITLKSKLVSDFRKDFQFYKVREINNYHHAHDAYLNAVVGTALIKKYPKLESEFVYGDYKVYDVRKMIAKSEQEIGKATAKYFFYSNIMNFFKTEITLANGEIRKRPLIETNGETGEIVWDKGRDFATVRKVLSMPQVNIVKKTEVQTGGFSKESILPKRNSDKLIARKKDWDPKKYGGFDSPTVAYSVLVVAKVEKGKSKKLKSVKELLGITIMERSSFEKNPIDFLEAKGYKEVKKDLIIKLPKYSLFELENGRKRMLASAGELQKGNELALPSKYVNFLYLASHYEKLKGSPEDNEQKQLFVEQHKHYLDEIIEQISEFSKRVILADANLDKVLSAYNKHRDKPIREQAENIIHLFTLTNLGAPAAFKYFDTTIDRKRYTSTKEVLDATLIHQSITGLYETRIDLSQLGGD ");
      changeButton();
      }
    } else {
      setProtein("");
      setButton(false);
    }
  };
  const handleCheckbox3Change = () => {
    setIsChecked3(!isChecked3);
    if(!isChecked3){
      if((isChecked1||isChecked2)){
        setProtein("");
        changeButtonFalse();
      }else{
      setProtein("MESLVPGFNEKTHVQLSLPVLQVRDVLVRGFGDSVEEVLSEARQHLKDGTCGLVEVEKGVLPQLEQPYVFIKRSDARTAPHGHVMVELVAELEGIQYGRSGVVVYKDGNEYDYALSYMQLPEDLRKYICEVQDKGWYHFDGQEENKGVVRGWVPSNYITPVNSLEPFLIYKDVFRSSVLHSTQDLFLPFFSNVTWFHAIHVSGTNGTKRFDNPVLPFNDGVYFASTEKSNIIRGWIFGTTLDSKTQSLLIVNNATNVVIKVCEFQFCNDPFLGVYYHKNNKSWMESEFRVYSSANNCTFEYVSQPFLMDLEGKQGNFKNLREFVFKNIDGYFKIYSKHTPINLVRDLPQGFSALEPLVDLPIGINITRFQTLLALHRSYLTPGDSSSGWTAGAAAYYVGYLQPRTFLLKYNENGTITDAVDCALDPLSETKCTLKSFTVEKGIYQTSNFRVQPTESIVRFPNITNLCPFGEVFNATRFASVYAWNRKRISNCVADYSVLYNSASFSTFKCYGVSPTKLNDLCFTNVYADSFVIRGDEVRQIAPGQTGKIADYNYKLPDDFTGCVIAWNSNNLDSKVGGNYNYLYRLFRKSNLKPFERDISTEIYQAGSTPCNGVEGFNCYFPLQSYGFQPTNGVGYQPYRVVVLSFELLHAPATVCGPKKSTNLVKNKCVNFNFNGLTGTGVLTESNKKFLPFQQFGRDIADTTDAVRDPQTLEILDITPCSFGGVSVITPGTNTSNQVAVLYQDVNCTEVPVAIHADQLTPTWRVYSTGSNVFQTQAFGRRGPEQTQGNFGDQELIRQGTDYKHWPQIAQFAPSASAFFGMSRIGMEVTPSGTWLTYTGAIKLDDKDPNFKDQVILLNKHIDAYKTFPPTEPKKDKKKKADETQALPQRQKKQQTVTLLPAADLDDFSKQLQQSMSSADSTQA");
      changeButton();
      }
    } else {
      setProtein("");
      changeButtonFalse();
    }
  };

  const post = (seq) => {
    return new Promise((resolve, reject) => {
      fetch("/api/Input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({ proteinName: seq })
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res == null) {
            console.log("데이터 가져오기 실패");
          }
          setProteinSearchID(res); // 전혀 작용 x  이것 때문에 그동안 데이터 전달이 안됐음.
          resolve(res); // promise 에 관련된 return 값만 작용 o
        });
    });
  };

  const confirm = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const searchResult = await post(protein);
      localStorage.setItem("proteinId", searchResult['proteinId']);
      localStorage.setItem("proteinSeq", protein);
      setTimeout(() => {
        setLoading(false);
        window.location.href = "/proteinInput";
      }, 100);
    } catch (error) {
      console.log("데이터 가져오기 실패:", error);
      setLoading(false);
    }
  };

  return (
    <div className="loading_page">
      {loading ?
        <ClimbingBoxLoader className="loading_page"
          size={30}
          color={"#123abc"}
          loading={loading}
        />
        :
        <div className="inside_page">
          <div className="titleprotein">단백질 시퀀스를 입력해 주세요</div>
          <div className="contentWrap">
            <div className="inputTitle">단백질 시퀀스</div>
            <div className="inputWrap">
              <input
                className="input"
                value={protein}
                onChange={handleInput}
                onKeyUp={changeButton}
              />
            </div>
            <div className="inputTitle">예시 시퀀스</div>
            
          </div>
          <div>
            <label htmlFor="checkbox">알파-1 글로빈 체인의 일부 서열 </label>
            <input
              id="checkbox"
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckbox1Change}
            />
          </div>
          

          <div>
            <label htmlFor="checkbox">CRISPR-Cas9</label>
            <input
              id="checkbox"
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckbox2Change}
            />
          </div>
          <div>
            <label htmlFor="checkbox">SARS-CoV-2 단백질 서열 </label>
            <input
              id="checkbox"
              type="checkbox"
              checked={isChecked3}
              onChange={handleCheckbox3Change}
            />
          </div>

          <div>
            <button
              disabled={button}
              onClick={confirm}
              className="bottomButton"
            >
              확인
            </button>
          </div>
          <div className="inputTitle">
            단백질 3D 구조 시각화 화면입니다
          </div>
        </div>
      }
    </div>
  );
}
