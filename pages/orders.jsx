import React, { useEffect, useState } from 'react'
import { fireStore, storage } from '../lib/firebase';
import { onSnapshot, collection, query, doc, where, deleteDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";


function Orders() {
    const [Orders,setOrders] = useState(null)
    const [Food,setFood] = useState(null)

    
    
    useEffect(() => {
        const foods = {
            "Chicken Noodles":{count:0,names:[]},
        "Chicken Fried Rice":{count:0,names:[]},
        "Chicken Biryani":{count:0,names:[]}
        }
        const q = query(collection(fireStore, `treat/User/Orders`));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const certificateData = [];
          querySnapshot.forEach((doc) => {
            const data = doc.data()
            data.id = doc.id
            
           
            if(Object.keys(foods).includes(data.MainDish)){
                if(!foods[data.MainDish].names.includes(data.Name)){
                foods[data.MainDish].count++;
                foods[data.MainDish].names.push(data.Name);
               
                }
                
                setFood([foods])
           
            }
            
           
            
            certificateData.push(data);
         
           
    
          });
          setOrders(certificateData)

          setFood([foods])
    
    
          console.log("cert: ", certificateData)


          let test= []
          Object.keys(foods).forEach((food)=>{
            let temp = {}
            temp.name = food;
            temp.count = foods[food].count;
            temp.orderedBy = foods[food].names;
           
            test.push(temp);
            setFood(test)
          })

          

         
          
          console.log("orders: ",Food)
    
    
    
        });




    
    
    
        // Later ...
    
        // Stop listening to changes
    
    
    
        return () => {
          unsubscribe()
        }
      }, [])

     

  return (
    <div className='flex w-screen min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='flex flex-col items-center flex-grow gap-2 m-2 md:justify-start md:items-start md:flex-col'>
    
    <div className='flex w-full gap-2 '>
    {Food && Food.map((food)=>{

        let Colors = ["red","fuchsia","orange","rose","green","blue"]

          let color= Colors[Math.floor(Math.random() * Colors.length)];
        return(
            <div className={`flex w-[80%] flex-col p-2 bg-${color}-600  rounded-md shadow-sm `}>
            <h1>{food.name}</h1>
            <h1>{food.count}</h1>
           {food.orderedBy.map((names)=>{
            return(
                <h1>{names}</h1>
            )
           })}

            </div>
        )
    })}
    </div>
    
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
    <div>
        
    </div>
    </div>
    </div>
  )
}

export default Orders