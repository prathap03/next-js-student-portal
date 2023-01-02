import React, { useEffect, useState } from 'react'
import { fireStore, storage } from '../lib/firebase';
import { onSnapshot, collection, query, doc, where, deleteDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";


function Orders() {
    const [Orders,setOrders] = useState(null)
    
    useEffect(() => {

        const q = query(collection(fireStore, `treat/User/Orders`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const certificateData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            certificateData.push(data);
            console.log(doc)
    
          });
          setOrders(certificateData)
    
    
          console.log("cert: ", certificateData)
    
    
    
        });
    
    
    
        // Later ...
    
        // Stop listening to changes
    
    
    
        return () => {
          unsubscribe()
        }
      }, [])
  return (
    <div className='flex w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='flex flex-wrap justify-center flex-grow gap-2 m-2 md:justify-start md:flex-col'>
    {Orders && Orders.map((o)=>{
        return(
            <div key={o.UserId} className='p-4 bg-red-500/[50%] md:w-[20%] w-[70%]  rounded-xl shadow-xl h-max backdrop-blur-md'>
            <h1>UserId: {o.UserId}</h1>
            <h1 className='font-semibold '>Name: {o.Name}</h1>
            <h1>Main Dish: {o.MainDish}</h1>
            <h1>Cool Drinks: {o.CoolDrinks}</h1>
            {o.Spl && (
                <h1 className='animate-pulse'>Spl: {o.Spl}</h1>
            )}
            {o.RemainingBudget > 0 ? (
                <h1 className='flex justify-center p-2 mt-2 font-bold text-green-900 bg-green-400 rounded-full shadow-lg shadow-green-500 ring-2 ring-green-800'>Remaining: &#8377; {o.RemainingBudget}</h1>
            ):(
                <h1 className='flex justify-center p-2 mt-2 font-bold text-red-900 bg-red-400 rounded-full shadow-lg shadow-red-500 ring-2 ring-red-800'>Remaining: &#8377; {o.RemainingBudget}</h1>

            )}
           
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default Orders