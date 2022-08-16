import Image from 'next/image';
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid';
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";
const Header = () => {
    // const session = useSession();
    
 const {logout,user} = useAuth()


    return (
        <div className='z-50 flex items-center justify-center p-2 bg-white shadow-md sticky-top-0 lg:px-5'>
            {/* Left */}
            <div className='h-max'>
                <Link href='/'><Image src="https://www.srec.ac.in/lib/images/logosrec.jpg" width={71} height={59} layout='fixed' /></Link>

            </div>
            <div className='flex items-center justify-center -mt-2 h-max'>
                <h1 className='text-[#6945F9]/90 text-[2.3rem] p-2'>SREC</h1>
            </div>
            {/* <div className='flex p-2 ml-2 bg-gray-100 rounded-full'>
                <SearchIcon className='h-6 text-gray-600' />
                <input className='items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex ' type="text" placeholder='Search Facebook' />
            </div> */}
            {/* Center  */}
            <div className='flex justify-center flex-grow'>
                <div className='flex sm:text-[1.5rem] md:text-[30px] space-x-6 md:space-x-2'>
                    <h1>Student Certification <span className='text-[#0038FF]/90'>Portal</span></h1>
                    {/* <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} /> */}
                </div>
            </div>
            {/* Right */}
        
            <div className='flex items-center justify-end sm:space-x-2'>
                <Link href="/profile">
                <Image

                    className='rounded-full cursor-pointer'
                    src="https://cdn.pixabay.com/photo/2022/06/03/20/15/sunset-7240788__340.jpg"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="Profile"
                />
                </Link>

                <Link href="/profile"><p className='pr-3 text-xl font-semibold whitespace-nowrap'>{user.email[0].toUpperCase()+user.email.split(".")[0].slice(1)}</p></Link>
                 
                <button className='p-2 font-semibold text-white bg-blue-500 rounded-md' onClick={logout}>Logout</button>
                
                {/* <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' /> */}

            </div>
        </div>
    );
}

export default Header;