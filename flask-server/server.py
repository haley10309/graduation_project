from flask import Flask,request,render_template,Response, redirect
import json
from http import HTTPStatus
from flask import jsonify
from pypdb import *
from IPython.display import HTML


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
        
        # # 예외처리 
        try:
            q = Query(seq, 
            query_type="sequence", 
            return_type="polymer_entity")

            # 데이터 추출 완료!
            tmp = q.search()['result_set'][0]['identifier']
            tmp = tmp.split("_")[0]
            print(tmp)
            
            return tmp
                
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






