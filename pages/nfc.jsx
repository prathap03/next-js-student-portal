import React, { useState } from 'react'
import { fireStore, storage } from '../lib/firebase';
import { onSnapshot, collection, query, doc, where, deleteDoc,getDoc ,setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

function Nfc() {

  const [tag,SetTag] = useState("") 
  const [tagData,SetTagData] = useState(null) 
  const [serial,setSerial] = useState("")
  const [active,setActive] = useState(true);
  const [loading,setLoading] = useState(false);

  const addToDB = async (serialNo) => {
    if(serialNo){
     
      
        // create a pointer to our Document
        const d = await  getDoc(doc(fireStore, `nfc/Student/Attendance/${serialNo}`))
        if(d.data()){
          console.log(d.data())
window.alert("You Have Already Registered")
return

        }
       
    
            else{
                const data = doc(fireStore, `nfc/Student/Attendance/${serialNo}`);
    // structure the todo data
    const NfcData = {
        UserId:serialNo,
        Name:'Test',
        RemainingBudget:'Test',
        MainDish:'Test',
        CoolDrinks:'Test',
        Spl:new Date()
       
    };
    try {
        //add the Document
        await setDoc(data, NfcData);
        //show a success message
        window.alert("Reserved")
        SetTag(null);
        setSerial(null);
        
        location.reload();
        //reset fields
    } catch (error) {
        //show an error message
        console.log(error)
    }
    }
            
            

    
    }
};

const checkMaster =async (uid)=>{
  // alert(uid);
    const d = await getDoc(doc(fireStore, `nfc/master`))
    console.log(d.data())
    const id = d.data().id;
    console.log(id,id.includes(uid),uid)
    if(id.includes(uid)){
      console.log("Master Card!");
        SetTag(JSON.stringify("MASTER CARD"));
        setSerial(uid);
        setActive(!active);
        console.log(`Master Card - ${active}`);
        return;
    }
  

}  

  
  // const readTag = async()=>{

  //   SetTag(null);
  //   setSerial(null);
  //   SetTagData(null);
  //   console.log("User clicked scan button");

  //   if ('NDEFReader' in window){
  //       console.log("NFC");
  //       SetTag("NFC");
  //   }else{
  //       console.log("No NFC");
  //       SetTag("NO NFC");
  //   }



  // try {
  //   const ndef = new NDEFReader();
  //   await ndef.scan();
  //   console.log("> Scan started");



  //   ndef.addEventListener("readingerror", () => {
  //     console.log("Argh! Cannot read data from the NFC tag. Try another one?");
  //   });

  //   ndef.addEventListener("reading", async ({ message, serialNumber }) => {
  //     console.log(`> Serial Number: ${serialNumber}`);
  //     await checkMaster(serialNumber);
  //     if(active){
  //       addToDB(serialNumber);
  //       SetTag(serialNumber)
  //       setSerial(serialNumber);
  //     }else{
  //       SetTag("MASTER CARD REQUIRED");
  //       setSerial(serialNumber);
  //       return
  //     }
  //     console.log(`> Records: (${message.records.length})`);
  //   });
  //   const textDecoder = new TextDecoder();
  //   ndef.onreading = event => {
  //       const message = event.message;
  //       for (const record of message.records) {
  //       console.log(record);
        
  //         try{
  //           console.log(JSON.parse(textDecoder.decode(record.data.buffer)))
  //           active && SetTagData(JSON.parse(textDecoder.decode(record.data.buffer)))
  //           console.log(tagData)
  //             console.log("Record type:  " + record.recordType);
  //             console.log("MIME type:    " + record.mediaType);
  //             console.log("Record id:    " + record.id);
  
  //         }
  //         catch(error){
  //           SetTagData(null)
  //           SetTag(`NO DATA IN TAG`);
  //         }
  //       }
  //     };


  // } catch (error) {
  //   console.log("Argh! " + error);
  //   SetTag(JSON.stringify(error))
  // }
  // }

  const readTag = async () => {
    SetTag(null);
    setSerial(null);
    SetTagData(null);

    if ('NDEFReader' in window) {
      console.log('NFC');
      SetTag('NFC');
    } else {
      console.log('No NFC');
      SetTag('NO NFC');
    }

    try {
      const ndef = new NDEFReader();
     
      console.log('> Scan started');
      ndef.scan().then(() => {
       
        console.log("Scan started successfully.");
        ndef.onreadingerror = () => {
          console.log("Cannot read data from the NFC tag. Try another one?");
        };
        ndef.onreading = async event => {
          let serialNumber = event.serialNumber;
          console.log(event.serialNumber)
          // await checkMaster(event.serialNumber);
          // setLoading(true);
          if (active) {
          
            addToDB(serialNumber);
            SetTag(serialNumber);
            setSerial(serialNumber);
          } else {
            let serialNumber = event.serialNumber;
            SetTag('MASTER CARD REQUIRED');
            setSerial(serialNumber);
          }
          setLoading(false);
        };
      }).catch(error => {
        console.log(`Error! Scan failed to start: ${error}.`);
      });
  
     
  }
  
  finally{
    setLoading(false);
  };
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
            
        {!loading ? (
          <>
          <pre>{tag}</pre>
          <div className='flex gap-2'>
          <button id='scanButton' onClick={()=>{readTag()}} className='p-2 text-white bg-green-500 rounded-md shadow-md'>READ NFC</button>
          <button id='writeButton' onClick={()=>{writeDetails()}} className='p-2 text-white bg-red-500 rounded-md shadow-md'>Write NFC</button>
          </div> 
          </>         
        ):(
          <>
        <h1>Loading</h1>
          </>
        )} 
        
        

    </div>
  )
}

export default Nfc