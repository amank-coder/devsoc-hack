import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import ReactPlayer from 'react-player';


const Aitutor = () => {
    const handleProgress = (state) => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking

      }

  return (
    <Layout>
      <div className='mt-8 flex flex-col'>
     
        <div className='mx-auto'>
          {/* <iframe
            id="youtube-player"
            width="750"
            height="423"
            src="https://www.youtube.com/embed/MoqgmWV1fm8?list=PLeo1K3hjS3uu0N_0W6giDXzZIcB07Ng_F"
            title="LLM Project | End to End LLM Project Using Langchain, OpenAI in Finance Domain"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe> */}
          <ReactPlayer url='https://youtu.be/MoqgmWV1fm8?si=_IfsW2G-oSExXBSB' onProgress={handleProgress} controls/>
        </div>
        <div className='mx-24 mt-8'>
          <h2 className='text-2xl'>Any Doubts?</h2>
          <div className='mb-4'>
            <input type="text" placeholder='Ask your doubt ...' className='w-full px-3 py-2 border rounded-lg bg-gray-200 focus:border-blue-500 focus:outline-none' />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Aitutor;
