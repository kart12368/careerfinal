import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)
model = pickle.load(open("mode.pkl","rb"))

@app.route("/")
def home():
    return "Hrl"

@app.route("/predict", methods=["POST"])
def predict():
    raw_data = request.get_json()
    df = pd.json_normalize(raw_data)
    df.to_csv('2.csv', index=False)
    data = pd.read_csv("2.csv")
    prediction = model.predict(data)
    kar = pd.read_csv("FinalData - FinalData.csv")
    kar2 = kar.loc[kar["Row Labels"] == prediction[0]].values[0]
    return jsonify({'result': kar2[1]}), 200, {'Access-Control-Allow-Origin': '*'}

if __name__ ==  "__main__":
    app.run(host='0.0.0.0', port=8080)
