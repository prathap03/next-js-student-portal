import React, { useState } from 'react'

function Nfc() {

  const [tag,SetTag] = useState("") 
  const [tagData,SetTagData] = useState(null) 
  const [serial,setSerial] = useState("")

  
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
      setSerial(serialNumber);
      console.log(`> Records: (${message.records.length})`);
    });
    const textDecoder = new TextDecoder();
    ndef.onreading = event => {
        const message = event.message;
        for (const record of message.records) {
        console.log(record);
        
          try{
            console.log(JSON.parse(textDecoder.decode(record.data.buffer)))
            SetTagData(JSON.parse(textDecoder.decode(record.data.buffer)))
            console.log(tagData)
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
          catch(error){
            SetTagData(null)
            SetTag(`NO DATA IN TAG`);
          }
        }
      };


  } catch (error) {
    console.log("Argh! " + error);
    SetTag(JSON.stringify(error))
  }
  }

  const writeDetails = async()=>{
    const ndef = new NDEFReader();
    const buffer = Buffer.from('{"name": "Joe Prathap P J", "type": "Student", "roll": 71812105043,"branch":"IT","periodOfStudy":"2021-2025"}');
ndef.write(buffer, { overwrite: true })
.then(() => {
  console.log("Message written.");
}).catch(error => {
  console.log(`Write failed :-( try again: ${error}.`);
});
  }

  

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-2 h-max bg-red'>
        
        {
          tagData && (
            <div className='flex flex-col gap-2'>
            <h1>Role: {tagData.type}</h1>
            <h1>Name: {tagData.name}</h1>
            <h1>Roll: {tagData.roll}</h1>
            <h1>Branch: {tagData.branch}</h1>
            <h1>Period of study: {tagData.periodOfStudy}</h1>
            </div>
          )
        }
            
           
        <pre>{tag}</pre>
        <div className='flex gap-2'>
        <button id='scanButton' onClick={()=>{readTag()}} className='p-2 text-white bg-green-500 rounded-md shadow-md'>READ NFC</button>
        <button id='writeButton' onClick={()=>{writeDetails()}} className='p-2 text-white bg-red-500 rounded-md shadow-md'>Write NFC</button>
        </div>
        

    </div>
  )
}

export default Nfc