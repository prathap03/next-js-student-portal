import Link from 'next/link'
import React from 'react'
import Header from '../components/header'
import Cards from "../components/Cards"

function demoDash() {
  return (
    <div className='flex flex-col  bg-[#F3F3F3]'>
        <Header />
        <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
        <div className='w-[22.95rem] flex-shrink-0 rounded-r-2xl rounded-br-md shadow-2xl shadow-black/70  p-2 bg-[#001529]/[84%]'>hello</div>
        <div className='flex flex-col items-center justify-center gap-10 p-10 w-max'>
            <div className='p-8 shadow-xl  h-[23.2rem] rounded-xl bg-[#F8F5F5]'>
                <h1 className='font-normal font-sans text-[2rem]'>Certifications</h1>
                <div className="flex justify-start gap-10 mt-5 no-wrap md:grid-cols-3">
            <Link href="/StudentCertificate" as="StudentCertificate"><Cards title="Students Certification" src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png"  /></Link>
            <Link href="/Awards"><Cards title="Awards and Rewards" src="https://cdn.pixabay.com/photo/2016/09/16/19/20/trophy-1674911__340.png" /></Link>
            <Link href="/Workshops"><Cards title="Workshops" src="https://cdn.pixabay.com/photo/2018/08/29/09/12/business-3639451__340.jpg" /></Link>

          </div>
            </div>
            <div className='w-[76vw] flex justify-center items-center p-20 shadow-xl h-[23.2rem] rounded-xl bg-[#F8F5F5]'>
                
                    <button className='p-2 rounded-[1.2rem] w-[14vw] bg-[#66BFC5] text-white font-bold text-[1.75rem]'>UPLOAD</button>
                
            </div>
        </div>
        
        </div>
    </div>
  )
}

export default demoDash