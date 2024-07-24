import React from 'react';
import Card from "./Card"
import { FiChevronLeft , FiChevronRight} from "react-icons/fi"
import { useState } from 'react';

const Testimonial = (props) => {

        let review=props.reviews;//it contain all the revieus

        const[index,setIndex]=useState(0);
        // initilized by 0 mean with pranay gupta

        function leftShiftHAndler(){
            if(index - 1 < 0){
                setIndex(review.length -1);
            }
            else{
                setIndex(index-1);
            }
        }

        function rightShiftHAndler(){
            if(index + 1 >= review.length){
                setIndex(0);
            }
            else{
                setIndex(index+1);
            }
        }

        function surpriseHandler(){
                setIndex(Math.floor(Math.random()* review.length));
        }



  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl  rounded-md'>
            <Card review={review[index]}></Card>

            <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold justify-center'>
                <button 
                onClick={leftShiftHAndler}
                className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
                </button>

                <button
                onClick={rightShiftHAndler} 
                className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight/>
                </button>
            </div>

            <div className='mx-auto mt-6'>
                <button 
                onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md text-white font-bold text-lg'>Surprise Me</button>
            </div>

    </div>
  )
}

export default Testimonial