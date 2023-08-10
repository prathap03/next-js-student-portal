import React, { useEffect, useState } from 'react'
import { collection, collectionGroup, doc, getDoc, getDocs, onSnapshot } from "firebase/firestore";
import { fireStore, storage } from '../lib/firebase';
import { BsFillPersonFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

function Home() {

    const [number,setNumber] = useState(0);
    const [subjects,setSubjects] = useState([]);

    const fetchSubjects = async () => {
        await getDocs(collection(fireStore,"nfc/attendance/subjects")).then((querySnapshot)=>{
            const newData = querySnapshot.docs.map((doc)=>(
                {...doc.data(),id:doc.id}
            ));
            // setSubjects([newData]);
            console.log(subjects)
        })
    }

    function areTimestampsEqualIgnoringTime(timestamp1Seconds) {
        const timestamp1Milliseconds = timestamp1Seconds * 1000; // Convert to milliseconds
        const timestamp2Milliseconds = new Date().getTime(); // Convert to milliseconds
        
        const date1 = new Date(timestamp1Milliseconds);
        const date2 = new Date(timestamp2Milliseconds);
        
        const year1 = date1.getFullYear();
        const month1 = date1.getMonth();
        const day1 = date1.getDate();
        
        const year2 = date2.getFullYear();
        const month2 = date2.getMonth();
        const day2 = date2.getDate();
      
        return year1 === year2 && month1 === month2 && day1 === day2;
      }
    
    function timestampToTimeOfDay(timestamp) {
        const date = new Date(timestamp*1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        // const seconds = date.getSeconds();
      
        // Determine AM or PM
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
      
        // Convert hours to 12-hour format
        const formattedHours = (hours % 12) || 12;
      
        // Format the time components as two digits
        const formattedMinutes = minutes.toString().padStart(2, '0');
      
        return `${formattedHours}:${formattedMinutes} ${amOrPm}`;
      }
      
 

    // useEffect(  () => {

    //     const userRef = doc(fireStore,'Users','2105043');
    //     const enrolledCoursesRef = collection(userRef,'EnrolledCourses');
     
        
    //     const fetchEnrolledCourses = async ()=>{
    //         try{
    //             const enrolledCoursesSnapshot = await getDocs(enrolledCoursesRef);
    //             const enrolledCourseIds = enrolledCoursesSnapshot.docs.map(doc=> doc.id);

    //             enrolledCourseIds.forEach(async courseId =>{
    //                 const attendanceRef = collection(fireStore,'Courses',courseId,'Attendance');
    //                 const coursesRef = doc(fireStore,'Courses',courseId);
    //                 let enrolledCourses = []
    //                 getDoc(coursesRef).then((courseSnapshot)=>{
    //                     if(courseSnapshot.exists()){
    //                         const courseData = courseSnapshot.data();
    //                         enrolledCourses.push(courseData);
    //                         // console.log(courseData)
    //                     }
    //                 })
    //                 console.log(enrolledCourses)
    //                 const userAttendanceDoc = doc(attendanceRef,'2105043');
    //                 const userAttendanceSnapshot = await getDoc(userAttendanceDoc);

    //                 if(userAttendanceSnapshot.exists()){
    //                     const attendanceData = userAttendanceSnapshot.data();
    //                     const attendanceDates = attendanceData.dates || [];
    //                     console.log(attendanceData);
    //                 }

    //             })
    //         }catch(error){

    //         }
    //     }
    //     fetchEnrolledCourses();



        
            
      
    
     
    // }, [2105043])

    const userId = '2105043';

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
      const userRef = doc(fireStore, 'Users', userId);
      const enrolledCoursesRef = collection(userRef, 'EnrolledCourses');
  
      const unsubscribe = onSnapshot(enrolledCoursesRef, (querySnapshot) => {
        const courses = [];
        querySnapshot.forEach(enrolledCourseDoc => {
          const courseId = enrolledCourseDoc.id;
          const courseRef = doc(fireStore, 'Courses', courseId);
  
          onSnapshot(courseRef, (courseSnapshot) => {
            if (courseSnapshot.exists()) {
              const courseData = courseSnapshot.data();

     // Include attendance data from user's document
     const userAttendanceRef = doc(courseRef, 'Attendance', userId);
     onSnapshot(userAttendanceRef, (attendanceSnapshot) => {
       if (attendanceSnapshot.exists()) {
         const attendanceData = attendanceSnapshot.data();
         const courseWithAttendance = { id: courseId, ...courseData,attendance:attendanceData };
         
         // Check if the course already exists in the courses array
         const existingCourseIndex = courses.findIndex(course => course.id === courseId);
         if (existingCourseIndex === -1) {
           courses.push(courseWithAttendance);
           setEnrolledCourses(courses);
         } else {
           // Update the existing course data
           courses[existingCourseIndex] = courseWithAttendance;
           setEnrolledCourses([...courses]);
         }
        }})
        console.log(courses)

  
              // Handle course data
              // Update UI or perform other actions
              // ...
            }
          }, error => {
            // Handle errors
          });
        });
      }, error => {
        // Handle errors
      });
  
      return () => {
        unsubscribe();
      };
    }, [userId]);

    console.log(enrolledCourses)
    
  return (
    <div className=' bg-[#171717] h-screen overflow-scroll min-h-screen flex relative flex-col'>
        <div className='flex flex-col'>
            <div className='overflow-y-scroll no-scrollbar gap-4 flex-shrink-0 p-2 justify-between flex flex-row w-full h-[5rem] mt-[2rem]'>
                <div className='flex flex-col items-center justify-center p-4 text-black rounded-full font-bold bg-[#737373]'>
                    <h1>23</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-black rounded-full bg-[#737373]'>
                    <h1>24</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-white rounded-full bg-[#737373]'>
                    <h1>25</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 font-bold text-black rounded-full bg-[#737373]'>
                    <h1>26</h1>
                    <h1>AUG</h1>
                </div>

                <div className='flex flex-col items-center justify-center p-4 text-black font-bold rounded-full bg-[#737373]'>
                    <h1>27</h1>
                    <h1>AUG</h1>
                </div>
                <div className='flex flex-col items-center justify-center p-4 text-black font-bold rounded-full bg-[#737373]'>
                    <h1>28</h1>
                    <h1>AUG</h1>
                </div>


            </div>


            <div className='flex flex-col flex-grow gap-2 m-4'>

         {enrolledCourses && enrolledCourses.length > 0 && enrolledCourses.map((sub,idx)=>{
            // console.log(sub.attendance.dates[0].seconds)
            var attended = 0;
            let attendedToday =false;
            var hours = 0;
            sub.attendance.dates.map((day)=>{
                console.log(day.time)
                if(areTimestampsEqualIgnoringTime(day.time.seconds)){
                    attendedToday=true;
                    hours = day.hour;
                }
                attended++;
            })
            console.log(sub)
            if(hours==2 || hours==0){
                return (
                    <Link key={sub.course_code} href={`/attendance/${sub.course_code}`}>
                    <div className={attendedToday?'relative flex flex-col gap-2  rounded-md shadow-md bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-50%':'relative flex flex-col gap-2  rounded-md shadow-md bg-gradient-to-r from-red-500 from-10% via-red-500 via-30% to-emerald-500 to-50%'}>
                    <div className='z-10 flex flex-col justify-start p-2'>
                        <h1 className='font-bold'>{timestampToTimeOfDay(sub.attendance.dates[0].time.seconds)}</h1>
                        <h1 className='text-[1.6rem] leading-none font-bold'>{sub.course_code}</h1>
                        <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>{sub.course_name}</h1>
                    </div>
                    <div className='absolute bottom-[-1rem] right-0'>
                        <h1 className='text-white/[70%] text-[9rem]    leading-none'>{parseFloat(((attended/sub.completed_hours)*100).toFixed(1))}</h1>
                    </div>
                    </div>
                    </Link>
                )
            }else{
                return(
                    <div key={sub.course_code} className={!attendedToday ? 'relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md  bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%': 'relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md  bg-gradient-to-r from-green-900 from-10%  to-green-500 to-90%'}>
                    <div className='z-10 flex flex-col justify-start p-2'>
                        <h1 className='font-semibold'>{timestampToTimeOfDay(sub.attendance.dates[0].time.seconds)} {sub.course_code}</h1>
                        <h1 className='font-semibold text-[3.8rem] leading-none '>{sub.course_name}</h1>
                       
                    </div>
                    <div className='absolute bottom-[-0.5rem] right-0'>
                        <h1 className='text-white/[70%] text-[6rem]    leading-none'>{parseFloat(((attended/sub.completed_hours)*100).toFixed(1))}</h1>
                    </div>
        
                    </div>
                )
            }
               
            
         })}

{/* 
            <div className='relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-semibold'>8:45 20CS280</h1>
                <h1 className='font-semibold text-[3.8rem] leading-none '>ESIOT</h1>
               
            </div>
            <div className='absolute bottom-[-0.5rem] right-0'>
                <h1 className='text-white/[70%] text-[6rem]    leading-none'>76</h1>
            </div>

            </div>


            <div className='relative min-h-[6rem]  flex flex-col gap-2  rounded-xl shadow-md bg-gradient-to-r from-red-900 from-10%  to-red-500 to-90%'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-semibold'>1:35 20HS212</h1>
                <h1 className='font-semibold text-[3.8rem] leading-none '>UHV</h1>
               
            </div>
            <div className='absolute bottom-[-0.5rem] right-0'>
                <h1 className='text-white/[70%] text-[6rem]    leading-none'>85</h1>
            </div>

            </div>

            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>1:10</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC2990</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>CS</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>75</h1>
            </div>
            </div>


            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>3:00</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC290</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>MSBD</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>98</h1>
            </div>
            </div>

            <div className='relative flex flex-col gap-2  rounded-md shadow-md bg-[#737373]'>
            <div className='z-10 flex flex-col justify-start p-2'>
                <h1 className='font-bold'>1:10</h1>
                <h1 className='text-[1.6rem] leading-none font-bold'>20EC2990</h1>
                <h1 className='mb-[2rem] text-[3.8rem] leading-none font-semibold'>CS</h1>
            </div>
            <div className='absolute bottom-[-1rem] right-0'>
                <h1 className='text-white/[70%] text-[9rem]    leading-none'>75</h1>
            </div>
            </div> */}

            </div>

        </div>
        <div className='fixed bottom-[5%] inset-x-0 flex gap-2 shadow-md backdrop:blur-md bg-black/[40%] text-white p-4 justify-around items-center w-[55vw] rounded-[0.813rem]  mx-auto'>
          
        <Image src="/user.svg" height='33px'  width='33px' />
            <Image src="/rocket.svg" height='33px' width='33px' />
            
        </div>
    </div>
  )
}

export default Home