import React from 'react'

import {FaCircle} from 'react-icons/fa'

const SingleRepo = ({projectName, description, access, stack}) => {
  return (
    <div className='border border-gray-300 p-[16px] rounded-lg'> 
        <div className='flex justify-between items-center'>
            <h1 className='text-sm font-semibold text-blue-500'>{projectName}</h1>
            <span className='border border-gray-300 rounded-xl text-xs px-[7px]'>{access}</span>
        </div>

        <p className='text-sm mt-[15px] text-gray-500'>{description}</p>
        <p className='text-sm mt-[15px] text-gray-500 flex items-center'><FaCircle className='text-yellow-300 mr-[5px]'/>{stack}</p>

    </div>
  )
}

export default SingleRepo


