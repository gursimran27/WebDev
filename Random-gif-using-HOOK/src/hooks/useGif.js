// the below is not a JSX code so thats why we are not returning it,,,,, it is just the logic


import axios from 'axios';
import { useState , useEffect } from 'react';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {

    
    const[ gif , setGif]=useState('');
    const [loader , setLoader]=useState(true);

    const randomUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;



    async function fetchData(){
        // not use {tag} as tag is not a props it is a function argument
            setLoader(true);

        const output= await axios.get(tag ? (tagUrl) : (randomUrl));

        // destructuring of object 
        // with this we simply extract the data part form the json response because our main content is in data->data->images->downsized_large->url
        const {data}=output

        // console.log(output);
        console.log(tag);

        // the below can be done by seeing the data from json fromattor website 
        const imageSource= data?.data?.images?.downsized_large?.url;
        
        // console.log(imageSource);

        setGif(imageSource);
        setLoader(false);
        

   }


   useEffect(() => {

        fetchData();

    }, []);
    // execute on first render

    return { gif , loader , fetchData};
    // we came to know that we have to return gif , loader , fetchData because all these are used in our component
   

}

export default useGif