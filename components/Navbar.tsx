import { AcademicCapIcon, HomeIcon, KeyIcon } from '@heroicons/react/solid'
import React from 'react'
import { useAuth } from '../context/AuthContext'



function Navbar() {
    const {user,logout} = useAuth() 
  return (
    <div className='w-[22.95rem] flex-shrink-0 rounded-r-2xl rounded-br-md shadow-2xl shadow-black/70   bg-[#001529]/[84%]'>
        <div className='flex flex-col justify-start  mt-2 divide-y divide-[#636363] '>
            <h1 className='text-white text-[1.689rem] p-2 font-light'>Welcome, {user.email.split(".")[0][0].toUpperCase()+user.email.split(".")[0].slice(1)}</h1>
            <div className='flex'>
            <HomeIcon className='w-6 text-white '/>
            <h1 className='text-white text-[1.689rem] p-2 font-normal'>Home</h1>
            </div>
            
            <div className='flex'>
            <AcademicCapIcon className='w-6 text-white '/>
            <h1 className='text-white text-[1.689rem]  p-2 font-normal'>Profile</h1>
            </div>
            <div className='flex'>
            <KeyIcon className='w-6 text-white '/>
            <h1 onClick={logout} className='text-white text-[1.689rem] hover:cursor-pointer  p-2 font-normal'>Logout</h1>
            </div>
            
        
        </div>
    </div>
  )
}

export default Navbar