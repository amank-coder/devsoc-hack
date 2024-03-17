import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import ReactPlayer from 'react-player';

const Aitutor = () => {
  const playerRef = useRef(null);
  const [seekToTime, setSeekToTime] = useState(0);

  const handleSeekChange = (e) => {
    setSeekToTime(parseFloat(e.target.value));
  }

  const handleSeek = () => {
    if (playerRef.current) {
      console.log(seekToTime);
      playerRef.current.seekTo(seekToTime, 'seconds');
    }
  }

  return (
    <Layout>
      <div className='mt-8 flex flex-col'>
        <div className='mx-auto'>
          <ReactPlayer ref={playerRef} url='https://youtu.be/MoqgmWV1fm8?si=_IfsW2G-oSExXBSB' controls />
        </div>
        
        <div className='mx-24 mt-8'>
          <h2 className='text-2xl'>Any Doubts?</h2>
          <div className='mb-4'>
            <input type="text" placeholder='Ask your doubt ...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' />
            <button className='p-2 bg-blue-400 px-4 mt-2 text-white'>Submit</button>
          </div>
        </div>
      </div>
      <div className='mx-24 mt-8'>
          <h2 className='text-2xl'>Seek to a Specific Time</h2>
          <input type="number" min={0} step="1" value={String(seekToTime)} onChange={handleSeekChange} />
          <button onClick={handleSeek}>Seek</button>
        </div>
    </Layout>
  );
}

export default Aitutor;
