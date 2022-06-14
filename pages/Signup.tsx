import Header1 from "../components/header1"
import { useState } from 'react';
import { doc } from '@firebase/firestore'; // for creating a pointer to our Document
import { setDoc } from 'firebase/firestore';
import { firestore } from "../components/FirebaseConfi";





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
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        {/* <div className=" md:w-8/12 visible lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://www.srec.ac.in/srec_admin/resource/uploads/src/oDQnjet6hO19072020093318img1.jpg"
                                className="w-full"
                                alt="Phone image"
                            />
                        </div> */}
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20  bg-slate-100 p-20 rounded-xl shadow-md">
                            <h1 className="text-[40px] text-center  mb-10">Login</h1>
                            <form onSubmit={handleSubmit}>
                                {/* Email input */}
                                <label className="font-semibold text-[18px]">Email:</label>
                                <div className="mt-5 mb-6 pt-0 relative">

                                    <input
                                        type="text"
                                        className="form-control  block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                            id="exampleCheck3"
                                            defaultChecked={false}
                                        />
                                        <label
                                            className="form-check-label inline-block text-gray-800"
                                            htmlFor="exampleCheck2"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <a
                                        href="#!"
                                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
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