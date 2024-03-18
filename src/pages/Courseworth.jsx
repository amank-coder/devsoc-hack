import React from 'react';
import Layout from '../components/layout/Layout';

const Courseworth = () => {
  return (
    <Layout>
      <div className="">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full pr-8 mt-8">
          <div className="bg-gray-200 px-4 py-3 flex justify-between items-center">
            <p className="font-bold text-gray-800">Know the Course worth</p>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
              
            </button>
          </div>
          <div className="p-4 space-y-2">
            <div className="flex items-start">
              <div className="rounded-lg bg-gray-100 p-3">
                <p className="text-sm text-gray-800">Hello! Enter the Course link ?</p>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 flex items-center justify-between">
            <input type="text" placeholder="Type your message..." className="flex-1 bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md shadow-blue-300" />
            <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Courseworth;
