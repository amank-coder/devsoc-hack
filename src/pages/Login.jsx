import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  
  const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        if(!email || !password)
        {
          return alert("Provide all fields")
        }

        const { data } = await axios.post(`https://nodejs-production-37b9.up.railway.app/api/auth/login`,{
          email, password

        })

        console.log(data)
        if(data?.success)
        {
          console.log(data)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user",JSON.stringify(data.user))
          alert("Login successful");
          navigate("/dashboard");
        }
      }catch(err)
      {
        alert("Invalid! Try again")
        console.log(err);
      }
  }
  return (
    <>
      
      
        <div className="bg-custom bg-cover min-h-screen">

        
      <div className='flex flex-col gap-8 items-center pt-16 pb-8 md:flex-row md:justify-center md:px-10 text-black'>
        <div className='bg-[rgba(255,255,255,0.78)] p-8 rounded-md shadow-lg shadow-blue-200' >
          <h1 className='text-2xl font-bold pb-8 text-center'>Login</h1>
          <form className='border-black-100 px-4' onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" placeholder='Your username' className='my-4 border-b-2 w-full outline-none bg-transparent' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input name="password" type='password' placeholder='Your password' className='my-4 border-b-2 w-full outline-none bg-transparent' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button className='btn btn-lg bg-purple-700 rounded-md text-white text-center py-2 w-full mt-4 hover:bg-purple-800' type="submit"> Login </button>
          </form>
          <div className='flex justify-between'>
          <p className='ml-4 mt-4 cursor-pointer hover:text-sky-800' >Forgot Password</p>
          <a href="/" className='text-center mt-4 cursor-pointer underline p-0' >Go to home page</a>
          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default Login;