import { useRouter } from 'next/router';
import React from 'react'

function SubjectAttendance() {
    const router = useRouter();
  const { id } = router.query;
 
  return (
    <div className=' bg-[#171717] items-center h-screen overflow-scroll min-h-screen flex flex-col'>
    <div className='p-4 mt-[2rem] flex flex-col justify-start w-[100%]'>
        <h1 className='text-white text-[1.5rem]'>{id}</h1>
        <h1 className='text-white text-[3rem] leading-none'>TLWG</h1>
    </div>

    <div className='h-[18rem] w-[18rem] flex justify-center items-center rounded-full bg-red-500'>
    <div className='h-[16rem] w-[16rem] rounded-full bg-[#171717] flex justify-center items-center'>
        <h1 className='font-bold text-white text-[6rem]'>98%</h1>
    </div>
    </div>

    <div className='flex flex-col gap-2 w-[100%] mt-2   flex-grow p-4'>
    
    <div className='flex justify-between  p-2 text-[1.7rem] bg-white/[10%] shadow-md rounded-xl'>
    <h1 className='text-white'>August</h1>
    <h1 className='text-white'>10/18</h1>
    </div>

    <div className='flex justify-between  p-2 text-[1.7rem] bg-white/[10%] shadow-md rounded-xl'>
    <h1 className='text-white'>September</h1>
    <h1 className='text-white'>10/18</h1>
    </div>

    <div className='flex justify-between  p-2 text-[1.7rem] bg-white/[10%] shadow-md rounded-xl'>
    <h1 className='text-white'>October</h1>
    <h1 className='text-white'>10/18</h1>
    </div>

    <div className='flex justify-between  p-2 text-[1.7rem] bg-white/[10%] shadow-md rounded-xl'>
    <h1 className='text-white'>November</h1>
    <h1 className='text-white'>10/18</h1>
    </div>

    </div>


    </div>
  )
}

export default SubjectAttendance