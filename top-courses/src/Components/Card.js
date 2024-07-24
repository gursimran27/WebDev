import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc";
// the above react images can be seen using react icon website
import {toast} from "react-toastify";


const Card = ({course, likedCourses , setLikeCourses}) => {

    function clickHandler(){
        if(likedCourses.includes(course.id)){
            // mean already liked
            // prev represent previous state
            setLikeCourses( (prev)=> prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Removed");
        }
        else{
            // not liked yet
            if(likedCourses.length===0){
                setLikeCourses([course.id]);//return array
            }
            else{
                setLikeCourses( (prev)=>[...prev , course.id]); //return array
            }

            toast.success("Liked Successfully");
            
        }
    }

  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>

        <div className='relative'>
            <img src={course?.image?.url}></img>
            {/* i know about this from json formator website */}
        
        
            <div className='w-[40px]  h-[40px]  bg-white rounded-full absolute right-2 bottom-[-19px] flex justify-center items-center'>
                <button onClick={clickHandler}>
                    {
                        !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>): (<FcLike fontSize="1.75rem"/>)
                    }
                </button>
            </div>

        </div>

        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>

                {
                    course.description.length>100 ? (course.description.substr(0,100))+"..." : (course.description)
                }
            </p>
        </div>


    </div>
  )
}

export default Card