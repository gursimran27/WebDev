// insted of .jsx extension we can also use the .js extension

import React from 'react'
import Spinner from './Spinner';

import useGif from "../hooks/useGif"




const Random = () => {

     // *! using custom HOOK
   const {gif , loader , fetchData}=useGif();
   

    function clickHandler(){
            fetchData();
    }

  return (
    <div className='w-1/2 bg-green-400 rounded-lg outline flex flex-col items-center gap-y-5 mt-[15px]'>

            <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>A Random Gif</h1>


                {
                    loader? (<Spinner/>) : (<img src={gif} 
                        width='450'
                        alt='gif'
                        />)
                } 
            

            <button onClick={clickHandler}
            className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg hover:bg-white trasition-all duration-300 mb-[20px]">
                Generate
            </button>

    </div>
  )
}

export default Random
