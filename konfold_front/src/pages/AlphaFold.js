import React from "react";
import axios from "axios";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';


export default function AlphaFold(){
  const [protein, setProtein] = useState(""); //입력 값 변수 [입력값, 입력값 변경]
  const [pdb_predict, setPDBPredict] = useState(null) // response 변수

  const [button, setButton] = useState(true);
  const isAlpha = str => /^[a-zA-Z]*$/.test(str);
  
  //로딩 화면  
  const [loading, setLoading] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);


 // 알맞은 시퀀스 입력시 Button 켜짐
  function changeButton(){
    const UpperProtein = protein.toUpperCase();
  
  // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
    // UpperProtein.includes('G'||'A'||'V'||'L'||'I'||'S'||'T'||'C'||'M'||'D'||'E'||'N'||'Q'||'K'||'R'||'F'||'Y'||'W'||'H'||'P'||'U') ? setButton(false) : setButton(true)
    (UpperProtein.includes("B") || UpperProtein.includes("J") || UpperProtein.includes("O") || UpperProtein.includes("X") || UpperProtein.includes("Z") || UpperProtein.includes(" ") || (!isAlpha(UpperProtein))) ? setButton(true) : setButton(false)

  }
  // 입력된 변수 저장
  const handleInput = (event) => {
    event.preventDefault();
    setProtein(event.target.value); //변수 저장 완료
     };
  const handleCheckbox1Change = () => {
    setIsChecked1(!isChecked1);
    if(!isChecked1){
      if((isChecked3||isChecked2)){
        setProtein("");
        changeButton();
      }else{
      setProtein("VLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHFDLSHGSAQVKGHGKKVADALTAVAHVDDMPNAL ");
      changeButton();
      }
    } else {
      setProtein("");
      changeButton();
    }
  };
  const handleCheckbox2Change = () => {
    setIsChecked2(!isChecked2);
    if(!isChecked2){
      if((isChecked3||isChecked1)){
        setProtein("");
        changeButton();
      }else{
      setProtein("GSGHMDKKYSIGLAIGTNSVGWAVITDEYKVPSKKFKVLGNTDRHSIKKNLIGALLFDSGETAEATRLKRTARRRYTRRKNRILYLQEIFSNEMAKVDDSFFHRLEESFLVEEDKKHERHPIFGNIVDEVAYHEKYPTIYHLRKKLVDSTDKADLRLIYLALAHMIKFRGHFLIEGDLNPDNSDVDKLFIQLVQTYNQLFEENPINASGVDAKAILSARLSKSRRLENLIAQLPGEKKNGLFGNLIALSLGLTPNFKSNFDLAEDAKLQLSKDTYDDDLDNLLAQIGDQYADLFLAAKNLSDAILLSDILRVNTEITKAPLSASMIKRYDEHHQDLTLLKALVRQQLPEKYKEIFFDQSKNGYAGYIDGGASQEEFYKFIKPILEKMDGTEELLVKLNREDLLRKQRTFDNGSIPHQIHLGELHAILRRQEDFYPFLKDNREKIEKILTFRIPYYVGPLARGNSRFAWMTRKSEETITPWNFEEVVDKGASAQSFIERMTNFDKNLPNEKVLPKHSLLYEYFTVYNELTKVKYVTEGMRKPAFLSGEQKKAIVDLLFKTNRKVTVKQLKEDYFKKIEEFDSVEISGVEDRFNASLGTYHDLLKIIKDKDFLDNEENEDILEDIVLTLTLFEDREMIEERLKTYAHLFDDKVMKQLKRRRYTGWGRLSRKLINGIRDKQSGKTILDFLKSDGFANRNFMQLIHDDSLTFKEDIQKAQVSGQGDSLHEHIANLAGSPAIKKGILQTVKVVDELVKVMGRHKPENIVIEMARENQTTQKGQKNSRERMKRIEEGIKELGSQILKEHPVENTQLQNEKLYLYYLQNGRDMYVDQELDINRLSDYDVDAIVPQSFLKDDSIDNKVLTRSDKNRGKSDNVPSEEVVKKMKNYWRQLLNAKLITQRKFDNLTKAERGGLSELDKAGFIKRQLVETRQITKHVAQILDSRMNTKYDENDKLIREVKVITLKSKLVSDFRKDFQFYKVREINNYHHAHDAYLNAVVGTALIKKYPKLESEFVYGDYKVYDVRKMIAKSEQEIGKATAKYFFYSNIMNFFKTEITLANGEIRKRPLIETNGETGEIVWDKGRDFATVRKVLSMPQVNIVKKTEVQTGGFSKESILPKRNSDKLIARKKDWDPKKYGGFDSPTVAYSVLVVAKVEKGKSKKLKSVKELLGITIMERSSFEKNPIDFLEAKGYKEVKKDLIIKLPKYSLFELENGRKRMLASAGELQKGNELALPSKYVNFLYLASHYEKLKGSPEDNEQKQLFVEQHKHYLDEIIEQISEFSKRVILADANLDKVLSAYNKHRDKPIREQAENIIHLFTLTNLGAPAAFKYFDTTIDRKRYTSTKEVLDATLIHQSITGLYETRIDLSQLGGD ");
      changeButton();
      }
    } else {
      setProtein("");
      changeButton();
    }
  };
  const handleCheckbox3Change = () => {
    setIsChecked3(!isChecked3);
    if(!isChecked3){
      if((isChecked1||isChecked2)){
        setProtein("");
        changeButton();
      }else{
      setProtein("MESLVPGFNEKTHVQLSLPVLQVRDVLVRGFGDSVEEVLSEARQHLKDGTCGLVEVEKGVLPQLEQPYVFIKRSDARTAPHGHVMVELVAELEGIQYGRSGVVVYKDGNEYDYALSYMQLPEDLRKYICEVQDKGWYHFDGQEENKGVVRGWVPSNYITPVNSLEPFLIYKDVFRSSVLHSTQDLFLPFFSNVTWFHAIHVSGTNGTKRFDNPVLPFNDGVYFASTEKSNIIRGWIFGTTLDSKTQSLLIVNNATNVVIKVCEFQFCNDPFLGVYYHKNNKSWMESEFRVYSSANNCTFEYVSQPFLMDLEGKQGNFKNLREFVFKNIDGYFKIYSKHTPINLVRDLPQGFSALEPLVDLPIGINITRFQTLLALHRSYLTPGDSSSGWTAGAAAYYVGYLQPRTFLLKYNENGTITDAVDCALDPLSETKCTLKSFTVEKGIYQTSNFRVQPTESIVRFPNITNLCPFGEVFNATRFASVYAWNRKRISNCVADYSVLYNSASFSTFKCYGVSPTKLNDLCFTNVYADSFVIRGDEVRQIAPGQTGKIADYNYKLPDDFTGCVIAWNSNNLDSKVGGNYNYLYRLFRKSNLKPFERDISTEIYQAGSTPCNGVEGFNCYFPLQSYGFQPTNGVGYQPYRVVVLSFELLHAPATVCGPKKSTNLVKNKCVNFNFNGLTGTGVLTESNKKFLPFQQFGRDIADTTDAVRDPQTLEILDITPCSFGGVSVITPGTNTSNQVAVLYQDVNCTEVPVAIHADQLTPTWRVYSTGSNVFQTQAFGRRGPEQTQGNFGDQELIRQGTDYKHWPQIAQFAPSASAFFGMSRIGMEVTPSGTWLTYTGAIKLDDKDPNFKDQVILLNKHIDAYKTFPPTEPKKDKKKKADETQALPQRQKKQQTVTLLPAADLDDFSKQLQQSMSSADSTQA");
      changeButton();
      }
    } else {
      setProtein("");
      changeButton();
    }
  };
  
  // prediction request
  const post = (seq) => {
    //Promise로 fetch를 감싼다
    return new Promise((resolve, reject) => {
      fetch("/konfold/alphafold2", {
              method : "POST",  //메소드 지정
              headers : {       //데이터 타입 지정
                  "Content-Type":"application/json; charset=utf-8"
              },
              body: JSON.stringify({proteinName:seq}) //데이터 JSON문자열화 후 body에 저장
          })
          .then(res=>{  //리턴값이 있으면 리턴값에 맞는 req지정
              console.log("fetchtest1:",res)
              const blob = res.blob();
              return blob
          })
          .then(blob=> { //리턴값에 대한 처리
              console.log("fetchtest2:",blob);
              //res 값에 따른 결과 처리       
              if(blob == null){
                console.log("데이터 가져오기 실패");
              }
              //let blobURL = URL.createObjectURL(blob)
              //console.log("fetchtest3:",blob);
              resolve(blob);
              //localStorage.setItem('pdb_protein', res);
          });
      });
    };

  // button 클릭
  const confirm = async (event) => {
    // 확인 후 다음 페이지
    event.preventDefault();
    console.log("start_test:", protein);

    setLoading(true);
    
    try {
      // output blob저장
      const predictResult = await post(protein);
      console.log("result_blob:", predictResult);
      //localStorage.setItem('predictResult', predictResult);

      // url저장
      let blobURL = URL.createObjectURL(predictResult)
      console.log("result_bloburl:", blobURL);
      //localStorage.setItem('predictResultURL', blobURL);
      //localStorage.setItem('predictResult', predictResult.substring(5));

      //read blob data
      let reader = new FileReader();
      reader.onload = function(event) {
        let pdbdata = event.target.result
        // save pdb data to local storage
        localStorage.setItem('pdbData', pdbdata)
        setPDBPredict(pdbdata)
      };
      reader.readAsText(predictResult);
      setTimeout(() => {
        setLoading(false);
        // 시각화 창
        window.location.href = "/AlphaOutput";
      }, 360000) //필요한 시간 만큼 숫자조정 => 1000 = 1초
      //while 문으로 작성하려고 해도 뭘 기준으로 해야 하는 지 모르겠음.

    } catch (error) {
      console.log("데이터 가져오기 실패:", error);
      setLoading(false);
    }

  };
  
  return (
    <div className="loading_page">

      {
        loading?
        <ClimbingBoxLoader className="loading_page"
          size = {30}
          color={"#123abc"}
          loading= {loading}
          />
        :
        <div className="inside_page">
          <div className="titleprotein">단백질 시퀀스를 입력해 주세요</div>
          <div className="contentWrap">
            <div className="inputTitle">단백질 시퀀스</div>
            <div className="inputWrap">
              <input
                className="input"
                value={protein} //input으로 받은 프로틴 시퀀스
                onChange={handleInput}
                onKeyUp={changeButton}
              />
            </div> {/* inputWrap 끝 */}
            <div className="errorMessageWrap">올바른 시퀀스를 입력해 주세요</div>
          </div>{/* contentWrap 끝 */}
          <div className="inputTitle">예시 시퀀스</div>
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
          <div>{/* button 시작 */}
            <button 
            disabled={button} 
            onClick={confirm} 
            className="bottomButton">
              확인
            </button>
          </div>{/* button 끝 */}
          <div className="inputTitle"> 알파폴드 체험 화면입니다</div>
        </div> //inside wrap 끝

      }

      
    </div>//loading page 끝
    
  );
}
