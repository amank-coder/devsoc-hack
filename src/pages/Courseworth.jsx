import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Courseworth = () => {
  
  const [link, setLink] = useState();
  const [showq, setShowq] = useState(false);

  const handleEnter = ()=>{
    setShowq(true);
  }
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showDetail, setShowdetail] = useState(false);


  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
    console.log(videoUrl)
    if(videoUrl=='video1')
    {
      setShowdetail(true);
    }
  };
  return (
    <Layout>
      <div className="">
        <div className="bg-blue-100 px-4 py-3 flex justify-between items-center mt-2 mr-4 rounded-lg">
            <p className="font-bold text-gray-800">Know the Course worth</p>  
          </div>
          <div className='grid grid-cols-3 gap-4 mx-4 mt-8'>
      <div className={` cursor-pointer ${selectedVideo === 'video1' ? 'hover:shadow-lg shadow-md shadow-blue-500 opacity-70' : ''}`} onClick={() => handleVideoSelect('video1')}>
        <img src='https://i.ytimg.com/an_webp/erUfLIi9OFM/mqdefault_6s.webp?du=3000&sqp=CNCM4q8G&rs=AOn4CLBHJwAEZebRxP_W3KDYUNOEhB5rDw' alt="Video 1" />
      </div>
      <div className={`cursor-pointer ${selectedVideo === 'video2' ? 'hover:shadow-lg shadow-md shadow-blue-500 opacity-70' : ''}`} onClick={() => handleVideoSelect('video2')}>
        <img src='https://i.ytimg.com/an_webp/ag3DLKsl2vk/mqdefault_6s.webp?du=3000&sqp=COf04a8G&rs=AOn4CLAWM7INyCtBV05bT2eL9f5Q4YwZPA' alt="Video 2" />
      </div>
      <div className={` cursor-pointer ${selectedVideo === 'video3' ? 'hover:shadow-lg shadow-md shadow-blue-500 opacity-70' : ''}`} onClick={() => handleVideoSelect('video3')}>
        <img src='https://i.ytimg.com/an_webp/mTVf7BN7S8w/mqdefault_6s.webp?du=3000&sqp=CMDX4a8G&rs=AOn4CLAv41tm4HUADH8jZ6tqRg21O5XK6Q' alt="Video 3" />
      </div>
    </div>
    {showDetail && (
      <div className='mt-4 ml-2'>
        <span className='font-semibold'>Course name: </span><span>LLM LangChain project using VectorDB</span><br />
        <span className='font-semibold'>Author name: </span><span>Krish Naik</span><br />
        <span className='font-semibold'>Description: </span><span>In this video we will be creeating an end to end LLM Project with vector.Pinecone makes it easy to provide long-term memory for high-performance AI applications. It’s a managed, cloud-native vector database with a simple API and no infrastructure hassles. Pinecone serves fresh, filtered query results with low latency at the scale of billions of vectors. database</span>
      </div>
    )
    
    }


      </div>
    </Layout>
  );
}

export default Courseworth;
