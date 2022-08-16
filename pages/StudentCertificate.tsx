import React, { useState } from 'react'
import Header from '../components/header';


import { ref,uploadBytes } from "firebase/storage";
import { storage } from '../lib/firebase';


export default function StudentCertificate() {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    if(image==null) return;
    const imageRef = ref(storage,`images/students/${image.name}`);
    uploadBytes(imageRef,image).then(()=>{
      alert("Image Uploaded");
    });
  };

  return (
    <div>
      <Header/>
      <div className='flex justify-center h-screen'>
        
        <div className='absolute flex flex-col justify-center h-auto p-20 mt-10 bg-gray-200 rounded-md shadow-md'>
        <h1 className='text-[30px] text-center relative top-0 p-[-20px]'>Certificates</h1>
        <img className='p-2' src={createObjectURL} />

        <h4 className='p-2'>Select Image</h4>
        <input className='p-2' type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="p-2 text-white bg-blue-400 rounded-md "
          type="submit"
          onClick={uploadToServer}
        >
          Upload
        </button>
        </div>
      </div>
    </div>
  );
}
