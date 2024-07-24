// insted of .jsx extension we can also use the .js extension

import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';


// to accesss the key from envirement variable see below
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const[ gif , setGif]=useState('');

    const [loader , setLoader]=useState(true);

    const [tag , setTag]=useState("confused");

   async function fetchData(){
            setLoader(true);

        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        const output=await axios.get(url);

        // destructuring of object 
        // with this we simply extract the data part form the json response because our main content is in data->data->images->downsized_large->url
        const {data}=output

        // console.log(output);
        console.log(data);

        // the below can be done by seeing the data from json fromattor website 
        const imageSource= data?.data?.images?.downsized_large?.url;
        
        // console.log(imageSource);

        setGif(imageSource);

        setLoader(false);
   }


   useEffect(() => {

        fetchData();

    }, []);
   


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
