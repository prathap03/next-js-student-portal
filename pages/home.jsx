import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { fireStore, storage } from '../lib/firebase';
import Link from 'next/link';

function Home() {

    const [number,setNumber] = useState(0);
    const [subjects,setSubjects] = useState([]);

    const fetchSubjects = async () => {
        await getDocs(collection(fireStore,"nfc/attendance/subjects")).then((querySnapshot)=>{
            const newData = querySnapshot.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            ));
            // setSubjects([newData]);
            console.log(subjects)
        })
    }
    
    function timestampToTimeOfDay(timestamp) {
        const date = new Date(timestamp*1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();
      
        // Determine AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
      
        // Convert hours to 12-hour format
        const formattedHours = (hours % 12) || 12;
      
        // Format the time components as two digits
        const formattedMinutes = minutes.toString().padStart(2, '0');
      
        return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
      }
      
 

    useEffect(  () => {
        
        const unsub = onSnapshot(doc(fireStore, "nfc/attendance/subjects/20EC2990"), (doc) => {
            console.log("Current data: ", doc.data());
            setSubjects([doc.data()])
        });
        // if (number==98) return;
        // setNumber(number+1) 
        fetchSubjects()

        return unsub;
            
      
    
     
    }, [])
    
  return (
    <div className=' bg-[#171717] h-screen overflow-scroll min-h-screen flex flex-col'>
        <div className='flex flex-col'>
            <div className='overflow-y-scroll no-scrollbar gap-4 flex-shrink-0 p-2 justify-between flex flex-row w-full h-[5rem] mt-[2rem]'>
                <div className='flex flex-col items-center justify-center p-4 text-black rounded-full font-bold bg-[#737373]'>
                    <h1>23</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-black rounded-full bg-[#737373]'>
                    <h1>24</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-white rounded-full bg-[#737373]'>
                    <h1>25</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-black rounded-full bg-[#737373]'>
                    <h1>26</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 text-black font-bold rounded-full bg-[#737373]'>
                    <h1>27</h1>
                    <h1>AUG</h1>
                </div>
                <div className='flex flex-col items-center justify-center p-4 text-black font-bold rounded-full bg-[#737373]'>
                    <h1>28</h1>
                    <h1>AUG</h1>
                </div>


            </div>


            <div className='flex flex-col flex-grow gap-2 m-4'>

         {subjects && subjects.length > 0 && subjects.map((sub)=>{
            console.log(sub)
            if(sub.hours==2){
                return (
                    <Link key={sub.course_code} href={`/attendance/${sub.course_code}`}>
                    <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-50%'>
                    <div className='z-10 flex flex-col justify-start p-2'>
                        <h1 className='font-bold'>{timestampToTimeOfDay(sub.time.seconds)}</h1>
                        <h1 className='text-[1.6rem] leading-none font-bold'>{sub.course_code}</h1>
                        <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>{sub.course_name}</h1>
                    </div>
                    <div className='absolute bottom-[-1rem] right-0'>
                        <h1 className='text-white/[70%] text-[9rem]    leading-none'>{sub.attendance}</h1>
                    </div>
                    </div>
                    </Link>
                )
            }else{
                return(
                    <div key={sub.course_code} className='relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%'>
                    <div className='z-10 flex flex-col justify-start p-2'>
                        <h1 className='font-semibold'>{timestampToTimeOfDay(sub.time.seconds)} {sub.course_code}</h1>
                        <h1 className='font-semibold text-[3.8rem] leading-none '>{sub.course_name}</h1>
                       
                    </div>
                    <div className='absolute bottom-[-0.5rem] right-0'>
                        <h1 className='text-white/[70%] text-[6rem]    leading-none'>{sub.attendance}</h1>
                    </div>
        
                    </div>
                )
            }
               
            
         })}


            <div className='relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-semibold'>8:45 20CS280</h1>
                <h1 className='font-semibold text-[3.8rem] leading-none '>ESIOT</h1>
               
            </div>
            <div className='absolute bottom-[-0.5rem] right-0'>
                <h1 className='text-white/[70%] text-[6rem]    leading-none'>76</h1>
            </div>

            </div>


            <div className='relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-semibold'>1:35 20HS212</h1>
                <h1 className='font-semibold text-[3.8rem] leading-none '>UHV</h1>
               
            </div>
            <div className='absolute bottom-[-0.5rem] right-0'>
                <h1 className='text-white/[70%] text-[6rem]    leading-none'>85</h1>
            </div>

            </div>

            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>1:10</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC2990</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>CS</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>75</h1>
            </div>
            </div>


            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>3:00</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC290</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>MSBD</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>98</h1>
            </div>
            </div>

            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>1:10</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC2990</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>CS</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>75</h1>
            </div>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Home