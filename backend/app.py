from flask import Flask, request, jsonify
from pytube import YouTube
from transformers import pipeline
from langchain_openai import OpenAI
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.chains.question_answering import load_qa_chain

app = Flask(__name__)

# Load summarization pipeline
summarizer = pipeline("summarization", model="t5-base", tokenizer="t5-base")

def transcribe_youtube(video_url, model="base"):
  yt = YouTube(video_url)
  audio_stream = yt.streams.filter(only_audio=True).first()
  audio_file = audio_stream.download()
  model = whisper.load_model(model)
  result = model.transcribe(audio_file)
  return result["text"]

# Load question answering model
os.environ["OPENAI_API_KEY"] = "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"
openai = OpenAI()
qa_chain = load_qa_chain(openai, chain_type="stuff")

@app.route('/qa_youtube', methods=['POST'])
def qa_youtube():
    # Get video URL from request
    video_url = request.form.get('video_url')
    
    # Transcribe YouTube video
    transcript = transcribe_youtube(video_url)
    
    # Summarize transcript
    summary = summarize(transcript)
    
    # Get question from request
    question = request.form.get('question')
    
    # Split summary into smaller segments
    segment_length = 1000
    segments = [summary[i:i+segment_length] for i in range(0, len(summary), segment_length)]
    
    # Get answers for each segment
    answers = []
    for segment in segments:
        texts = text_splitter.split_text(segment)
        texts_search = FAISS.from_texts(texts, embeddings)
        texts_similarity = texts_search.similarity_search(question)
        answer = qa_chain.run(question=question, input_documents=texts_similarity)
        answers.append(answer)
    
    return jsonify(answers)

if __name__ == '__main__':
    app.run(debug=True)
