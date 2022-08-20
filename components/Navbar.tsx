import { AcademicCapIcon, HomeIcon, KeyIcon,CloudIcon } from '@heroicons/react/solid'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from '../node_modules/next/router'



function Navbar() {
    const {user,logout} = useAuth() 
    const router = useRouter()
  return (
    <div className='w-[22.95rem]  flex-shrink-0 rounded-r-2xl rounded-br-md shadow-2xl shadow-black/70   bg-[#001529]/[84%]'>
        <div className='flex flex-col justify-start  mt-2 divide-y divide-[#636363] '>
            <h1 className='text-white text-[1.689rem] p-2 font-light'>Welcome, <span className='transition duration-150 hover:text-blue-500'>{user.email.split(".")[0][0].toUpperCase()+user.email.split(".")[0].slice(1)}</span> </h1>
            <div className='flex transition duration-100  ease-in hover:scale-105 hover:pl-2 hover:bg-[#001529]/[40%] hover:cursor-pointer' onClick={()=>{router.push("/")}}>
            <HomeIcon className='w-6 text-white '/>
            <h1 className='text-white hover:text-blue-500 text-[1.689rem] p-2 font-normal'>Home</h1>
            </div>
            
            <div  onClick={()=>{router.push("/profile")}} className='flex transition duration-100 ease-in hover:scale-105 hover:pl-2 hover:bg-[#001529]/[40%] hover:cursor-pointer'>
            <AcademicCapIcon className='w-6 text-white '/>
            <h1 className='text-white hover:text-blue-500 text-[1.689rem]  p-2 font-normal'>Profile</h1>
            </div>

            <div className='flex transition duration-100  ease-in hover:scale-105 hover:pl-2 hover:bg-[#001529]/[40%] hover:cursor-pointer' onClick={()=>{router.push("/upload")}}>
            <CloudIcon className='w-6 text-white '/>
            <h1 className='text-white hover:text-blue-500 text-[1.689rem] p-2 font-normal'>Upload</h1>
            </div>
            
            <div className='flex transition duration-100 ease-in hover:scale-105 hover:pl-2 hover:bg-red-500/[40%] hover:cursor-pointer'>
            <KeyIcon className='w-6 text-white '/>
            <h1 onClick={logout} className='text-white text-[1.689rem] hover:cursor-pointer  p-2 font-normal'>Logout</h1>
            </div>
            
        
        </div>
    </div>
  )
}

export default Navbar