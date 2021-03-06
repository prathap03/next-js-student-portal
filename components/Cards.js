import Image from 'next/image'
import React from 'react'

function Cards({ title, src = "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png" }) {
    return (
        <div>
            <div className='flex rounded-md h-[250px] overflow-hidden  justify-center bg-white w-[250px] shadow-md cursor-pointer hover:bg-blue-50 hover:shadow-xl transition-all ease-linear'>
                <div className=''>
                    <Image
                        src={src}
                        height={200}
                        width={250}
                        layout='fixed'
                        // objectFit='cover'
                        className='p-0'
                        alt="card"
                    />
                    <div className='flex justify-center p-2'>
                        {title}

                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                        />
                    </a>
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        <button
                            type="button"
                            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >
                            Button
                        </button>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default Cards