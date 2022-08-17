import Link from 'next/link'
import React from 'react'
import Header from '../components/header'
import Head from '../node_modules/next/head'

export default function profile() {
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
              Students Portal
            </title>
          </Head>
            <Header/>
            <div className="m-[10px] p-[10px] bg-[#fff] h-screen ">

                <div className="flex flex-col justify-center container-fluid">
                    <div className="p-20 bg-gray-100 rounded-md shadow-md">
                        <div className="panel-heading">
                            <h3 className="panel-title">Profile</h3>
                        </div>
                        <div className="flex panel-body">
                            <div className="text-center col-sm-2" id="profile-container">
                                <img
                                    className="w-[130px] h-[152px] rounded-[5%] mt-[4px] mb-[20px] object-cover"
                                    src="https://cdn.pixabay.com/photo/2022/06/03/20/15/sunset-7240788__340.jpg"
                                    id="profile-picture"
                                    
                                />
                                <br />
                                <div className="img-overlay">
                                    <i className="fas fa-pen" id="edit" />
                                </div>
                            </div>
                            <form
                                action="/updateimage/"
                                method="POST"
                                id="imageForm"
                                encType="multipart/form-data"
                            >
                                <input
                                    type="hidden"
                                    name="csrfmiddlewaretoken"
                                    defaultValue="fRnB4dxiN6a2zKtlbzq2iEuUJhpVke3HLSmmOcLiYyQm8foWEAq8ogXWXTjhzVRy"
                                />
                                <input
                                    id="imageUpload"
                                    type="file"
                                    name="photo"
                                    placeholder="Change Profile Picture"

                                    accept="image/jpeg"

                                />
                            </form>
                            <div id="profiledetails" className="p-2">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Register Number: </p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p>2105043</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Name: </p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p>JOE PRATHAP PJ</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Batch - Department: </p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p>2021 - IT</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Email: </p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p>
                                            srec@srec.ac.in &nbsp;&nbsp;
                                            <Link href="/updateemail/">
                                                <i className="fas fa-pen bullet" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p>Mobile: </p>
                                    </div>
                                    <div className="col-sm-7">
                                        <p>
                                            9994303763 &nbsp;&nbsp;
                                            <Link href="/updatemobile/">
                                                <i className="fas fa-pen bullet" />
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>

    )
}
