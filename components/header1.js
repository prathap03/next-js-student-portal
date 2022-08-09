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


const Header1 = () => {




    return (
        <div className='z-50 flex items-center p-2 bg-white shadow-md sticky-top-0 lg:px-5'>
            {/* Left */}
            <div>
                <a href='https://www.srec.ac.in'><Image alt="logo" src="https://www.srec.ac.in/lib/images/logosrec.jpg" width={65} height={55} layout='fixed' /></a>

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
                <div className='flex space-x-6 md:space-x-1'>
                    <h1>Student Acceredition <span className='text-blue-500'>Portal</span></h1>
                    {/* <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} /> */}
                </div>
            </div>
            {/* Right */}

        </div>
    );
}

export default Header1;