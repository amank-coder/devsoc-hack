import React, { useState } from 'react';
import Layout from '../components/layout/Layout';

const Courseworth = () => {
  
  const [link, setLink] = useState();
  const [showq, setShowq] = useState(false);

  const handleEnter = ()=>{
    setShowq(true);
  }
  return (
    <Layout>
      <div className="">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full pr-8 mt-8">
          <div className="bg-blue-100 px-4 py-3 flex justify-between items-center">
            <p className="font-bold text-gray-800">Know the Course worth</p>
            
          </div>
          <div className="p-4 space-y-2">
            
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <input type="text" placeholder="Enter the course link..." className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md shadow-blue-300" onChange={(e)=>setLink(e.target.value)}/>
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleEnter}>Enter</button>
          </div>
          <div className={`${showq? 'px-4 py-3 flex flex-col items-center justify-between' : 'hidden'}`}>
            <input type="text" placeholder="Type your question..." className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md shadow-blue-300 w-full"/>
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-2" onClick={handleEnter}>Submit</button>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Courseworth;
