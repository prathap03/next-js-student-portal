import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/header'
import { useAuth } from '../context/AuthContext'
import NavBar from "../components/Navbar"

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { fireStore, storage } from '../lib/firebase'
import Oval from '../node_modules/react-loader-spinner/dist/loader/Oval'
import { doc,setDoc } from 'firebase/firestore';

function Upload() {
    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [expiry, setExpiry] = useState(false)
    const [type, setType] = useState(null)
    const [name, setName] = useState(null)
    const [issuingOrganization, setIssuingOrganization] = useState(null)
    const [issueMonth, setIssueMonth] = useState(null)
    const [issueYear, setIssueYear] = useState(null)
    const [expiryMonth, setExpiryMonth] = useState(null)
    const [expiryYear, setExpiryYear] = useState(null)
    const [credentialId, setCredentialId] = useState(null)
    const [credentialURL, setCredentialURL] = useState(null)
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const year = Array.from(range(1999, new Date().getFullYear() + 4, 1))
    const { user } = useAuth()
    const [loading,setLoading]=useState(false)
    console.log(user.uid)


    function handleChange(checkbox) {

        if (checkbox.checked == false) {
            setExpiry(false)
        }
        else {
            setExpiry(true)
        }

    }

    const addToDB = async (uuid,url) => {
        // get the current timestamp
        const timestamp: string = Date.now().toString();
        // create a pointer to our Document
        const data = doc(fireStore, `students/${user.uid}/certificates/${timestamp}`);
        // structure the todo data
        const certificateData = {
            name:name,
            issuingOrganization: issuingOrganization,
            type: type,
            issueMonth: issueMonth,
            issueYear: issueYear,
            imgUrl:url,
            imageUuid: uuid,
            edited:0,
            expiryMonth: expiryMonth ? expiryMonth : "nil",
            expiryYear: expiryYear ? expiryYear : "nil",
            credentialId: credentialId? credentialId : "nil",
            credentialURL: credentialURL? credentialURL: "nil",
        };
        try {
            //add the Document
            await setDoc(data, certificateData);
            //show a success message
            //reset fields
        } catch (error) {
            //show an error message
            console.log(error)
        }
    };

    const uploadToServer = async (event) => {
        if (image == null) return;
        setLoading(true)
        const uuid = Date.now().toString();
        const imageRef = ref(storage, `certificates/${user.uid}/${type}/${uuid}`);
        uploadBytes(imageRef, image).then(() => {
           
            
            getDownloadURL(imageRef).then((url) => {
                
                console.log(url)
                addToDB(uuid,url).then(()=>{
                    setLoading(false)
                    setImage(null)
                    setCreateObjectURL(null)
                })
                return url
            })
                .catch((error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                    }
                });

        });
    };


    // const convertImage = (pdfPath) => {

    // }

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            const type = i.name.split(".")[i.name.split(".").length - 1]
            const allowedFiles = ["pdf", "jpg", "png", "jpeg"]
            if (allowedFiles.includes(type)) {
                if (type === "pdf") {
                    window.alert("PDF file not supported!")
                } else {
                    setImage(i);
                    setCreateObjectURL(URL.createObjectURL(i));
                }

            } else {
                window.alert("Invalid File Type")
            }

        }
    };

    // const uploadToServer = async (event) => {
    //     if (image == null) return;
    // const imageRef = ref("", `images/awards/${image.name}`);
    // uploadBytes(imageRef, image).then(() => {
    //     alert("Image Uploaded");
    //     });
    // };
    return (
        <div>
            <Head>
            
      
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    
       
      
                <title>
                    Certificate Upload
                </title>
            </Head>

            <Header />
            {!loading ? (
                <div className='flex flex-col  bg-[#F3F3F3]'>
                <div className='flex gap-2 h-[calc(100vh_-_81px)]'>
                    <NavBar />
                    <div className='flex p-12 gap-8 flex-grow w-screen m-12 rounded-md shadow-xl  bg-[#F8F5F5]'>
                        <div className='flex relative flex-col gap-6 justify-center items-center w-[50%] border-dashed border-2 border-[#cdcdcd]'>
                            {createObjectURL ? (
                                <>
                                    <button onClick={() => { setCreateObjectURL("") }} className='absolute top-0 right-0 p-2 m-4 text-lg font-bold text-white bg-red-500 rounded-full'>X CLOSE</button>
                                    <img className='p-2 h-[100%] object-scale-down' src={createObjectURL} />
                                </>

                            ) : (
                                <>
                                    <h1>Drag and drop your file Here or (coming soon)</h1>
                                    <label className='p-2 rounded-[1.2rem] w-[14vw] bg-[#66BFC5] text-center hover:cursor-pointer  text-white font-bold text-[1.75rem]'>Upload a file<input className='hidden' type="file" onChange={uploadToClient} ></input></label>
                                </>
                            )}



                        </div>
                        <div  className="flex overflow-y-scroll p-6 flex-col gap-2 items-start justify-start flex-grow rounded-md bg-[#0F90A1]/[18%]">

                            <h1 className='flex-shrink-0 text-2xl'>Certificate Information</h1>
                            <h1>Name*</h1>
                            <input placeholder='Name' onChange={(e)=>{setName(e.target.value)}} style={{ padding: "12px" }} className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' type="text" required></input>
                            <h1>Issuing Organization*</h1>
                            <input style={{ padding: "12px" }} onChange={(e)=>{setIssuingOrganization(e.target.value)}} placeholder="Issuing Organization" className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' type="text" required></input>
                            <h1>Type*</h1>
                            <select onChange={(e) => { setType(e.target.value) }} required className='h-10  flex-shrink-0 rounded-lg w-[100%]' name="cars" id="cars">
                                <option style={{ padding: "12px" }} selected>Select Type..</option>
                                <option style={{ padding: "12px" }} value="academic">Academic</option>
                                <option style={{ padding: "12px" }} value="eca">Extra-Curricular</option>
                                <option style={{ padding: "12px" }} value="Workshop or skill">Workshop or skill</option>
                            </select>
                            <div className='flex justify-center flex-shrink-0 gap-1 mt-2'>

                                <input onChange={(e) => { handleChange(e.target) }} className='w-8' type="checkbox"></input>
                                <h1 className=''>This credential does not expire</h1>
                            </div>
                            <h1>Issue date*</h1>
                            <div className='flex w-[100%] justify-between gap-10' >
                                <select placeholder='Select Month..' onChange={(e) => { setIssueMonth(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="issueMonth" id="issueMonth">

                                    {months.map((month, idx) => {
                                        return <option key={month} value={idx + 1}>{month}</option>
                                    })}
                                </select>
                                <select placeholder='Select Year..' onChange={(e) => { setIssueYear(e.target.value) }} required className=' h-10 rounded-lg w-[100%]' name="issueYear" id="issueYear">
                                    {year.map((year) => {
                                        return <option key={year} value={year}>{year}</option>
                                    })}
                                </select>
                            </div>
                            {!expiry && (
                                <>
                                    <h1 className='transition duration-75 ease-in'>Expiry date*</h1>
                                    <div className='flex w-[100%] justify-between gap-10 flex-shrink-0'>
                                        <select placeholder='Select Month..' onChange={(e) => { setExpiryMonth(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="cars" id="cars">

                                            {months.map((month, idx) => {
                                                return <option key={month} value={idx + 1}>{month}</option>
                                            })}
                                        </select>
                                        <select placeholder='Select Month..' onChange={(e) => { setExpiryYear(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="cars" id="cars">
                                            {year.map((year) => {
                                                return <option key={year} value={year}>{year}</option>
                                            })}
                                        </select>
                                    </div>
                                </>)}
                            <h1>Credential Id</h1>
                            <input onChange={(e)=>{setCredentialId(e.target.value)}} className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' placeholder='Credential Id' style={{ padding: "12px" }} type="text"></input>
                            <h1>Credential URL</h1>
                            <input onChange={(e)=>{setCredentialURL(e.target.value)}} className='h-10  flex-shrink-0 rounded-lg w-[100%] placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' placeholder='Credential URL' style={{ padding: "12px" }} type="text"></input>
                            <div className='flex items-center justify-center w-[100%] p-2 mt-2'>
                                <button onClick={(e)=>{uploadToServer(e)}} className='w-1/2 mt-2 p-2 text-[1.8rem] font-semibold text-white bg-[#66BFC5] rounded-2xl'>Save</button>
                            </div>





                        </div>
                    </div>

                </div>

            </div>

        
            ):(
                <div className='flex items-center justify-center h-screen'><Oval/></div>
            )
            }
            </div>
    )
}

export default Upload



