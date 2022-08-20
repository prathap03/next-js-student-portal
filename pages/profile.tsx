import Link from 'next/link'
import React from 'react'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

import Head from '../node_modules/next/head'
import { Oval } from '../node_modules/react-loader-spinner/dist/index'


export default function Profile() {
    const {userDetails} = useAuth()
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
            {userDetails?(
                 <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
                 <Navbar/>
                 <div className='flex gap-8 h-max w-[100%] p-4 m-8 rounded-lg bg-[#F8F5F5] shadow-md shadow-black/20'>
                 {userDetails?(
                     <>
                    
                     {userDetails ? (
                          <img src={userDetails.profileUrl} className='w-[10rem] h-[12rem] object-cover rounded-lg' alt="profile"/>
                     ):<h1>Loading...</h1>}
                
                 <div className='flex flex-col gap-2'>
                 <h1>Name: {userDetails ? userDetails.name : "loading.."}</h1>
                 <h1>Dept & Year : {userDetails ? userDetails.department+" - " + userDetails.year+"nd Year" : "loading.."} </h1>
                 <h1>Roll No: {userDetails ? userDetails["roll no"] : "loading.."}</h1>
                 <h1>Section: {userDetails ? userDetails.class : "loading.."}</h1>
                 <h1>Batch: {userDetails ? userDetails.batch : "loading.."}</h1>
                 <h1>Tutour: {userDetails ? userDetails.tutour : "loading.."}</h1>
                 </div>
                
                 </>
                 ):(<div className='flex items-center justify-center w-[100%] '><Oval/></div>)}
                  </div>
                 </div>
            ):(<div className='flex items-center justify-center h-screen'><Oval/></div>)}
           
        </div>

    )
}
