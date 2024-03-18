import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';

const Courseworth = () => {
  
  const [link, setLink] = useState();
  const [showq, setShowq] = useState(false);

  const handleEnter = ()=>{
    setShowq(true);
  }
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showDetail, setShowdetail] = useState(false);
  const [res1, setRes1] = useState('');
  const [res2, setRes2] = useState('')
  const [res3, setRes3] = useState('')
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');


  const handleVideoSelect = (videoUrl) => {
    setSelectedVideo(videoUrl);
    console.log(videoUrl)
    if(videoUrl=='video1')
    {
      setShowdetail(true);
    }
  };

  const getDescription = async()=>{
    const { data } = await axios.get('http://127.0.0.1:5000/discription');
    console.log(data);
    setRes1(data.response1);
    setRes2(data.response2);
    setRes3(data.response3);
  }

  const handleSubmit = async()=>{
    console.log(query);
    const { data } = await axios.post('http://127.0.0.1:5000/worth',{query});
    setResult(data.answer);
  }

  useEffect(()=>{
    getDescription();
  },[])
  return (
    <Layout>
      <div className="">
        <div className="bg-blue-100 px-4 py-3 flex justify-between items-center mt-2 mr-4 rounded-lg">
            <p className="font-bold text-gray-800">Know the Course worth</p>  
          </div>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-4 mt-8'>
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
        <span className='font-semibold'>Description: </span><span>In this video we will be creeating an end to end LLM Project with vector.Pinecone makes it easy to provide long-term memory for high-performance AI applications. It’s a managed, cloud-native vector database with a simple API and no infrastructure hassles. Pinecone serves fresh, filtered query results with low latency at the scale of billions of vectors. database</span><br />
        <span className='font-semibold'>Tech Stack: </span><br /><span>{res1}</span><br />
        <span className='font-semibold'>Topics Covered: </span><br /><span>{res2}</span><br />
        <span className='font-semibold'>Project Included : </span><br /><span>{res3}</span><br />

        <div className="px-4 py-3 flex items-center justify-between mt-6 mr-4 -ml-4">
            <input type="text" placeholder="Type your query..." className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md shadow-blue-300" onChange={(e)=>setQuery(e.target.value)}/>
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleSubmit}>Send</button>
          </div>
          <div>
            <h2 className="font-semibold mt-4">Answer</h2>
            <p>{result}</p>
          </div>
      </div>
      
    )
    
    }



      </div>
    </Layout>
  );
}

export default Courseworth;
