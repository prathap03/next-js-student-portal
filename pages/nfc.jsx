import React, { useState } from 'react'

function Nfc() {

  const [tag,SetTag] = useState("") 

  
  const readTag = async()=>{
    console.log("User clicked scan button");

    if ('NDEFReader' in window){
        console.log("NFC");
        SetTag("NFC");
    }else{
        console.log("No NFC");
        SetTag("NO NFC");
    }



  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    console.log("> Scan started");

    ndef.addEventListener("readingerror", () => {
      console.log("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      console.log(`> Serial Number: ${serialNumber}`);
      SetTag(serialNumber)
      console.log(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    console.log("Argh! " + error);
    SetTag(JSON.stringify(error))
  }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2 h-max bg-red'>
        <pre>{tag}</pre>
        <button onClick={()=>{readTag()}} className='p-2 text-white bg-green-500 rounded-md shadow-md'>READ NFC</button>

    </div>
  )
}

export default Nfc