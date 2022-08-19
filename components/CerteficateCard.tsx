import React from 'react'
import Image from '../node_modules/next/image';
import {DocumentIcon } from '@heroicons/react/outline'



function CertificateCard({data}) {
  return (data &&  (
  <div key={data.name}  className=' rounded-md h-[250px] overflow-hidden  justify-center bg-white w-[260px] shadow-md cursor-pointer hover:bg-[#EDEDED] hover:shadow-xl transition-all ease-linear'>
  <div className=''>
    <Image className='transition ease-in-out hover:scale-105' src={data.imgUrl} width={260} height={200} layout='fixed' />
    <div className='flex gap-2 justify-start p-2 font-light text-[1.12rem]'>
      <DocumentIcon className="w-5 stroke-[#000000]/[50%]" />
      {data.name.length < 10 ? (
        data.name
      ) : (data.name.slice(0, 20) + "...")}
    </div>
  </div>
</div>)
    
  )
}

export default CertificateCard