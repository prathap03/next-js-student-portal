import Image from 'next/image'
import React from 'react'

function Cards({ title, src = "https://cdn.searchenginejournal.com/wp-content/uploads/2021/12/google-career-certificates-61bd445f96b29-sej-760x400.png" }) {
    return (
        <div>
            <div className='flex flagship:w-[5.5rem] flagship:h-[7rem] mini:w-[5rem] mini:h-[6rem] mobile:w-[8.2rem] mobile:h-[10rem] flex-col sm:w-[11rem] sm:h-[11rem] lg:w-[15rem] lg:h-[15rem] md:w-[12rem] md:h-[12rem] rounded-md h-[250px] overflow-hidden  justify-center bg-white w-[250px] shadow-md cursor-pointer hover:bg-blue-50 hover:shadow-xl transition-all ease-linear'>
                <div className=''>
                    <Image
                        src={src}
                        height={200}
                        width={250}
                        layout='intrinsic'
                        // objectFit='cover'
                        className='p-0'
                        alt="card"
                    />
                    <div className='flex flagship:text-[0.6rem] mini:text-[0.5rem] mini:justify-start mini:p-1 mini:text-center mobile:text-center mobile:justify-center  mobile:text-[0.69rem]  sm:text-[0.7rem] justify-center p-2 lg:text-[0.9rem] md:text-[0.7rem]'>
                        {title}

                    </div>
                </div>
            </div>

            {/* <div className="flex justify-center">
                <div className="max-w-sm bg-white rounded-lg shadow-lg">
                    <Link href="#!">
                        <img
                            className="rounded-t-lg"
                            src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                            alt=""
                        />
                    </Link>
                    <div className="p-6">
                        <h5 className="mb-2 text-xl font-medium text-gray-900">Card title</h5>
                        <p className="mb-4 text-base text-gray-700">
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