import os
import random
from flask import Flask
from flask import send_from_directory, jsonify, request
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

# prediction = loaded_model.predict_classes(np.array([user_message]))

static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)))
app = Flask(__name__)

responses = {
	"greetings": [
		"Hi Human",
		"Hi how are you?",
		"hi there"
	]
}

@app.route("/")
def hello():
	return send_from_directory(static_file_dir, 'index.html')

@app.route("/send-message", methods=['POST'])
def sent_message():
	print("message received {}".format(request.get_json()))

	user_message = request.get_json()
	vector_message = nlp(user_message['content']).vector
	prediction = loaded_model.predict_classes(np.array([vector_message]))[0]

	labels = ['greetings', 'commands', 'factoid', 'weather', 'book']
	print("prediction {}".format(labels[prediction]))

	predicted_label = labels[prediction]
	possible_responses = responses[predicted_label]
	random_index = random.randint(0, len(responses[predicted_label]) - 1)

	return jsonify({"content": possible_responses[random_index], "type": "received"})
