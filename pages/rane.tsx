import React, { useState } from 'react'
import { Transition } from '../node_modules/@headlessui/react/dist/index';
import Image from '../node_modules/next/image'


function Rane() {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <>
    <div className="flex w-screen h-screen bg-gray-200">
  
            <Transition 
            show={isOpen}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div  className="flex flex-col w-[18vw] h-[100%] bg-blue-600 transition-all ease-in  visible:transition-all visible:ease-in duration-100">
            <div className="flex flex-col items-center gap-2 p-4 bg-gray-500">
            <Image src={"/rane.png"} width={120} height={80}/>
            <h1 className='font-semibold text-[1.6rem]'>Rane (Madras) Limited</h1>
            </div>
            <div className='flex flex-col p-2 '>
            <h1 className='text-[1.8rem]  text-white'>Profile</h1>
            <div className='p-2'>
            <div className='gap-2 mt-2'>
                <div className='flex gap-2 text-white'>
                <div className='rotate-[-30deg]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.7rem] h-[1.7rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
                </div>
            
            <h1 className='text-[1.7rem] font-semibold text-white'>About</h1>
                </div>
            
            
            </div>
            <div className='gap-2 mt-2'>
                <div className='flex gap-2 text-white'>
                <div className='rotate-[-30deg]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.7rem] h-[1.7rem]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
                </div>
            
            
            <h1 className='text-[1.7rem] font-semibold text-white'>Help</h1>
                </div>
            
            
            </div>
            </div>
            </div>
            
            </div>
            </Transition>
      

<div className='flex flex-col items-center flex-grow gap-10 p-6 m-2'>
    <div className='flex justify-between items-center w-[100%] p-8  rounded-md shadow-md bg-white'>
    <button onClick={()=>{setIsOpen(!isOpen)}} className='p-2 text-white bg-blue-600 rounded-md '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>

    </button>
    <h1 className=' text-[2.5rem] font-serif'>VISITORS SMART KIOSK</h1>
    <button className='p-2 mr-2 text-white bg-blue-600 rounded-md'>Login</button>
    </div>
    <h1 className='font-semibold underline text-[2rem]'>Enter Your Credentials</h1>
    <div className='flex justify-between w-3/4 p-4 rounded-lg shadow-lg h-3/4 bg-gradient-to-r from-gray-400 to-blue-200'>
        <div className='w-1/2 '>
            <Image src="/login.png" width={200} height={210}  layout="responsive"></Image>
        </div>
    <div className='flex flex-col items-center flex-grow gap-8 p-12 '>
        <h1 className=' text-[2.3rem] font-serif'>Sign In</h1>
     <div className='flex flex-col w-5/6 gap-20 mt-4'>
     <div className='flex shadow-lg'>
        <div className='p-4 text-white bg-blue-700 rounded-l-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

        </div>
        <input className='w-[100%] rounded-r-lg' type="text" placeholder='Employee Number' style={{padding:"10px"}} />
        </div>
        
        <div className='flex shadow-lg'>
        <div className='p-4 text-white bg-blue-700 rounded-l-lg'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

        </div>
        <input className='w-[100%] rounded-r-lg' type="password" placeholder='Password' style={{padding:"10px"}} />
        </div>
     </div>
     <div className='flex justify-end  w-[100%] pr-10'>
        <h1 className='text-[1.3rem]'> 
            Forgot <span className='font-semibold text-red-500 underline hover:text-red-600 hover:cursor-pointer'>Password?</span>
        </h1>
     </div>
    <button className='w-1/3 p-4 text-white bg-blue-500 rounded-md shadow-md'>Login</button>
    </div>
    </div>
</div>

</div>



    </>
  )
}

export default Rane