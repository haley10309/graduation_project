from flask import Flask, request, render_template, Response, redirect
import json
from http import HTTPStatus
from flask import jsonify
from pypdb import *
from IPython.display import HTML
from react.render import render_component

# from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/Input', methods=['POST'])
def join_post():
    seq = request.get_json()
    if not seq:
        raise ValueError
            
    try:
        print(seq['proteinName'])
        tmp = Query(seq['proteinName'], query_type="sequence", return_type="polymer_entity").search(10)['result_set'][0]['identifier']
        tmp = tmp.split("_")[0]
        print(tmp+ "예")
        protId = {"proteinId": tmp}
        print(protId)
                
        # return {"proteinId": tmp}
        return (protId)
        # rendered = render_component('konfold_front/src/AFoutput.jsx',)
        # return Response(json.dumps(protId, ensure_ascii=False).encode('utf8'), content_type='application/json; charset=utf-8')
    
                    
    except Exception as e:              
        print('예외가 발생했습니다.', e)
        result = {
                'code': 200,
                'description': "아미노산 서열 이외의 값을 입력",
                'message': "아미노산 서열 이외의 값을 입력하였습니다."
            }
        
        return Response(json.dumps(result, ensure_ascii=False).encode('utf8'), content_type='application/json; charset=utf-8')
    


  
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=False)