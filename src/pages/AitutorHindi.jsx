import Layout from '../components/layout/Layout'
import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const AitutorHindi = () => {
    const navigate = useNavigate();
  const playerRef = useRef(null);
  const [seekToTime, setSeekToTime] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState('English');


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
    if (selectedValue === 'English') {
      navigate('/ai-tutor'); // Assuming you have navigate function available
    }
  };

  const handleClick = ()=>{
    const text = "koi bhi data science pariyojna data sangrah prakriya se shuru hoti hai। jhil krishi mein data ektra karne ke teen vikalp hain। sabse pahle, ham taiyar data ka upyog kar sakte hain। ham ise ya to kisi teesre paksh ke vikreta se kharid sakte hain ya kaggle aadi se prapt kar sakte hain। dusra vikalp yah hai ki hamare pass data enoteters ki ek team ho jo kisaanon se ine chhaviyon ko ektra karne aur un chhaviyon ko swasth ya der se jhulas ke roop mein enotet karne ka kam kare। enoteters ki yah team kisaanon ke sath kam kar sakti hai। ve shayad kheton mein jaakar kisaanon se poochh sakte hain";
    
    const value = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(value);
  }
  
    return (
    <Layout>
      <div className='mt-8 flex flex-col'>
      <div className='text-end mr-16 mb-8'>
      <select className='w-32 px-3 py-2 border rounded-lg bg-gray-100 focus:border-blue-500 focus:outline-none' onChange={handleChange} value={'Hindi'}>
        <option>English</option>
        <option >Hindi</option>
      </select>
      </div>
      
        <div className='mx-auto hidden md:block'>
          <ReactPlayer ref={playerRef} url='https://youtu.be/MoqgmWV1fm8?si=_IfsW2G-oSExXBSB' controls />
        </div>
        <div className='mx-auto md:hidden'>
          <ReactPlayer ref={playerRef} url='https://youtu.be/MoqgmWV1fm8?si=_IfsW2G-oSExXBSB' controls width="300px" height="200px"/>
        </div>
        
        <div className='md:mx-24 mt-8'>
        <button onClick={handleClick}>Translate audio</button>
          <h2 className='text-2xl mb-2'>Any Doubts?</h2>
          <div className='mb-4'>
            <input type="text" placeholder='Ask your doubt ...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' />
            <button className='p-2 bg-blue-400 px-4 mt-2 text-white'>Submit</button>
          </div>
        </div>
      </div>
      {/* <div className='mx-24 mt-8'>
          <h2 className='text-2xl'>Seek to a Specific Time</h2>
          <input type="number" min={0} step="1" value={String(seekToTime)} onChange={handleSeekChange} />
          <button onClick={handleSeek}>Seek</button>
        </div> */}
    </Layout>
  )
}

export default AitutorHindi