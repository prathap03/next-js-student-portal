import React, { useEffect, useState } from 'react'
import Header from '../components/header';


import { onSnapshot, collection, query, doc, where, orderBy, startAt, endAt } from "firebase/firestore";
import { fireStore } from './firebase';

import { useAuth } from '../context/AuthContext';
import Oval from '../node_modules/react-loader-spinner/dist/loader/Oval';
import Head from '../node_modules/next/head';
import NavBar from "../components/Navbar"
import { SearchIcon,DocumentIcon } from '@heroicons/react/outline'
import Image from '../node_modules/next/image';




export default function Workshops() {
  
  const [Data, setData] = useState(null)
  const { user } = useAuth()
  const [search, setSearch] = useState(null)



  const handleChange = (event) => {

    const value = event.target.value
    { setSearch(value) }
    console.log(search)
    if (value) { setSearch(value) }
    else {
      setSearch(null)
    }

    const q = query(collection(fireStore, `students/${user.uid}/certificates`), search ? (where('name', '>=', search), where('name', '<=', search + '~')) : where("type", "==", "Workshop or skill"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setData(cities)

    });
  }


  useEffect(() => {

    const q = query(collection(fireStore, `students/${user.uid}/certificates`), where("type", "==", "Workshop or skill"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setData(cities)

    });



    // Later ...

    // Stop listening to changes



    return () => {
      unsubscribe()
    }
  }, [user.uid])


  return (
    <div className='overflow-x-hidden'>
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
      <Header />
      <div className='flex flex-col gap-10  bg-[#F3F3F3]'>
        <div className='flex h-[calc(100vh_-_81px)]'>
          <NavBar />
          <div className='flex flex-col gap-8 p-8'>
            <div className='flex items-center justify-center w-[93rem] flex-shrink  p-4'>
              <div className='flex rounded-full shadow-lg  w-[50%]'>
                <SearchIcon className='p-2 rounded-l-full stroke-[#777777] h-[2.8rem] bg-white   w-11' />
                <input placeholder='Search...' onEmptied={() => { setSearch(null) }} onInput={(e) => { handleChange(e) }} className='h-[2.8rem] w-[100%] placeholder:text-[1.4rem] placeholder:font-normal outline-none focus:outline-none rounded-r-full  '></input>
              </div>
            </div>
            <div className='flex flex-col w-[93rem] gap-2 flex-grow  rounded-lg shadow-xl  bg-[#F8F5F5]'>
              <div className='flex justify-between mt-4 ml-4 mr-4'>
                <h1 className='text-[2rem] font-semibold'>Workshop and skill</h1>
                <div className='flex flex-col'>
                  <select className="h-10 p-2 text-[1.1rem] text-white font-semibold bg-blue-500 rounded-full w-22" >
                    <option value="" disabled selected>Sort</option>
                    <option value="ascending">Newer</option>
                    <option value="descending">Older</option>
                  </select>
                </div>

             
              </div>

<hr />

<div className='flex flex-wrap flex-grow gap-10 p-4 m-2'>


{Data && Data.length!==0?(
          Data.map((data)=>{
            return (<div key={data.name}  className=' rounded-md h-[250px] overflow-hidden  justify-center bg-white w-[260px] shadow-md cursor-pointer hover:bg-[#EDEDED] hover:shadow-xl transition-all ease-linear'>
            <div className=''>
                <Image src={data.imgUrl} width={260} height={200} layout='fixed'/>
                <div className='flex gap-2 justify-start p-2 font-light text-[1.12rem]'>
                  <DocumentIcon className="w-5 stroke-[#000000]/[50%]"/>
                    {data.name.length<10?(
                      data.name
                    ):(data.name.slice(0,20)+"...")}
                </div>
            </div>
        </div>)
          })
          ) :!Data ?(<div className='flex w-[100%] items-center justify-center '><Oval/></div>): <h1>No Data Found</h1>}

         
                   
        


</div>


            </div>

          </div>
        </div>
      </div>



    </div>
  );
}


