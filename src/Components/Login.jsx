import React,{useRef, useContext} from 'react'
import { HiArrowSmRight } from "react-icons/hi";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Store } from '../App';


const Login = () => {
    const navigate = useNavigate();
    const userRef = useRef();
    const context = useContext(Store);

    const submitUser = () =>{
        // storing user login data into context
        context.setlogindata(userRef.current.value);
        navigate('/userHome')

    }

  return (
        <div className=' flex  w-full h-screen bg-gray-900  place-content-center'>
            <div className='w-[600px] h-1/3 border border-gray-700 rounded-xl  mt-[150px] bg-gray-900'>
                <div className='flex flex-col m-[30px]'>
                    <p className='text-slate-500 font-mono'>Welcome to Github.com</p>
                    <p className='text-slate-500 font-mono mt-[5px]'>Let's Begin the adventure</p>
                    <h1 className='mt-[20px] font-bold font-mono text-teal-300'>Enter Your Username</h1>
                    <div className='flex mt-[20px] justify-between items-center'>
                    <HiArrowSmRight className='text-pink-500 text-2xl'/>
                    <input ref={userRef} className='w-1/2 border border-gray-700 bg-gray-900 text-white p-[5px] rounded-lg' placeholder='Username'/>
                    {/* <button className='mx-[10px] border border-gray-700 rounded text-gray-500 px-[10px] hover:text-gray-200' onClick={()=>submitUser()}><Link to='userHome'>Continue</Link></button> */}
                    <button className='mx-[10px] border border-gray-700 rounded text-gray-500 px-[10px] hover:text-gray-200' onClick={()=>submitUser()}>continue</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login