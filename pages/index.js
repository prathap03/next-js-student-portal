import Header from "../components/header";
import Head from "next/head";
import Cards from "../components/Cards";
import NavBar from "../components/Navbar"

import router from 'next/router'
import Link from "next/link";
import { useAuth } from "../context/AuthContext";


export default function Home({ session }) {
  const {user} =useAuth()
  console.log(user)
  function handleUpload(){
    router.push("/upload")
  }
  if (session) return (
    <div className="grid place-items-center hover:cursor-pointer hover:bg-blue-500">
      <h1 onClick={signIn}>Log In</h1>
    </div>
  )
  return (

    <div className="w-screen h-screen overflow-x-hidden bg-gray-100">
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
      <div className='flex flex-col  bg-[#F3F3F3]'>
        <Header />
        <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
        <NavBar/>
        <div className='flex flex-col justify-center flex-shrink gap-10 p-10 w-[calc(94vw-319px)]'>
            <div className='p-8  flex-shrink   shadow-xl rounded-xl bg-[#F8F5F5]'>
                <h1 className='font-normal font-sans text-[2rem]'>Certifications</h1>
                <div className="flex justify-start flex-shrink gap-10 mt-5 md:grid-cols-3">
            <Link href="/academic" ><a><Cards className="flex-shrink" title="Academic Certificates" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png"  /></a></Link>
            <Link href="/eca"><a><Cards title="Extra-Curricular Certificates" className="flex-shrink " src="https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png" /></a></Link>
            <Link href="/workshops"><a><Cards title="Workshops and Skill Certificates" className="flex-shrink" src="https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451__340.jpg" /></a></Link>

          </div>
            </div>
            <div className='w-[calc(90vw-319px)] flex-shrink  flex justify-center items-center p-20 shadow-xl h-[23.2rem] rounded-xl bg-[#F8F5F5]'>
                
                    <button onClick={handleUpload} className='p-2 rounded-[1.2rem] w-[14vw] bg-[#66BFC5]  text-white font-bold text-[1.75rem]'>UPLOAD</button>
                
            </div>
        </div>
        
        </div>
    </div>

    </div>
    


  )
}



