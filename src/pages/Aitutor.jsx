import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Aitutor = () => {
  
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [seekToTime, setSeekToTime] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [doubt, setDoubt] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);




  const handleSeekChange = (e) => {
    setSeekToTime(parseFloat(e.target.value));
  }

  const handleSeek = () => {
    if (playerRef.current) {
      console.log(seekToTime);
      playerRef.current.seekTo(seekToTime, 'seconds');
    }
  }

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    if (selectedValue === 'Hindi') {
      navigate('/ai-tutor/hindi'); // Assuming you have navigate function available
    }
  };

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
  

  return (
    <Layout>
      <div className='mt-8 flex flex-col'>
      <div className='text-end mr-16 mb-8'>
      <select className='w-32 px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' onChange={handleChange}>
        <option>English</option>
        <option >Hindi</option>
      </select>
      </div>
      
        <div className='mx-auto hidden md:block'>
          <ReactPlayer ref={playerRef} url='https://www.youtube.com/watch?v=bns5ELvbzVk' controls />
        </div>
        <div className='mx-auto md:hidden'>
          <ReactPlayer ref={playerRef} url='https://www.youtube.com/watch?v=bns5ELvbzVk' controls width="300px" height="200px"/>
        </div>
        
        <div className='md:mx-24 mt-8'>
          <h2 className='text-2xl mb-2'>Any Doubts?</h2>
          <div className='mb-4'>
          <input
            type="text"
            placeholder="Ask your doubt ..."
            className="w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none"
            value={doubt}  // Add this line to set the value of the input field
            onChange={(e) => setDoubt(e.target.value)}
          />

            <button className='p-2 bg-blue-400 px-4 mt-2 text-white' onClick={handleSubmit}>Submit</button>
            {loading && <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><circle cx="18" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".67" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="6" cy="12" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>}
            <p className="font-bold mt-4">Answer</p>
            {answer && 
            <p>{answer}</p>
            }
          </div>
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
