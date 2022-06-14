import React, { useState } from 'react'
import Header from '../components/header';

import { storage } from '../components/FirebaseConfi';
import { ref,uploadBytes } from "firebase/storage";


export default function AwardsAndRewards() {
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
    const imageRef = ref(storage,`images/awards/${image.name}`);
    uploadBytes(imageRef,image).then(()=>{
      alert("Image Uploaded");
    });
  };

  return (
    <div>
      <Header/>
      <div className='flex  justify-center h-screen'>
      <div className='flex p-20 absolute bg-gray-200 h-auto mt-10 rounded-md shadow-md justify-center   flex-col'>
        <h1 className='text-[30px] text-center relative top-0 p-[-20px]'>Awards</h1>
        <img className='p-2' src={createObjectURL} />
        
        <input className='p-2' type="file" name="myImage" onChange={uploadToClient} />
        <button
          className="p-2 bg-blue-400 text-white rounded-md "
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
