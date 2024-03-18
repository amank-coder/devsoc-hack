from pytube import YouTube
import whisper
from transformers import pipeline
import os
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
from typing_extensions import Concatenate
from langchain.chains.question_answering import load_qa_chain
from flask import Flask

from langchain_openai import OpenAI

os.environ["OPENAI_API_KEY"] = "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"

def transcribe_youtube(video_url, model="base"):
  yt = YouTube(video_url)
  audio_stream = yt.streams.filter(only_audio=True).first()
  audio_file = audio_stream.download()
  model = whisper.load_model(model)
  result = model.transcribe(audio_file)
  return result["text"]



text_splitter=CharacterTextSplitter(
    separator="\n",
    chunk_size = 100,
    chunk_overlap = 20,
)
texts=text_splitter.split_text(summary)

embeddings= HuggingFaceEmbeddings()

document_search=FAISS.from_texts(texts,embeddings)
document_search

os.environ["OPENAI_API_KEY"] = "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"
llm = OpenAI()
chain=load_qa_chain(OpenAI(),chain_type="stuff")
question = "how is data augmentation done here?"
texts=document_search.similarity_search(question)
answer = chain.run(question=question, input_documents=texts)
print(answer)

app = Flask(__name__)

@app.route('/qa_youtube', methods=['POST'])
def qa_youtube():
    # Get video URL from request
    video_url = request.form.get('video_url')
    
    transcript = transcribe_youtube(video_url)
    
    # Load the summarization pipeline
    summarizer = pipeline("summarization", model="t5-base", tokenizer="t5-base")

    # Split the transcript into smaller segments
    segment_length = 1000  # Adjust as needed
    segments = [transcript[i:i+segment_length] for i in range(0, len(transcript), segment_length)]

    # Summarize each segment and concatenate the summaries
    summary = ""
    for segment in segments:
        segment_summary = summarizer(segment, max_length=150, min_length=30, do_sample=False)[0]['summary_text']
        summary += segment_summary + " "

    
    # Get question from request
    question = request.form.get('question')
    
    text_splitter=CharacterTextSplitter(
    separator="\n",
    chunk_size = 100,
    chunk_overlap = 20,
    )
    
    texts=text_splitter.split_text(summary)
    
    embeddings= HuggingFaceEmbeddings()
    
    document_search=FAISS.from_texts(texts,embeddings)
    document_search
    
    
    llm = OpenAI()
    chain=load_qa_chain(OpenAI(),chain_type="stuff")
    
    texts=document_search.similarity_search(question)
    answer = chain.run(question=question, input_documents=texts)
    print(answer) 
    
    return answer  
    
if __name__ == '__main__':
    app.run(debug=True)