import React,{useState,useRef, useContext} from 'react'
import { HiOutlineClipboardCheck,HiOutlineFolderOpen,HiOutlinePresentationChartLine,HiOutlineBriefcase,HiOutlineSparkles } from "react-icons/hi";

import profileImg from '../assets/images/profile.webp'

import { HiUser,HiOutlineGlobeAlt,HiFolderAdd,HiOutlineX} from "react-icons/hi";
import SingleRepo from './SingleRepo';
import { Store } from '../App';


const Home = () => {

  const datas = useContext(Store)
  console.log(datas.logindata)

  const [follow, setfollow] = useState(false)

  const repoRef = useRef(null);
  const descRef = useRef(null);
  const stackRef = useRef(null);
  const accessRef = useRef(null);

  const [newRepo, setnewRepo] = useState(true)

  const [data, setdata] = useState([])
  const submitRepo = () =>{
    setdata([...data,{
      projectName: repoRef.current.value,
      description: descRef.current.value,
      stack: stackRef.current.value,
      access: accessRef.current.value
    }])

    console.log(data)
  }

  return (
    <div className='w-full h-screen'>

      {/* 1 */}
        <div className='flex justify-center w-full h-[50px] mt-[30px]'>
            <ul className='flex'>
                <li className='flex mx-[20px] px-[10px] font-light items-center hover:bg-slate-200 hover:rounded-xl'><HiOutlineClipboardCheck className='mr-[10px]'/>Overview</li>
                <li className='flex mx-[20px] px-[10px] font-light items-center  hover:bg-slate-200 hover:rounded-xl'><HiOutlineFolderOpen className='mr-[10px]'/>Repositories</li>
                <li className='flex mx-[20px] px-[10px] font-light items-center hover:bg-slate-200 hover:rounded-xl'><HiOutlinePresentationChartLine className='mr-[10px]'/>Project</li>
                <li className='flex mx-[20px] px-[10px] font-light items-center hover:bg-slate-200 hover:rounded-xl'><HiOutlineBriefcase className='mr-[10px]'/>Package</li>
                <li className='flex mx-[20px] px-[10px] font-light items-center hover:bg-slate-200 hover:rounded-xl'><HiOutlineSparkles className='mr-[10px]'/>Stars</li>
            </ul>
        </div>

        {/* 2 */}
        

        {/* 3 */}
        <div className="flex flex-row mt-[50px]">

          <div className="basis-1/4">
            <div className='flex flex-col items-center'>
              <img src={profileImg} className=' w-[296px] h-[296px] rounded-full'/>
              <h1 className='text-xl font-bold mt-[20px]'>{datas.logindata}</h1>
              <p className='text-slate-500'>@github.{datas.logindata}123</p>
              {
              !follow 
              ? 
             <button className='border border-gray-300 w-2/3 mt-[20px] rounded-md bg-blue-500 p-[5px] text-sm hover:bg-blue-600 text-white' onClick={()=>setfollow(!follow)}>Follow</button>
              : 
             <button className='border border-gray-300 w-2/3 mt-[20px] rounded-md bg-slate-100 p-[5px] text-sm hover:bg-slate-200' onClick={()=>setfollow(!follow)}>Following....</button>

              }
              <p className='w-2/3 mt-[20px] text-slate-700'>Anyone can use my code in-order to build something cool and big platform.</p>
              <ul className=' flex w-2/3 mt-[10px]'>
                <li className='hover:text-blue-400 flex items-center text-slate-500 text-sm'><HiUser/>0 followers</li>
                <li className='ml-[10px] hover:text-blue-400 text-slate-500 text-sm'>1 following</li>
              </ul>
              <p className='w-2/3 mt-[30px] text-slate-500 flex items-center text-sm'><HiOutlineGlobeAlt className='mr-[5px]'/>Sydney</p>
              <p className='w-2/3 mt-[30px] text-slate-500 flex items-center text-sm  hover:text-blue-400'>Block or Report</p>
            </div>
          </div>

          <div className="basis-3/4">
            {newRepo ? 
              <div className='flex items-center w-full h-[25px] mt-[30px]'>
                <input className='w-1/3 border border-gray-700 text-gray-700 p-[5px] rounded-lg mr-6' placeholder='Find a repository...'/>  
                <button className='flex items-center bg-green-600 rounded text-white px-[10px] text-lg' onClick={()=>setnewRepo(!newRepo)}><HiFolderAdd className='mr-[5px]'/>New</button>
              </div>
                :
                <div className='flex items-center w-full mt-[30px] h-auto'>
                  <div className='w-1/2  h-full drop-shadow-md bg-white rounded-md p-5'>
                      <div className='flex justify-between items-center'>
                        <h1 className='text-gray-400 font-bold font-mono text-2xl'>New Repository</h1>
                        <HiOutlineX className='hover:rounded-full hover:bg-slate-500 hover:text-white' onClick={()=>setnewRepo(!newRepo)}/>
                      </div>

                      <div className='border border-gray-300 p-[16px] rounded-lg mt-[10px]'> 
                          <div className='flex justify-between items-center'>                 
                              <input ref={repoRef} placeholder='repository name'  className='text-blue-500 font-semibold text-sm ' />
                              <input ref={accessRef} placeholder='access'  className='text-gray-500 font-semibold text-sm ' />
                          </div>
                          <input ref={descRef} placeholder='description'  className='text-gray-500  text-sm  mt-[15px]' /><br/>
                          <input ref={stackRef} placeholder='stack'  className='text-gray-500  text-sm  mt-[15px]' />
                          <br />
                          <button className=' border border-gray-500 rounded text-gray-400 px-[10px] hover:text-white hover:bg-slate-800 mt-[20px]' onClick={()=>submitRepo()}>Continue</button>         
                      </div>
                  </div>
                </div>
             }
            <h1 className='text-lg font-semibold text-gray-700 mt-[70px] '>Popular repositories</h1>
            <div className="grid grid-cols-2 gap-6 mt-[20px] mr-[200px]">
              <SingleRepo projectName='NFT-website showcase' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              <SingleRepo projectName='Python Webscraping' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              <SingleRepo projectName='Asp.Net backend code' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              <SingleRepo projectName='API rendering Methods' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              <SingleRepo projectName='Native Applicaiton' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              <SingleRepo projectName='React Data Visualization' description='This is a webapp for NFT show case' access='public' stack='javascript'/>
              {
                !data ? null : 
                data.map((item) => <SingleRepo key={item.desc} projectName={item.projectName} description={item.description} access={item.access} stack={item.stack}/>)
              }
            </div>
          </div>

        </div>
      
    </div>
  )
}

export default Home