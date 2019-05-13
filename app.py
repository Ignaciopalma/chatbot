import os
from flask import Flask
from flask import send_from_directory
from keras.models import model_from_json
import spacy
import numpy as np

nlp = spacy.load('en_core_web_lg')

# load json and create model
json_file = open('/Users/ignaciopalma/PycharmProjects/session_6/models/mlp-model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)
# load weights into new model
loaded_model.load_weights("/Users/ignaciopalma/PycharmProjects/session_6/models/mlp-model.h5")
print("Loaded model from disk")

user_message = nlp("hello world").vector
print("shape: {}".format(user_message.shape))


# evaluate loaded model on test data
loaded_model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
print('model compiled')

prediction = loaded_model.predict_classes(np.array([user_message]))

print("prediction {}".format(prediction))

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)))
app = Flask(__name__)

@app.route("/")
def hello():
    return send_from_directory(static_file_dir, 'index.html')