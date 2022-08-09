import React, { useState } from 'react'
import Image from 'next/image'
import { app, auth } from "../components/FirebaseConfig";
import { useRouter } from 'next/router';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import App from '../node_modules/next/app';

export default function login() {
    var [email,setEmail]=useState("")
    var [password,setPassword]=useState("")
    const [error, setError] = useState(null);
    const router = useRouter() 
    
   

    const LogIn = () => {
        console.log("process...")
        setError(null)
        signInWithEmailAndPassword(auth,email+"@srec.ac.in", password)
        .then(() => {
          router.push('/');
        })
        .catch(error => {
          setError(error.message)
          window.alert("Invaid email or password")
        });
      };


  return (
    <div>
    <Image className='relative' src="/srecbg.jpg"  layout='fill'/>
    <div className="relative flex items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center h-2/3 max-h-[636px] max-w-[528px] w-2/3 p-2 rounded-3xl shadow-2xl bg-white/70 backdrop-blur-sm  flex-justify">
          <div className="flex justify-start w-2/3 gap-2 p-2 mt-6">
          <Image src="/logo.png" height={95} width={300} layout='fixed'/>
            
                
            
            <div className="flex flex-col">
                <h1 className='text-[#0496FF] leading-none uppercase font-bold text-[0.8rem]'>Sri Ramakrishna Engineering College
An AUTONOMOUS Institution</h1>
<p className='leading-none text-black font-light text-[0.7rem]'>Reaccredited by NAAC with 'A+' Grade,<br></br>
ISO 9001:2015 certified, All eligible programmes Accredited by NBA,
Approved by AICTE, permanently Affiliated to Anna University, Chennai.</p>
            </div>
     
            </div>
            <pre>{email+"@srec.ac.in"}</pre>
           
            <h1 className='font-semibold mt-4 text-[#FF0000]/60  text-[1.7rem] text-shadow-md'>SREC Certificate Portal</h1>
            <h1 className='font-medium text-[#9C7878] mt-4 text-[1.8rem]'>Welcome, Sign in to continue</h1>
            <div className="flex flex-col justify-start w-3/4 mt-6 space-y-16">
                <div className="relative">
                <input value={email} onChange={(event)=>{setEmail(event.target.value)}} className='block h-[3.8rem] text-[1.25rem]  w-full placeholder:text-[D9D9D9] placeholder:text-[1.25rem] p-2 rounded-full shadow-mds focus:outline-none' style={{padding:"20px"}} type="text" placeholder='Email' required/>
                <h1 className='absolute top-[0.8rem] font-semibold text-[1.25rem] right-6'>@srec.ac.in</h1>
                </div>
                <input value={password} onChange={(event)=>{setPassword(event.target.value)}}  className='p-2 h-[3.8rem] text-[1.25rem] placeholder:text-[D9D9D9] placeholder:text-[1.25rem] rounded-full shadow-md  focus:outline-none' style={{padding:"20px"}} type="password" placeholder='Password' required/>
            </div>
            <button onClick={LogIn} className='p-2  w-1/2 rounded-full h-[4rem]  mt-14 font-bold text-white bg-[#00BDC9] text-[1.5rem]'>LOGIN</button>
        </div>
   
    </div>
   
    </div>
  )
}