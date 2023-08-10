import { onAuthStateChanged,signInWithEmailAndPassword,signOut,createUserWithEmailAndPassword } from 'firebase/auth'
import React, {createContext,useContext, useEffect, useState} from 'react'
import { auth, fireStore } from '../lib/firebase'
import { Oval } from '../node_modules/react-loader-spinner/dist/index'
import { doc, onSnapshot } from "firebase/firestore";
import Lottie  from '../node_modules/lottie-react/build/index'
import * as loaderAnimation from '../components/loader.json'






const AuthContext=createContext<any>({})




export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}:{children: React.ReactNode}) =>{
    const [user,setUser] = useState<any>(null)
    const [loading,setLoading] = useState(true)
    const [userDetails,setUserDetails] = useState<any>(null)
    const [profile,setProfile] = useState<any>(null)
    const defaultValue = {
        name:"Not Set",
        "roll no":"Not Set",
        batch:"Not Set",
        year:"Not Set",
        class:"Not Set",
        department:"Not Set",
        tutour:"Not Set",
        profileUrl:"https://imgs.search.brave.com/grxrgADbyxOIAv2T6gE3UOsEP-yGkAW0IOTRSrHfr-A/rs:fit:860:900:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzEwNS0x/MDU1NjU2X2FjY291/bnQtdXNlci1wcm9m/aWxlLWF2YXRhci1h/dmF0YXItdXNlci1w/cm9maWxlLWljb24u/cG5n"

    }
    


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user: { uid: any; email: any; displayName: any })=>{
        if(user){
            setUser({
                uid:user.uid,
                email:user.email,
                displayName:user.displayName
            })
            const unsub = onSnapshot(doc(fireStore, `students/${user.uid}`), (doc) => {
                console.log("Current data: ", doc.data());
                if(doc.data()){
                setUserDetails(doc.data())
                setProfile(doc.data().profileUrl)
                }else{
                    setUserDetails(defaultValue)
                    setProfile(defaultValue.profileUrl)
                }
                
            });

        }
        else{
            setUser(null)
        }
        setLoading(false)
      })
    
      return ()  => {unsubscribe();}
    }, [])

    const login = (email:string,password:string)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = async () =>{
        setUser(null)
        await signOut(auth)
    }

    const signup = async (email:string) => {
        await createUserWithEmailAndPassword(auth, email, "srec@123")
        .then((userCredential) => {
          // Signed in 
          return userCredential
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      
    }
    
    
    return (
        <AuthContext.Provider value={{user,userDetails,profile,login,logout,signup}}>
            {loading ? (<div className='flex items-center justify-center bg-[#171717] h-screen'><Lottie className='scale-[30%]'  animationData={loaderAnimation} loop={true} /></div>) :children}
            </AuthContext.Provider>
    )
} 
