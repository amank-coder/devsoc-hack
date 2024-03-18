import React from 'react'
import Layout from '../components/layout/Layout.jsx';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Layout>
        <div>
            <h2 className="mt-6 text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-200 bg-clip-text text-transparent">Welcome back {user?.name.toUpperCase()}</h2>
        </div>
    </Layout>
  )
}

export default Dashboard