// insted of .jsx extension we can also use the .js extension

import React from 'react'
import { useState} from 'react';
import Spinner from './Spinner';

import useGif from "../hooks/useGif"




const Tag = () => {

  
  const [tag , setTag]=useState("car");

  // *! using custom HOOK
  const {gif, loader , fetchData}=useGif(tag);


   function clickHandler(){
            fetchData();
    }



    function changeHandler(e){
            e.preventDefault();

            setTag(e.target.value);
    }



  return (
    <div className='w-1/2 bg-blue-400 rounded-lg outline flex flex-col items-center gap-y-5 mt-[15px] mb-[35px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random <span className='text-violet-900 italic'>{tag}</span> Gif</h1>


                {
                    loader? (<Spinner/>) : (<img src={gif} 
                        width='450'
                        alt='gif'
                        />)
                } 
            



                <input
                    className='w-7/12 text-lg py-2 rounded-lg  mb-[3px] text-center'
                    onChange={changeHandler}
                    type="text"
                    value={tag}
                    />



            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg hover:bg-white trasition-all duration-300 mb-[20px]">
                Generate
            </button>

    </div>
  )
}

export default Tag
