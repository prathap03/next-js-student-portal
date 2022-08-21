import Header from "../components/header";
import Head from "next/head";
import Cards from "../components/Cards";
import NavBar from "../components/Navbar"

import router from 'next/router'
import Link from "next/link";
import { useAuth } from "../context/AuthContext";


export default function Home({ session }) {
  const { user } = useAuth()
  console.log(user)
  function handleUpload() {
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="theme-color" content="#ffffff" />

        <title>
          Students Portal
        </title>
      </Head>
      <Header />
      <div className='flex h-[100%] items-start bg-[#F3F3F3]'>





        <div className="hidden h-[100vh] xl:flex"><NavBar /></div>

        <div className='flex flex-col justify-center flex-shrink gap-10 p-10 mini:p-2 pl-20 xl:w-[80%] md:w-max sm:w-max '>
          <div className='p-8 mini:p-6  flex-shrink   shadow-xl rounded-xl bg-[#F8F5F5]'>
            <h1 className='font-normal font-sans  text-[0.8rem] lg:text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] mobile:text-[1.2rem]'>Certifications</h1>
            <div className="flex justify-start flex-shrink gap-10 mt-5 w-max flex-grow-col xl:justify-start md:justify-center lg:gap-20 md:gap-8">
              <Link href="/academic" ><a><Cards className="flex-shrink" title="Academic Certificates" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png" /></a></Link>
              <Link href="/eca"><a><Cards title="Extra-Curricular Certificates" className="flex-shrink " src="https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png" /></a></Link>
              <Link href="/workshop"><a><Cards title="Workshops and Skill Certificates" className="flex-shrink" src="https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451__340.jpg" /></a></Link>

            </div>
          </div>
          <div className='sm:w-[90vw]   md:w-[90vw] flex-shrink  flex justify-center items-center p-20 shadow-xl xl:w-[100%]   mb-2 rounded-xl bg-[#F8F5F5]'>

            <button onClick={handleUpload} className='p-2 mini:text-[0.8rem] mini:w-1/2 sm:text-[1.1rem] md:w-1/3 md:text-[1.2rem] lg:text-[1.4rem] rounded-[1.2rem] w-[14vw] bg-[#66BFC5]  text-white font-bold text-[1.75rem]'>UPLOAD</button>

          </div>

        </div>

      </div>

    </div>




  )
}



