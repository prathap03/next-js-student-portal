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
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";
const Header = () => {
    // const session = useSession();
    
 const {logout,user,userDetails,profile} = useAuth()


    return (
        <div className='z-50 flex items-center justify-center p-2 bg-white shadow-md sticky-top-0 lg:px-5'>
            {/* Left */}
            <div className='h-max mini:w-[3.5rem]'>
                <Link href='/'><Image src="https://www.srec.ac.in/lib/images/logosrec.jpg" width={71} height={59} layout='responsive' /></Link>

            </div>
            <div className='flex items-center justify-center -mt-2 h-max'>
                <h1 className='text-[#0038FF]/70 mini:text-[1.25rem] text-[2.3rem] p-2'>SREC</h1>
            </div>
            {/* <div className='flex p-2 ml-2 bg-gray-100 rounded-full'>
                <SearchIcon className='h-6 text-gray-600' />
                <input className='items-center flex-shrink hidden ml-2 placeholder-gray-500 bg-transparent outline-none md:inline-flex ' type="text" placeholder='Search Facebook' />
            </div> */}
            {/* Center  */}
            <div className='flex justify-center flex-grow '>
                <div className='flex mini:text-[0.6rem] sm:text-[1.5rem] md:text-[30px] space-x-6 md:space-x-2'>
                    <h1>Student Certification <span className='text-[#0038FF]/90'>Portal</span></h1>
                    {/* <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} /> */}
                </div>
            </div>
            {/* Right */}
            
            <div className='flex items-center justify-end gap-1 sm:space-x-2'>
                <Link href="/profile">
                    {userDetails ?(
                        <div className='mini:w-[1.5rem]'>
                        <Image
                        className='object-cover rounded-full cursor-pointer'
                        src={profile}
                        width={48}
                        height={48}
                        layout="responsive"
                        alt="Profile"
                    />
                    </div>
                    ):("Loading")}
                
                </Link>

                <Link href="/profile"><p className='pr-3 text-xl mini:text-[1rem] font-semibold whitespace-nowrap'>{user.email[0].toUpperCase()+user.email.split(".")[0].slice(1)}</p></Link>
                 
                <button className='p-2 mini:h-[1.6rem] mini:w-[3rem] mini:text-[0.6rem] font-semibold text-white bg-blue-500 rounded-md' onClick={logout}>Logout</button>
                
                {/* <ViewGridIcon className='icon' />
                <ChatIcon className='icon' />
                <BellIcon className='icon' />
                <ChevronDownIcon className='icon' /> */}

            </div>
        </div>
    );
}

export default Header;