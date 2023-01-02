import React, { useState } from 'react'
import { fireStore, storage } from '../lib/firebase';
import { onSnapshot, collection, query, doc, where, deleteDoc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";
function Treat() {

    const [Budget,setBudget] = useState(75)
    const [Drinks,setDrinks] = useState(null);
    const [MainDish,setMainDish] = useState(null);
    const [UserId,setUserId] = useState(null);
    const [Count,setCount] = useState(0);
    const [Spl,setSpl] = useState(null);
    const [Auth,setAuth] = useState(null);
    const [Name,setName] = useState(null);
    const food = {
        "Chicken Noodles":60,
        "Chicken Fried Rice":60,
        "Chicken Biryani":60,
        "Plain Biryani":40,
        "Chappathi":40,
        "Parotta":40,
        "Romali Roti":60
    }
    const [Prev,setPrev] = useState(null);

    const checkUser = (uid)=>{
        const unsub = onSnapshot(doc(fireStore, `treat/invited`), (doc) => {
           
            if(doc.data()){
            console.log(doc.data().userId)
            if(doc.data().userId.includes(uid)){
                console.log("Invited guest")
                setAuth(true);
                setUserId(uid);
            }else{
                setAuth(false)
            }
            }
        });
    }   

    const addMain = (dish)=>{
        if(dish!="default"){
            setMainDish(dish)
            if(Prev){
                setBudget(food[Prev]+Budget-food[dish]);
                setPrev(dish);
                return;
            }
            setBudget(Budget-food[dish])
            setPrev(dish)
        }
    }

    const addDrink = (drink)=>{
        setDrinks(drink)
        if(drink!='None' && drink!="default"){
           
            if(Count<1){
                setBudget(Budget-15)
                setCount(1);
            }
        }
        if(drink=='None' && (Budget+15<=75) && Drinks){
            setBudget(Budget+15)
            setCount(0)
        }
    }

    const addToDB = async () => {
        if(UserId && MainDish && Drinks){
            // create a pointer to our Document
            const unsub = onSnapshot(doc(fireStore, `treat/User/Orders/${UserId}`),async (docs) => {
           
                if(docs.data()){
                    console.log(docs.data())
                   
                        console.log(docs.data())
            window.alert("You Have Already Registered")
            return
                    

                    
                }
                else{
                    const data = doc(fireStore, `treat/User/Orders/${UserId}`);
        // structure the todo data
        const certificateData = {
            UserId:UserId,
            Name:Name,
            RemainingBudget:Budget,
            MainDish:MainDish,
            CoolDrinks:Drinks,
            Spl:Spl
           
        };
        try {
            //add the Document
            await setDoc(data, certificateData);
            //show a success message
            window.alert("Reserved")
            setUserId(null);
            setSpl(null);
            setMainDish(null);
            location.reload();
            //reset fields
        } catch (error) {
            //show an error message
            console.log(error)
        }
        }
                
                
            });
        
        }
    };


  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='flex flex-col gap-4 w-[80%]  bg-red-200/[35%] backdrop-blur-lg p-4   shadow-md rounded-md'>
            <div className='flex justify-center font-medium'>
                Order Form
            </div>
            <div className='flex justify-center p-2 bg-red-200/[35%] rounded-sm shadow-sm'>
                <h1>Remaining Budget: &#8377; {Budget} </h1>
            </div>
            <div className='flex flex-col gap-2'>
                <h1>User ID</h1>
                {Auth?(
                    <input onBlur={(e)=>checkUser(e.target.value)}  className='bg-red-200/[55%] rounded-full h-[2.2rem] text-[0.8rem] shadow-md p-2 outline-green-500 ring-green-500 ring-2'/>
                ):Auth==null?(
                    <input onBlur={(e)=>checkUser(e.target.value)}  className='bg-red-200/[55%] rounded-full h-[2.2rem] text-[0.8rem] shadow-md p-2 outline-none'/>
                ):
                (<input onBlur={(e)=>checkUser(e.target.value)}  className='bg-red-200/[55%] rounded-full h-[2.2rem] text-[0.8rem] shadow-md p-2 outline-none ring-red-500 ring-2'/>)}
            </div>
            <div className='flex flex-col gap-2'>
                <h1>Name</h1>
                <input onChange={(e)=>setName(e.target.value)} placeholder='Name' className='bg-red-200/[55%] rounded-full h-[2.2rem] text-[0.8rem] shadow-md p-2 outline-none'/>
                </div>
            <div className='flex flex-col gap-2'>
            <h1>Main Dish</h1>
                            <select onChange={(e) => {addMain(e.target.value)}} required className='bg-red-200/[55%] text-[0.8rem] rounded-full h-[2.2rem] shadow-md p-2 outline-none' name="cars" id="cars">
                                <option style={{ padding: "12px" }} value="default" selected>Select Dish..</option>
                                <option style={{ padding: "12px" }} value="Chicken Noodles">Ckn. Noodles</option>
                                <option style={{ padding: "12px" }} value="Chicken Fried Rice">Ckn. Fried Rice</option>
                                <option style={{ padding: "12px" }} value="Chicken Biryani">Ckn. Biryani</option>
                                <option style={{ padding: "12px" }} value="Plain Biryani">Plain Biryani</option>
                                <option style={{ padding: "12px" }} value="Parotta">Parotta</option>
                                <option style={{ padding: "12px" }} value="Chappathi">Chappathi</option>
                                <option style={{ padding: "12px" }} value="Romali Roti">Romail Roti</option>
                            </select>
            </div>
            <div className='flex flex-col gap-2'>
            <h1>Cool Drinks</h1>
                            <select onChange={(e) => {addDrink(e.target.value)}} required className='bg-red-200/[55%] text-[0.8rem] rounded-full h-[2.2rem] shadow-md p-2 outline-none' name="cars" id="cars">
                                <option style={{ padding: "12px" }} value="default" selected>Select Cool Drinks..</option>
                                <option style={{ padding: "12px" }} value="None">None</option>
                                <option style={{ padding: "12px" }} value="Mountain Dew">Mountain Dew</option>
                                <option style={{ padding: "12px" }} value="Mountain Dew without ice">Mountain Dew W.O Ice</option>
                                <option style={{ padding: "12px" }} value="Pepsi">Pepsi</option>
                                <option style={{ padding: "12px" }} value="Pepsi without ice">Pepsi without ice</option>
                                <option style={{ padding: "12px" }} value="Mirinda">Mirinda</option>
                                <option style={{ padding: "12px" }} value="Mirinda without ice">Mirinda without Ice</option>

                            </select>
            </div>
            {Drinks == "None" && (
                <div className='flex flex-col gap-2'>
                <h1>Spl. Additionals</h1>
                <input onChange={(e)=>setSpl(e.target.value)} placeholder='As per remaining budget' className='bg-red-200/[55%] rounded-full h-[2.2rem] text-[0.8rem] shadow-md p-2 outline-none'/>
                </div>
            )}

<div className='flex justify-center'>
           <input type="button" onClick={()=>addToDB()} value="Register" className='p-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[50%] rounded-full  m-2' />
            </div>
        </div>

    </div>
  )
}

export default Treat