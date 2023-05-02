from flask import Flask,request
import json
from flask import jsonify
import visualization

app = Flask(__name__)

@app.route('/api/proteinInput', methods=['GET','POST'])
def join_post():
    if request.method == 'POST':
        seq = request.get_json()
        if not seq:
            return {"message": "Must provide message to send to slack"}, 400

        print(seq)
        return jsonify(seq)
    
    else:
        return "ok"

if __name__ == "__main__":
    app.run(debug = True)