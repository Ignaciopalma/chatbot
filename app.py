import os
from flask import Flask
from flask import send_from_directory

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), 'static')
app = Flask(__name__)

@app.route("/")
def hello():
    return send_from_directory(static_file_dir, 'index.html')