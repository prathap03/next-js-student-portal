import React, { useEffect, useState } from 'react'
import Header from '../components/header';


import {onSnapshot,collection,query,doc,where } from "firebase/firestore";
import { fireStore } from '../lib/firebase';

import { useAuth } from '../context/AuthContext';
import Oval from '../node_modules/react-loader-spinner/dist/loader/Oval';
import Head from '../node_modules/next/head';




export default function Workshops() {
  const [image, setImage] = useState(null);
  const [Data,setData] = useState(null)
  const {user} = useAuth()

  
  useEffect(() => {

    const q = query(collection(fireStore, `students/${user.uid}/certificates`), where("type", "==", "Workshop or skill"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data());
  });
  setData(cities)
  console.log("Current cities in CA: ", cities[0]);
  console.log(cities.length)
});

    
    
    // Later ...
    
    // Stop listening to changes
    
    
  
    return () => {
      
    }
  }, [user.uid])
  

  return (
    <div>
         <Head>
      
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    
            <title>
              Students Portal
            </title>
          </Head>
      <Header/>
      <div className='flex justify-center h-screen'>
     
      <div className='absolute flex flex-col justify-center h-auto p-20 mt-10 bg-gray-200 rounded-md shadow-md'>
        <h1 className='text-[30px] text-center relative top-0 p-[-20px]'>Workshop</h1>
        {Data && Data.length!==0?(
          Data.map((data)=>{
            return <h1 key={data.name}>{data.name} {data.issueMonth}</h1>
          })
          ) :!Data ?(<div className='flex items-center justify-center '><Oval/></div>): <h1>No Data Found</h1>}
        </div>
      </div>
    </div>
  );
}
