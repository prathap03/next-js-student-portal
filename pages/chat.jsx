import React from 'react'

export default function chat() {
  return (
    <div className='min-h-screen min-w-screen h-[100%] w-[100%] bg-gradient-to-r from-[#40414f] to-[#343541] flex'>
        <div className='min-h-screen h-max bg-[#202123] w-[13.5vw]'>
            hello
        </div>
        <div className='flex flex-col justify-center flex-grow'>
            <div className='flex flex-col items-center justify-center flex-grow gap-4 h-max '>
            <h1 className='font-sans text-[2.5rem] font-bold text-white'>ChatGPT</h1>
            <div className='flex w-[36vw]  mt-[4rem] text-white font-sans font-semibold text-[1.1rem] justify-between '>
                <div className='flex flex-col items-center gap-4'>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <path d="M12 1L12 3"></path>
      <path d="M12 21L12 23"></path>
      <path d="M4.22 4.22L5.64 5.64"></path>
      <path d="M18.36 18.36L19.78 19.78"></path>
      <path d="M1 12L3 12"></path>
      <path d="M21 12L23 12"></path>
      <path d="M4.22 19.78L5.64 18.36"></path>
      <path d="M18.36 5.64L19.78 4.22"></path>
    </svg>
    <h1>Examples</h1>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>"Explain quantum computing in simple terms" →</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>"Got any creative ideas for a 10 year old’s birthday?" →</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>"How do I make an HTTP request in Javascript?" →</h1>
    </div>
                </div>

                <div className='flex flex-col items-center gap-4'>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      ariaHidden="true"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      ></path>
    </svg>
    <h1>Capablities</h1>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>Remembers what user said earlier in the conversation</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>Allows user to provide follow-up corrections</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>Trained to decline inappropriate requests</h1>
    </div>
    
                </div>

                <div className='flex flex-col items-center gap-4'>
                <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className="w-6 h-6"
      viewBox="0 0 24 24"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path>
      <path d="M12 9L12 13"></path>
      <path d="M12 17L12.01 17"></path>
    </svg>
    <h1>Limitations</h1>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>May occasionally generate incorrect information</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>May occasionally produce harmful instructions or biased content</h1>
    </div>
    <div className='text-wrap hover:bg-[#272831] hover:cursor-pointer font-normal text-center text-[0.8rem] rounded-md shadow-md p-4 w-[14rem] bg-[#40414f] '>
        <h1>Limited knowledge of world and events after 2021</h1>
    </div>
    
                </div>
                
                
                
            </div>
            
            </div>
            <div className='flex items-center justify-center flex-grow'>
                <div className='rounded-md items-center flex gap-2 text-[0.99rem] outline-none border-black text-white bg-[#40414f] shadow-md h-[2.8rem] w-[48%]'>
                    <input type='text' className="p-4 rounded-md rounded-r-none  text-[0.99rem] outline-none border-black text-white bg-[#40414f] w-[100%]  h-[2.8rem]" name="" id="" />
                    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-8 h-8 p-2 ml-4 mr-4 rounded-md hover:bg-black"
      viewBox="0 0 24 24"
    >
      <path d="M22 2L11 13"></path>
      <path d="M22 2L15 22 11 13 2 9 22 2z"></path>
    </svg>
                </div>
            </div>
        </div>
        
    </div>
  )
}
