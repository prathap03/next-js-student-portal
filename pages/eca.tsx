import React, { useEffect, useState, Fragment } from 'react'
import Header from '../components/header';


import { fireStore, storage } from '../lib/firebase';

import { useAuth } from '../context/AuthContext';
import Oval from '../node_modules/react-loader-spinner/dist/loader/Oval';
import Head from '../node_modules/next/head';
import NavBar from "../components/Navbar"
import { SearchIcon } from '@heroicons/react/outline'
import { Dialog, Transition } from '@headlessui/react'
import CertificateCard from '../components/CerteficateCard';


import { ref, deleteObject } from 'firebase/storage'
import { onSnapshot, collection, query, doc, where, deleteDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";





export default function ExtraCurricular() {
  const [image, setImage] = useState(null);
  const [Data, setData] = useState(null)
  const { user } = useAuth()
  const [search, setSearch] = useState(null)
  let [isOpen, setIsOpen] = useState(false)
  const [currentData, setCurrentData] = useState(null)
  const [isremoveOpen, setIsRemoveOpen] = useState(false)
  const [isConfirm, setIsconfirm] = useState(true)
  const months = { 1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sept", 10: "Oct", 11: "Nov", 12: "Dec" }

  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [expiry, setExpiry] = useState(false)
  const [type, setType] = useState(null)
  let [name, setName] = useState(null)
  const [issuingOrganization, setIssuingOrganization] = useState(null)
  const [issueMonth, setIssueMonth] = useState(null)
  const [issueYear, setIssueYear] = useState(null)
  const [expiryMonth, setExpiryMonth] = useState(null)
  const [expiryYear, setExpiryYear] = useState(null)
  const [credentialId, setCredentialId] = useState(null)
  const [credentialURL, setCredentialURL] = useState(null)
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));
  const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const year = Array.from(range(1999, new Date().getFullYear() + 4, 1))
  const [loading, setLoading] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  console.log(user.uid)

  const addToDB = async (id) => {
    // get the current timestamp
    const timestamp: string = Date.now().toString();
    // create a pointer to our Document
    const data = doc(fireStore, `students/${user.uid}/certificates/${id}`);
    // structure the todo data
   
    const certificateData = {
      name: name,
      issuingOrganization: issuingOrganization,
      type: type,
      issueMonth: issueMonth,
      issueYear: issueYear,
      imgUrl: currentData.imgUrl,
      imageUuid: currentData.imageUuid,
      edited: currentData.edited + 1,
      expiryMonth: expiryMonth ? expiryMonth : "nil",
      expiryYear: expiryYear ? expiryYear : "nil",
      credentialId: credentialId ? credentialId : "nil",
      credentialURL: credentialURL ? credentialURL : "nil",
      updatedAt: serverTimestamp()
    };
    try {
      //add the Document
      await updateDoc(data, certificateData);
      //show a success message
      //reset fields
    } catch (error) {
      //show an error message
      console.log(error)
    }
  };

  function handleExpiryChange(checkbox) {

    if (checkbox.checked == false) {
      setExpiry(false)
    }
    else {
      setExpiry(true)
    }

  }

  const uploadToServer = async (event) => {
    setLoading(true)




    addToDB(currentData.id).then(() => {
      setLoading(false)
      setImage(null)
      setCreateObjectURL(null)
      closeModal
    })

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

  function closeModal() {

    setIsRemoveOpen(!setIsRemoveOpen)
    setIsconfirm(true)
    setIsEditOpen(!setIsEditOpen)
    setTimeout(() => {
      setIsOpen(false)
     
    }, 500)

  }

  function openModal(url, imgData) {
    setImage(url)
    setCurrentData(imgData)
    console.log(image)
    setIsOpen(true)



  }

  useEffect(() => {
    if (currentData) {
      setName(currentData.name)
      setIssuingOrganization(currentData.issuingOrganization)
      setType(currentData.type)
      setIssueMonth(currentData.issueMonth)
      setIssueYear(currentData.issueYear)
      setExpiryMonth(currentData.expiryMonth)
      setExpiryYear(currentData.expiryYear)
      setCredentialId(currentData.credentialId)
      setCredentialURL(currentData.credentialURL)
    }
    return () => {

    }
  }, [currentData])

  const handleRemoveChange = (event) => {

    if (event.target.value == "CONFIRM") {
      setIsconfirm(false)
    }
    else {
      setIsconfirm(true)
    }
  }

  const deleteCertificate = async (name,id) => {
    await deleteDoc(doc(fireStore, `students/${user.uid}/certificates`, id)).then(() => {
      const desertRef = ref(storage, `certificates/${user.uid}/eca/${name}`);
      closeModal()
      // Delete the file
      deleteObject(desertRef).then(() => {
        // File deleted successfully
        window.alert("Certificate Deleted")
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log("ERROR: ",error)
      });
    }).catch((error)=>{
      console.log("ERROR: ",error)
    });
  }




  const handleChange = (event) => {

    const value = event.target.value
    { setSearch(value) }
    console.log(search)
    if (value) { setSearch(value) }
    else {
      setSearch(null)
    }

    const q = query(collection(fireStore, `students/${user.uid}/certificates`), search ? (where('name', '>=', search), where('name', '<=', search + '~'),where("type", "==", "eca")) : where("type", "==", "eca"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setData(cities)

    });
  }


  useEffect(() => {

    const q = query(collection(fireStore, `students/${user.uid}/certificates`), where("type", "==", "eca"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data());
      });
      setData(cities)

    });



    // Later ...

    // Stop listening to changes



    return () => {
      unsubscribe()
    }
  }, [user.uid])


  return (
    <div className='overflow-x-hidden'>


<Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit or Remove Certificate
                    {currentData && currentData.edited <= 2 && (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => { setIsEditOpen(true) }}
                      >
                        Edit Certificate
                      </button>
                    )}
                  </Dialog.Title>


                  <div className="mt-4 ">
                    <div className='flex justify-center gap-2 p-2'>

                      <img className='flex-shrink-0 h-[250px]' src={image} />



                      <div className='flex flex-col items-start justify-start gap-2 p-2 '>
                        {currentData && (
                          <>
                            <h1>Name: {currentData.name}</h1>
                            <h1>Issued By: {currentData.issuingOrganization}</h1>
                            <h1>Issued On: {months[currentData.issueMonth] + " " + currentData.issueYear}</h1>
                            {currentData.expiryMonth != "nil" ? (
                              <h1>Validity: {months[currentData.expiryMonth] + " " + currentData.expiryYear}</h1>
                            ) : (
                              <h1>Validity: Lifetime</h1>
                            )}

                          </>
                        )}
                        {currentData && currentData.credentialId != "nil" && (<h1>Credential Id: {currentData.credentialId}</h1>)}
                        {currentData && currentData.credentialURL != "nil" && (<h1>Credential URL: <a href={currentData.credentialURL}>{currentData.credentialURL}</a></h1>)}
                      </div>
                    </div>
                    {currentData && currentData.edited <= 2 && (
                      <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 mt-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => { closeModal; setIsRemoveOpen(true) }}
                      >
                        Remove Certificate
                      </button>)}

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isremoveOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Certificate

                  </Dialog.Title>


                  <div className="mt-4 ">
                    <div className='flex flex-col justify-start gap-1'>
                      <h1 className='p-2 mb-2 text-red-900 bg-red-300 rounded-md'>Note: that this process is not recoverable!</h1>
                      <h1>Are you sure, {user.email.split(".")[0]}, if yes type <span className='font-semibold'>CONFIRM</span></h1>
                      <input onInput={(e) => { handleRemoveChange(e) }} className='p-2 bg-white rounded-md ring-2 ring-red-500 focus:outline-none' />
                      <button onClick={() => { deleteCertificate(currentData.imageUuid, currentData.id) }} className='w-20 h-8 mt-4 font-semibold text-red-900 transition duration-100 ease-in bg-red-400 rounded-md disabled:bg-gray-300 disabled:text-gray-900 disabled:font-light' disabled={isConfirm}>DELETE</button>





                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isEditOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="p-6 overflow-hidden h-[90vh] w-[80vw]  text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-medium leading-6 text-gray-900"
                  >
                    Edit Certificate
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => { setIsEditOpen(true) }}
                    >
                      Edit Certificate
                    </button>
                  </Dialog.Title>


                  <div className="mt-2 ">

                    {loading ? (<div className='flex items-center justify-center h-screen'><Oval /></div>) : currentData &&

                      (
                        <div className='flex gap-8 flex-grow rounded-md shadow-xl  bg-[#F8F5F5]'>
                          <div className='flex relative flex-col gap-6 justify-center items-center w-[50%] border-dashed border-2 border-[#cdcdcd]'>
                            {createObjectURL ? (
                              <>
                                {/* <button onClick={() => { setCreateObjectURL("") }} className='absolute top-0 right-0 p-2 m-4 text-lg font-bold text-white bg-red-500 rounded-full'>CHANGE</button> */}
                                <img className='p-2 h-[100%] object-scale-down' src={currentData.imgUrl} />
                              </>
                            ) : currentData ? (
                              <>
                                {/* <button onClick={() => { setCreateObjectURL("") }} className='absolute top-0 right-0 p-2 m-4 text-lg font-bold text-white bg-red-500 rounded-full'>CHANGE</button> */}
                                <img className='p-2 h-[100%] object-scale-down' src={currentData.imgUrl} />
                              </>) : (
                              <>
                                <h1>Drag and drop your file Here or (coming soon)</h1>
                                <label className='p-2 rounded-[1.2rem] w-[14vw] bg-[#66BFC5] text-center hover:cursor-pointer  text-white font-bold text-[1.75rem]'>Upload a file<input className='hidden' type="file" onChange={uploadToClient} ></input></label>
                              </>
                            )}



                          </div>

                          <div className="flex  p-6 flex-col gap-2 items-start justify-start flex-grow rounded-md bg-[#0F90A1]/[18%]">

                            <h1 className='flex-shrink-0 text-2xl'>Certificate Information</h1>
                            <h1>Name*</h1>
                            <input value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }} style={{ padding: "12px" }} className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' type="text" required></input>
                            <h1>Issuing Organization*</h1>
                            <input value={issuingOrganization} style={{ padding: "12px" }} onChange={(e) => { setIssuingOrganization(e.target.value) }} placeholder="Issuing Organization" className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' type="text" required></input>
                            <h1>Type*</h1>
                            <select disabled value={type} onChange={(e) => { setType(e.target.value) }} required className='h-10  flex-shrink-0 rounded-lg w-[100%]' name="cars" id="cars">
                              <option style={{ padding: "12px" }} selected>Select Type..</option>
                              <option style={{ padding: "12px" }} value="academic">Academic</option>
                              <option style={{ padding: "12px" }} value="eca">Extra-Curricular</option>
                              <option style={{ padding: "12px" }} value="Workshop or skill">Workshop or skill</option>
                            </select>
                            <div className='flex justify-center flex-shrink-0 gap-1 mt-2'>

                              <input onChange={(e) => { handleExpiryChange(e.target) }} className='w-8' type="checkbox"></input>
                              <h1 className=''>This credential does not expire</h1>
                            </div>
                            <h1>Issue date*</h1>
                            <div className='flex w-[100%] justify-between gap-10' >
                              <select value={issueMonth} placeholder='Select Month..' onChange={(e) => { setIssueMonth(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="issueMonth" id="issueMonth">

                                {monthsArray.map((month, idx) => {
                                  return <option key={month} value={idx + 1}>{month}</option>
                                })}
                              </select>
                              <select value={issueYear} placeholder='Select Year..' onChange={(e) => { setIssueYear(e.target.value) }} required className=' h-10 rounded-lg w-[100%]' name="issueYear" id="issueYear">
                                {year.map((year) => {
                                  return <option key={year} value={year}>{year}</option>
                                })}
                              </select>
                            </div>
                            {!expiry && (
                              <>
                                <h1 className='transition duration-75 ease-in'>Expiry date*</h1>
                                <div className='flex w-[100%] justify-between gap-10 flex-shrink-0'>
                                  <select value={expiryMonth} placeholder='Select Month..' onChange={(e) => { setExpiryMonth(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="cars" id="cars">

                                    {monthsArray.map((month, idx) => {
                                      return <option key={month} value={idx + 1}>{month}</option>
                                    })}
                                  </select>
                                  <select value={expiryYear} placeholder='Select Year..' onChange={(e) => { setExpiryYear(e.target.value) }} required className='h-10 rounded-lg w-[100%]' name="cars" id="cars">
                                    {year.map((year) => {
                                      return <option key={year} value={year}>{year}</option>
                                    })}
                                  </select>
                                </div>
                              </>)}
                            <h1>Credential Id</h1>
                            <input value={credentialId} onChange={(e) => { setCredentialId(e.target.value) }} className='h-10 rounded-lg w-[100%] flex-shrink-0 placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' placeholder='Credential Id' style={{ padding: "12px" }} type="text"></input>
                            <h1>Credential URL</h1>
                            <input value={credentialURL} onChange={(e) => { setCredentialURL(e.target.value) }} className='h-10  flex-shrink-0 rounded-lg w-[100%] placeholder:text-[D9D9D9] placeholder:text-[1.25rem] shadow-md' placeholder='Credential URL' style={{ padding: "12px" }} type="text"></input>
                            <div className='flex items-center justify-center w-[100%] p-2 mt-2'>
                              <button onClick={(e) => { uploadToServer(e) }} className='w-1/2 mt-2 p-2 text-[1.8rem] font-semibold text-white bg-[#66BFC5] rounded-2xl'>Save</button>
                            </div>





                          </div>
                        </div>
                      )}







                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Head>

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />

        <title>
          Students Portal
        </title>
      </Head>
      <Header />
      <div className='flex h-[100vh] items-start bg-[#F3F3F3]'>
    
      <div className='hidden h-[100vh]  xl:flex'>
         <NavBar  />
      </div>
      <div className='flex flex-col justify-center flex-shrink gap-10 p-10 mini:p-2 pl-20 xl:w-[80%]  md:w-max sm:w-max '>
            <div className='flex items-center justify-center flex-shrink p-4 mt-8 md:w-[77vw]'>
              <div className='flex w-[100%] md:w-[60%] rounded-full shadow-lg'>
                <SearchIcon className='p-2 rounded-l-full stroke-[#777777] h-[2.8rem] bg-white   w-11' />
                <input placeholder='Search...' onEmptied={() => { setSearch(null) }} onInput={(e) => { handleChange(e) }} className='h-[2.8rem] w-[100%] placeholder:text-[1.4rem] placeholder:font-normal outline-none focus:outline-none rounded-r-full  '></input>
              </div>
            </div>
            <div className='flex flex-col w-[90vw] md:w-[73vw] h-[68vh] m-4 gap-2 flex-grow  rounded-lg shadow-xl   bg-[#F8F5F5]'>
              <div className='flex justify-between mt-4 ml-4 mr-4'>
                <h1 className='text-[1rem] font-semibold'>Extra-Curricular </h1>
                <div className='flex flex-col'>
                  <select className="h-8 p-2 text-[0.7rem] text-white font-semibold bg-blue-500 rounded-full w-22" >
                    <option value="" disabled selected>Sort</option>
                    <option value="ascending">Newer</option>
                    <option value="descending">Older</option>
                  </select>
                </div>


              </div>

              <hr />

              <div className='flex flex-wrap items-start flex-grow p-2 m-2 overflow-scroll transition duration-150 ease-in gap-7' style={{alignContent: "flex-start"}}>


                {Data && Data.length !== 0 ? (
                  Data.map((data) => {
                    return (

                      <div className='items-start transition duration-150 ease-in h-max' key={data.name} onClick={() => { openModal(data.imgUrl, data) }}>

                        <CertificateCard data={data} />
                      </div>
                    )
                  })
                ) : !Data ? (<div className='flex w-[100%] items-center justify-center '><Oval /></div>) : <h1>No Data Found</h1>

                }






              </div>


            </div>

          </div>
        </div>



    </div>
  );
}
