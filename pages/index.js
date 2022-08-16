import Header from "../components/header";
import Head from "next/head";
import { getSession, signIn } from "next-auth/react";
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

    <div className="h-screen overflow-x-hidden bg-gray-100">
      <Head>
        <title>
          Students Portal
        </title>
      </Head>
      <div className='flex flex-col  bg-[#F3F3F3]'>
        <Header />
        <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
        <NavBar/>
        <div className='flex flex-col justify-center flex-shrink gap-10 p-10 '>
            <div className='p-8    shadow-xl  h-[23.2rem] rounded-xl bg-[#F8F5F5]'>
                <h1 className='font-normal font-sans text-[2rem]'>Certifications</h1>
                <div className="flex justify-start gap-10 mt-5 no-wrap md:grid-cols-3">
            <Link href="/StudentCertificate" as="StudentCertificate"><Cards title="Students Certification" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png"  /></Link>
            <Link href="/Awards"><Cards title="Awards and Rewards" src="https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png" /></Link>
            <Link href="/Workshops"><Cards title="Workshops" src="https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451__340.jpg" /></Link>

          </div>
            </div>
            <div className='w-[76vw]  flex justify-center items-center p-20 shadow-xl h-[23.2rem] rounded-xl bg-[#F8F5F5]'>
                
                    <button onClick={handleUpload} className='p-2 rounded-[1.2rem] w-[14vw] bg-[#66BFC5]  text-white font-bold text-[1.75rem]'>UPLOAD</button>
                
            </div>
        </div>
        
        </div>
    </div>

      
      <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
    </div>
    


  )
}

export async function getServerSideProps(context) {
  //Get the user
  const session = await getSession(context);
  return ({
    props: {
      session
    }
  })
}

