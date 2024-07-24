import React from 'react'
import {FaQuoteLeft,FaQuoteRight ,} from "react-icons/fa";


const Card = (props) => {
    let review=props.review;
  return (
    <div className='flex flex-col relative'>

            <div className='relative mx-auto md:absolute md:top-[-7rem] z-[10]'>
                <img src={review.image} className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"></img>
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-15] left-[10px]'></div>
            </div>

            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl capitalize '>{review.name}</p>
                <p className='text-violet-300 text-sm  uppercase'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'> 
                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>

    </div>
  )
}

export default Card