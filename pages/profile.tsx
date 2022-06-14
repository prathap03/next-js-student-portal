import React from 'react'
import Header from '../components/header'

export default function profile() {
    return (
        <div>
            <Header/>
            <div className="m-[10px] p-[10px] bg-[#fff] h-screen ">

                <div className="container-fluid flex flex-col justify-center">
                    <div className="bg-gray-100 p-20 rounded-md shadow-md">
                        <div className="panel-heading">
                            <h3 className="panel-title">Profile</h3>
                        </div>
                        <div className="panel-body flex">
                            <div className="col-sm-2 text-center" id="profile-container">
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
                                            <a href="/updateemail/">
                                                <i className="fas fa-pen bullet" />
                                            </a>
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
                                            <a href="/updatemobile/">
                                                <i className="fas fa-pen bullet" />
                                            </a>
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
