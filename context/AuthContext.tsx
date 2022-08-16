import { onAuthStateChanged,signInWithEmailAndPassword,signOut } from 'firebase/auth'
import React, {createContext,useContext, useEffect, useState} from 'react'
import { auth } from '../lib/firebase'
import { Oval } from '../node_modules/react-loader-spinner/dist/index'







const AuthContext=createContext<any>({})




export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}:{children: React.ReactNode}) =>{
    const [user,setUser] = useState<any>(null)
    const [loading,setLoading] = useState(true)
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth,(user: { uid: any; email: any; displayName: any })=>{
        if(user){
            setUser({
                uid:user.uid,
                email:user.email,
                displayName:user.displayName
            })
        }
        else{
            setUser(null)
        }
        setLoading(false)
      })
    
      return ()  => unsubscribe()
    }, [])

    const login = (email:string,password:string)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = async () =>{
        setUser(null)
        await signOut(auth)
    }
    
    
    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {loading ? (<div className='flex items-center justify-center h-screen'><Oval/></div>) :children}
            </AuthContext.Provider>
    )
} 
