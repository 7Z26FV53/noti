from flask_cors import CORS
from flask import Flask, request, jsonify
import pusher
import json
import os
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)

dotenv_path=('../frontend/.env.local')
load_dotenv(dotenv_path=dotenv_path)
pusher_client = pusher.Pusher(
  app_id=os.getenv('app_id'),
  key=os.getenv('key'),
  secret=os.getenv('secret'),
  cluster=os.getenv('cluster'),
  ssl=True
)

@app.route("/")
def hello_world():
    return "hi hi"

@app.route("/event-click", methods = ["POST"])
def event_click():
    if request.method == "POST":
        request_data = request.get_json() # dict
        pusher_client.trigger('my-channel', 'event-click', {'message': request_data['message']})
        return_result = jsonify("hello from backend :)"), 200
    return return_result