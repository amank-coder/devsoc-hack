import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Mic } from 'lucide-react';
import { useContext } from 'react';
import { Context } from '../components/utils/context';


const Aitutor = () => {

  const { lang, setLang } = useContext(Context);
  const lang1 = localStorage.getItem('lang')
  console.log("lang",lang)
  
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [seekToTime, setSeekToTime] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [doubt, setDoubt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [v,setV] = useState('one');

  const [isRecording, setisRecording] = useState(false);
const [note, setNote] = useState(null);
const [notesStore, setnotesStore] = useState([]);

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const microphone = new SpeechRecognition();

microphone.continuous = true;
microphone.interimResults = true;
microphone.lang = "en-US";

  const handleSeekChange = (e) => {
    setSeekToTime(parseFloat(e.target.value));
  }

  const handleSeek = () => {
    if (playerRef.current) {
      console.log(seekToTime);
      playerRef.current.seekTo(seekToTime, 'seconds');
    }
  }

  let showv= false;
  // const handleChange = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedLanguage(selectedValue);
  //   setLang(selectedLanguage);

  //   if (lang === 'Hindi' && playerRef.current) {
  //     playerRef.current.seekTo(0);
  //     showv=true;
  //   }
    

  // };

  const handleSubmit = async () => {
    try {
      // Make a POST request to the Flask API
      console.log(doubt)
      setLoading(true)
      const response = await axios.post('http://127.0.0.1:5000/answer_doubt', {doubt});
  
      // Parse the response
      const data = response.data;
      console.log(response)
      setLoading(false)
  
      // Update the state with the answer
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error occurred while submitting doubt:", error);
      // Handle the error, such as displaying an error message to the user
    }
  };
  const handleVideoPlay = () => {
    if (lang1 === 'Hindi' && playerRef.current) {
        // Start playing the audio
        const audio = document.getElementById('hindiAudio');
        audio.play();
    }
};

const handleVideoPause = () => {
    if (lang1 === 'Hindi') {
        // Pause the audio
        const audio = document.getElementById('hindiAudio');
        audio.pause();
    }
};


 

  return (
    <Layout>
      <div className='mt-8 flex flex-col'>
      <div className='text-end mr-16 mb-8'>
      {/* <select className='w-32 px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' onChange={handleChange}>
        <option>English</option>
        <option >Hindi</option>
      </select> */}
      </div>
      
        <div className='flex'>
          
          
          <div className='mx-auto md:hidden'>
            <ReactPlayer ref={playerRef} url='https://www.youtube.com/watch?v=bns5ELvbzVk' controls width="300px" height="200px"/>
          </div>
          {v=='one' ? (<div className='mx-auto hidden md:block'>
            <ReactPlayer ref={playerRef} url='https://www.youtube.com/watch?v=bns5ELvbzVk' controls />
          </div>):(
          <div className={`mx-auto `}>
            <ReactPlayer ref={playerRef} url='https://youtu.be/jlHkDBEumP0?si=XlsNLNoyEKIBYPMu' controls muted={lang1=='Hindi'} onPlay={handleVideoPlay}
                onPause={handleVideoPause}/>
            {lang1 === 'Hindi' && (
    <audio id="hindiAudio">
        <source src="/hindi.mp3" type="audio/mp3" />
    </audio>
)}
          </div>)}
          <div>
          
            {/* Your other content */}
        </div>
      
          <div className=' flex flex-col gap-2 mx-2'>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md' onClick={()=>setV('one')}>
            <span>1</span>
            <img src='https://i.ytimg.com/vi/dGtDTjYs3xc/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-vDfPWgAJkSrXmKR3SflABRJmcQ' className='w-32' />
          </div>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md'>
            <span>2</span>
            <img src='https://i.ytimg.com/vi/bns5ELvbzVk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAP4SNcaEqpVGE32bsY5gPWOv4pDg' className='w-32' />
          </div>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md'>
            <span>3</span>
            <img src='https://i.ytimg.com/vi/ZN6P_GEJ7lk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLArRDGOCbDydEKeuj-wUgLybP2c-Q' className='w-32' />
          </div>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md'>
            <span>4</span>
            <img src='https://i.ytimg.com/vi/t6NI0u_lgNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxjxa_V0S6GlcZWXOVQtNQpNc2Qg' className='w-32' />
          </div>
          <div className='flex items-center gap-2 cursor-pointer hover:bg-gray-200 px-2 rounded-md' onClick={()=>setV('five')}>
            <span>5</span>
            <img src='https://i.ytimg.com/an_webp/jlHkDBEumP0/mqdefault_6s.webp?du=3000&sqp=CPXW5K8G&rs=AOn4CLBhL6eKMn7izXNgyktoHWCIfLVUTw' className='w-32' />
          </div>
          </div>
        </div>
        
        
        <div className='md:mx-16 mt-8'>
  <h2 className='text-2xl mb-2'>Any Doubts?</h2>
  <div className='mb-4 flex items-center w-[700px]'>
    <input
      type="text"
      placeholder="Ask your doubt ..."
      className="flex-1 px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none"
      value={doubt}
      onChange={(e) => setDoubt(e.target.value)}
    />
    <label className='ml-2 text-blue-500 cursor-pointer'><Mic /></label>
  </div>
  <button className='p-2 bg-blue-400 px-4 mt-2 text-white' onClick={handleSubmit}>Submit</button>

  {/* <div className="noteContainer">
        <h2>Record Note Here</h2>
        {isRecording ? <span>Recording... </span> : <span>Stopped </span>}
        <button className="button" onClick={storeNote} disabled={!note}>
          Save
        </button>
        <button onClick={() => setisRecording((prevState) => !prevState)}>
          Start/Stop
        </button>
        <p>{note}</p>
      </div>
      <div className="noteContainer">
        <h2>Notes Store</h2>
      </div> */}
  
  {loading && <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>}
  <p className="font-bold mt-4">Answer</p>
  {answer && 
  <p className='pb-6'>{answer}</p>
  }
</div>

      </div>
      {/* <div className='mx-24 mt-8'>
          <h2 className='text-2xl'>Seek to a Specific Time</h2>
          <input type="number" min={0} step="1" value={String(seekToTime)} onChange={handleSeekChange} />
          <button onClick={handleSeek}>Seek</button>
        </div> */}
    </Layout>
  );
}

export default Aitutor;
