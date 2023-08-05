import React, { useState } from 'react'

function Nfc() {

  const [tag,SetTag] = useState("") 
  const [tagData,SetTagData] = useState([]) 

  
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

    ndef.onreading = event => {
        const message = event.message;
        for (const record of message.records) {
        SetTag(record);
          console.log("Record type:  " + record.recordType);
          console.log("MIME type:    " + record.mediaType);
          console.log("Record id:    " + record.id);
          switch (record.recordType) {
            case "text":
              // TODO: Read text record with record data, lang, and encoding.
              break;
            case "url":
              // TODO: Read URL record with record data.
              break;
            default:
              // TODO: Handle other records with record data.
          }
        }
      };


  } catch (error) {
    console.log("Argh! " + error);
    SetTag(JSON.stringify(error))
  }
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2 h-max bg-red'>
        {tagData && tagData.length>0 ( tagData.map((data,idx)=>{
            return(
                <h1 key={idx}>JSON.stringify(data)</h1>
            )
        }))}
        <pre>{tag}</pre>
        <button onClick={()=>{readTag()}} className='p-2 text-white bg-green-500 rounded-md shadow-md'>READ NFC</button>

    </div>
  )
}

export default Nfc