import Header1 from "../components/header1"
import { useState } from 'react';
import { doc } from '@firebase/firestore'; // for creating a pointer to our Document
import { setDoc } from 'firebase/firestore';
import { firestore } from "../components/FirebaseConfig";
import Link from "next/link";





function Signup() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // avoid default behaviour
        console.log(user);
        if (!user || !password) { // check for any null value
            console.log("NO EMPTY");
        }
        addTodo();
    }

    const addTodo = async () => {
        // get the current timestamp
        const timestamp: string = Date.now().toString();
        // create a pointer to our Document
        const _students = doc(firestore, `students/${timestamp}`);
        // structure the todo data
        const todoData = {
            user,
            password,
            done: false
        };
        try {
            //add the Document
            await setDoc(_students, todoData);
            //show a success message
            //reset fields
            setUser("");
            setPassword("");
        } catch (error) {
            //show an error message

        }
    };

    return (
        <div>
            <Header1 />
            <section className="h-screen">
                <div className="w-full h-full ">
                    <div className="flex flex-wrap items-center justify-center w-full h-full text-gray-800 g-6 bg-red-50">
                        {/* <div className="visible mb-12 md:w-8/12 lg:w-6/12 md:mb-0">
                            <img
                                src="https://www.srec.ac.in/srec_admin/resource/uploads/src/oDQnjet6hO19072020093318img1.jpg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div> */}
                        <div className="p-20 shadow-md md:w-8/12 lg:w-5/12 lg:ml-20 bg-slate-100 rounded-xl">
                            <h1 className="text-[40px] text-center  mb-10">Login</h1>
                            <form onSubmit={handleSubmit}>
                                {/* Email input */}
                                <label className="font-semibold text-[18px]">Email:</label>
                                <div className="relative pt-0 mt-5 mb-6">

                                    <input
                                        type="text"
                                        className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                        onChange={e => setUser(e.target.value)}
                                    />


                                    <h1 className="absolute top-2 right-4 font-medium text-[18px]  ">@srec.ac.in</h1>


                                </div>
                                {/* Password input */}
                                <label className="font-semibold text-[18px]">Password:</label>

                                <div className="mt-5 mb-6">
                                    <input
                                        type="password"
                                        className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
                                            id="exampleCheck3"
                                            defaultChecked={false}
                                        />
                                        <label
                                            className="inline-block text-gray-800 form-check-label"
                                            htmlFor="exampleCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <Link
                                        href="#!"
                                        className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 focus:text-blue-700 active:text-blue-800"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-blue-600 rounded shadow-md px-7 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign in
                                </button>



                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Signup