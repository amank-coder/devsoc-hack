from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS, cross_origin

import os
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from typing_extensions import Concatenate
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

app = Flask(__name__)
# CORS(app, support_credentials=True)
CORS(app)
# CORS(app)
# CORS(app, origins='http://localhost:5173', methods=['POST'], headers=['Content-Type'])

# Dummy transcript data
transcript = """The data collection process for a data science project at Lake Agriculture involves several options, including using ready-made data, annotating images manually, or web scraping. In this project, the decision was made to use a pre-existing dataset from KGLE focusing on tomato plant disease classification. The dataset includes images categorized into three directories: early blight, late blight, and healthy plants. The initial step involved downloading and organizing the dataset into the project directory.

TensorFlow's dataset API was utilized to load the images into a TensorFlow dataset. The dataset was then split into training, validation, and test sets using a custom function that allows for flexible split ratios. The training set comprised 80% of the data, while the remaining 20% was evenly split between validation and test sets.

Pre-processing steps were applied to the dataset to prepare it for model training. This included resizing all images to 256x256 pixels and rescaling pixel values to a range between 0 and 1. Additionally, data augmentation techniques such as random flipping and rotation were implemented to increase the robustness of the model.

All pre-processing steps were encapsulated into TensorFlow layers, ensuring seamless integration into the model architecture. These layers included resizing, rescaling, and data augmentation layers, which would be incorporated into the subsequent model construction phase.

The project emphasized the importance of efficient data handling through TensorFlow's dataset API, ensuring scalability and performance during model training. Furthermore, the pre-processing steps laid the groundwork for building a robust classification model capable of accurately identifying tomato plant diseases."""

# Initialize the question answering pipeline with a pre-trained model

text_splitter=CharacterTextSplitter(
    separator="\n",
    chunk_size = 100,
    chunk_overlap = 20,
)
texts=text_splitter.split_text(transcript)
embeddings= HuggingFaceEmbeddings()
vectorStore_openAI = FAISS.from_texts(texts, embeddings)


os.environ["OPENAI_API_KEY"]="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"

chain=load_qa_chain(OpenAI(),chain_type="stuff")

'''query="how to do data preprocessing"
docs=vectorStore_openAI.similarity_search(query)
answer=chain.run(input_documents=docs, question=query)
answer'''


# This function processes the user's doubt/query and generates a response
def process_doubt(user_doubt):
    # Use the question answering pipeline to find the answer in the transcript
    docs=vectorStore_openAI.similarity_search(user_doubt)
    answer=chain.run(input_documents=docs, question=user_doubt)
    return answer

# This route handles incoming doubt/query and responds based on the transcript
@app.route('/answer_doubt', methods=['POST'])
def answer_doubt():
    # Get the doubt/query from the request
    user_doubt = request.json.get('doubt')

    # Process the user's doubt/query
    response = process_doubt(user_doubt)

    return jsonify({"answer": response})



if __name__ == '__main__':
    app.run(debug=True)
