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
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    // const session = useSession();



    return (
        <div className='z-50 flex items-center p-2 bg-white shadow-md sticky-top-0 lg:px-5'>
            {/* Left */}
            <div>
                <a href='/'><Image src="https://www.srec.ac.in/lib/images/logosrec.jpg" width={65} height={55} layout='fixed' /></a>

            </div>
            <div>
                <h1 className='text-blue-500 text-[40px] ml-2 p-2'>SREC</h1>
            </div>
            {/* <div className='flex p-2 ml-2 bg-gray-100 rounded-full'>
                <SearchIcon className='h-6 text-gray-600' />
                <input className='items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex ' type="text" placeholder='Search Facebook' />
            </div> */}
            {/* Center  */}
            <div className='flex justify-center flex-grow'>
                <div className='flex sm:text-[1.5rem] md:text-[30px] space-x-6 md:space-x-2'>
                    <h1>Student Acceredition <span className='text-blue-500'>Portal</span></h1>
                    {/* <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} /> */}
                </div>
            </div>
            {/* Right */}
        
            <div className='flex items-center justify-end sm:space-x-2'>
                <a href="/profile">
                <Image

                    className='rounded-full cursor-pointer'
                    src="https://cdn.pixabay.com/photo/2022/06/03/20/15/sunset-7240788__340.jpg"
                    width={40}
                    height={40}
                    layout="fixed"
                    alt="Profile"
                />
                </a>

                <a href="/profile"><p className='pr-3 font-semibold whitespace-nowrap'>Joe </p></a>
                
                {/* <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' /> */}

            </div>
        </div>
    );
}

export default Header;