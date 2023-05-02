from flask import Flask,request,render_template,Response, redirect
import json
from http import HTTPStatus
from flask import jsonify
# import visualization


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/Input', methods=['GET','POST'])
def join_post():
    
    # 아미노산 염기서열
    AminSeq = ["G","A","V","L","I","S","T","C","M","D","E","N","Q","K","R","F","Y","W","H","P","U"]
    
    if request.method == 'POST':
        seq = request.get_json()
        if not seq:
            raise ValueError
        
        # 예외처리 : 만약 영어가 아니라면 예외처리
        try:
            if(seq['proteinName'].encode().isalpha() == True):

        # 소문자->대문자화
                seq['proteinName'] = seq['proteinName'].upper()
                print(seq['proteinName'])
                
        # 예외처리 : 아미노산 20개 배열과 일치하지 않은게 있다면 예외처리   
                uni = list(set(seq['proteinName']) - set(AminSeq))   
                if (len(uni)>0):
                    raise ValueError
                
                return Response(json.dumps(seq))
            else:
                print(seq['proteinName'])
                raise ValueError
                
        # 예외가 발생했을 때 실행됨
        except Exception as e:              
            print('예외가 발생했습니다.', e)
            result = {
                'code': 200,
                'description': "아미노산 서열 이외의 값을 입력",
                'message': "아미노산 서열 이외의 값을 입력하였습니다."
            }
    
            # 재입력받기
            return Response(json.dumps(result,ensure_ascii=False).encode('utf8'),content_type='application/json; charset=utf-8')

    else:
        return "ok"



if __name__ == "__main__":
    app.run(debug = True)






