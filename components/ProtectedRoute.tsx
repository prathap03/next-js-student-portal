import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useRouter } from '../node_modules/next/router'
import Oval from '../node_modules/react-loader-spinner/dist/loader/Oval'

import * as loaderAnimation from '../components/loader.json'
import Lottie  from '../node_modules/lottie-react/build/index'
const ProtectedRoute = ({children}:{children:React.ReactNode}) => {
  
    const {user} = useAuth()
    const router = useRouter()

    useEffect(()=>{
        if(!user ){
            router.push({
                pathname: '/login',
                query: { from: router.pathname },
            })
        }
    },[router,user])
  
    return <>
    {user ? children : (<div className='flex items-center justify-center bg-[#171717] h-screen'><Lottie className='scale-[40%]' animationData={loaderAnimation} loop={true} /></div>)}
    </>
}

export default ProtectedRoute