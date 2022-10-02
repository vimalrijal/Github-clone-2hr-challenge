import React from 'react'

import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full h-[72px] bg-slate-800 flex justify-between items-center '>
        <div className='flex ml-[200px] items-center'>
            <FaGithub className='text-white w-[32px] h-[32px]'/>
            <ul className='flex ml-[50px]'>
                <li className='p-[10px] text-white'>Product</li>
                <li className='p-[10px] text-white'>Solution</li>
                <li className='p-[10px] text-white'>Open Source</li>
                <li className='p-[10px] text-white'>Pricing</li>
            </ul>
        </div>
        <div className='flex mr-[300px]'>
         <input placeholder='Search' className='bg-slate-800 border border-slate-500 rounded py-[8px] px-[20px] text-[14px] text-white'/>
         <button className='text-white mx-[10px]'>Sign In</button>
         <button className='mx-[10px] border border-white rounded text-white px-[10px] hover:text-gray-200'><Link to='/login'>Sign Up</Link></button>
        </div>
    </div>
  )
}

export default Navbar